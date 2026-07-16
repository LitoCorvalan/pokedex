// ============================================================
// detail.js — Ficha Pokédex completa (modal).
// Datos en vivo desde PokeAPI (https://pokeapi.co): formas,
// estadísticas, habilidades, línea evolutiva y descripción.
// Requiere badges.js (TYPE_COLORS, getTypeImageURL).
// ============================================================

const API = "https://pokeapi.co/api/v2";
const apiCache = new Map();

function maxDexNumber() {
    try {
        return Math.max(...pokemonData.map((p) => parseInt(p.number, 10)));
    } catch {
        return 1025;
    }
}

async function apiGet(url) {
    if (apiCache.has(url)) return apiCache.get(url);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`PokeAPI ${res.status}`);
    const json = await res.json();
    apiCache.set(url, json);
    return json;
}

// ---------- Traducciones locales ----------

const TYPE_ES = {
    steel: "Acero", water: "Agua", bug: "Bicho", dragon: "Dragón",
    electric: "Eléctrico", ghost: "Fantasma", fire: "Fuego", fairy: "Hada",
    ice: "Hielo", fighting: "Lucha", normal: "Normal", grass: "Planta",
    psychic: "Psíquico", rock: "Roca", dark: "Siniestro", ground: "Tierra",
    poison: "Veneno", flying: "Volador",
};

const STAT_ES = {
    hp: "PS", attack: "Ataque", defense: "Defensa",
    "special-attack": "At. Esp.", "special-defense": "Def. Esp.", speed: "Velocidad",
};

const FORM_WORDS = {
    mega: "Mega", "mega-x": "Mega X", "mega-y": "Mega Y", gmax: "Gigamax",
    alola: "de Alola", galar: "de Galar", hisui: "de Hisui", paldea: "de Paldea",
    origin: "Origen", altered: "Modificada", primal: "Primigenio",
    therian: "Tótem", incarnate: "Avatar", attack: "Ataque", defense: "Defensa",
    speed: "Velocidad", male: "Macho", female: "Hembra",
};

function prettyFormName(varietyName, speciesName) {
    if (varietyName === speciesName) return "Forma base";
    const suffix = varietyName.replace(`${speciesName}-`, "");
    if (FORM_WORDS[suffix]) return FORM_WORDS[suffix];
    return suffix
        .split("-")
        .map((w) => FORM_WORDS[w] || w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function localized(entries, field = "name") {
    const es = entries.find((e) => e.language.name === "es");
    const en = entries.find((e) => e.language.name === "en");
    return (es || en || {})[field] || "";
}

// ---------- Modal ----------

let modalEl = null;

function ensureModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement("div");
    modalEl.id = "pokeModal";
    modalEl.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-panel" role="dialog" aria-modal="true" aria-label="Ficha del Pokémon">
            <button class="modal-close" aria-label="Cerrar ficha">&times;</button>
            <div class="modal-body"></div>
        </div>`;
    document.body.appendChild(modalEl);

    modalEl.querySelector(".modal-backdrop").addEventListener("click", closeDetail);
    modalEl.querySelector(".modal-close").addEventListener("click", closeDetail);
    document.addEventListener("keydown", (e) => {
        if (!modalEl.classList.contains("open")) return;
        if (e.key === "Escape") closeDetail();
        if (e.key === "ArrowLeft") modalEl.querySelector(".nav-prev:not([disabled])")?.click();
        if (e.key === "ArrowRight") modalEl.querySelector(".nav-next:not([disabled])")?.click();
    });
    return modalEl;
}

function closeDetail() {
    if (!modalEl) return;
    modalEl.classList.remove("open");
    document.body.style.overflow = "";
}

async function openDetail(dexNumber) {
    const modal = ensureModal();
    const body = modal.querySelector(".modal-body");
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    body.innerHTML = `<div class="modal-loading">
        <div class="loader-ball"></div>
        <p>Consultando la Pokédex…</p>
    </div>`;

    try {
        const species = await apiGet(`${API}/pokemon-species/${parseInt(dexNumber, 10)}`);
        const varieties = species.varieties;
        await renderForm(body, species, varieties, varieties.findIndex((v) => v.is_default) || 0);
    } catch (err) {
        body.innerHTML = `<div class="modal-error">
            <p><strong>No pudimos cargar la ficha.</strong></p>
            <p>Revisá tu conexión e intentá de nuevo.</p>
            <button class="retry-button">Reintentar</button>
        </div>`;
        body.querySelector(".retry-button").addEventListener("click", () => openDetail(dexNumber));
    }
}

async function renderForm(body, species, varieties, formIndex) {
    const variety = varieties[formIndex];
    const pokemon = await apiGet(variety.pokemon.url);

    // Al cambiar de forma, volver arriba para ver el nuevo arte
    const panel = body.closest(".modal-panel");
    if (panel) panel.scrollTo({ top: 0, behavior: "smooth" });

    const typesEs = pokemon.types.map((t) => TYPE_ES[t.type.name] || capitalize(t.type.name));
    const c1 = (TYPE_COLORS[typesEs[0]] || {}).bg || "#A8A77A";
    const c2 = (TYPE_COLORS[typesEs[1] || typesEs[0]] || {}).bg || c1;

    const artwork =
        pokemon.sprites.other?.["official-artwork"]?.front_default ||
        pokemon.sprites.front_default || "";

    const genus = localized(species.genera, "genus");
    const flavorEntry = [...species.flavor_text_entries].reverse()
        .find((f) => f.language.name === "es");
    const flavor = flavorEntry
        ? flavorEntry.flavor_text.replace(/[\n\f\r]+/g, " ")
        : "";

    const displayName = localized(species.names) || capitalize(species.name);
    const formName = prettyFormName(variety.pokemon.name, species.name);
    const statTotal = pokemon.stats.reduce((sum, s) => sum + s.base_stat, 0);

    const prevId = species.id - 1;
    const nextId = species.id + 1;
    const maxDex = maxDexNumber();

    body.innerHTML = `
        <div class="detail-hero" style="--c1:${c1};--c2:${c2}">
            <span class="poke-number">N.º ${String(species.id).padStart(3, "0")}</span>
            <h2>${displayName}${formIndex > 0 || varieties.length > 1 ? ` · ${formName}` : ""}</h2>
            ${genus ? `<p class="detail-genus">${genus}</p>` : ""}
            <div class="hero-nav">
                <button class="nav-arrow nav-prev" ${prevId < 1 ? "disabled" : ""}
                    aria-label="Pokémon anterior (N.º ${String(prevId).padStart(3, "0")})">
                    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                        <path d="M15 5 L8 12 L15 19" fill="none" stroke="currentColor"
                            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <img class="detail-art" src="${artwork}" alt="${displayName}" loading="lazy">
                <button class="nav-arrow nav-next" ${nextId > maxDex ? "disabled" : ""}
                    aria-label="Pokémon siguiente (N.º ${String(nextId).padStart(3, "0")})">
                    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
                        <path d="M9 5 L16 12 L9 19" fill="none" stroke="currentColor"
                            stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="detail-types"></div>
        </div>

        ${varieties.length > 1 ? `
        <section class="detail-section">
            <h3>Formas</h3>
            <div class="form-tabs"></div>
        </section>` : ""}

        ${flavor ? `<p class="detail-flavor">${flavor}</p>` : ""}

        <div class="detail-columns">
            <section class="detail-section">
                <h3>Estadísticas base</h3>
                <div class="stats-list"></div>
                <p class="stats-total">Total: <strong>${statTotal}</strong></p>
            </section>

            <section class="detail-section">
                <h3>Habilidades</h3>
                <ul class="abilities-list"><li class="ability-loading">Cargando…</li></ul>
                <h3>Datos</h3>
                <p class="detail-meta">
                    Altura: <strong>${(pokemon.height / 10).toFixed(1).replace(".", ",")} m</strong><br>
                    Peso: <strong>${(pokemon.weight / 10).toFixed(1).replace(".", ",")} kg</strong>
                </p>
            </section>
        </div>

        <section class="detail-section">
            <h3>Línea evolutiva</h3>
            <div class="evo-chain"><span class="evo-loading">Cargando…</span></div>
        </section>`;

    // Flechas: Pokémon anterior / siguiente
    const prevButton = body.querySelector(".nav-prev");
    const nextButton = body.querySelector(".nav-next");
    if (prevButton && !prevButton.disabled) {
        prevButton.addEventListener("click", () => openDetail(prevId));
    }
    if (nextButton && !nextButton.disabled) {
        nextButton.addEventListener("click", () => openDetail(nextId));
    }

    // Tipos como badges SVG
    const typesBox = body.querySelector(".detail-types");
    typesEs.forEach((t) => {
        const img = document.createElement("img");
        img.src = getTypeImageURL(t);
        img.alt = `Tipo ${t}`;
        typesBox.appendChild(img);
    });

    // Tabs de formas
    if (varieties.length > 1) {
        const tabs = body.querySelector(".form-tabs");
        varieties.forEach((v, i) => {
            const tab = document.createElement("button");
            tab.className = "form-tab" + (i === formIndex ? " active" : "");
            tab.textContent = prettyFormName(v.pokemon.name, species.name);
            tab.addEventListener("click", () => renderForm(body, species, varieties, i));
            tabs.appendChild(tab);
        });
    }

    // Barras de estadísticas
    const statsList = body.querySelector(".stats-list");
    pokemon.stats.forEach((s) => {
        const value = s.base_stat;
        const pct = Math.min(100, (value / 200) * 100);
        const level = value < 60 ? "low" : value < 90 ? "mid" : value < 120 ? "high" : "top";
        const row = document.createElement("div");
        row.className = "stat-row";
        row.innerHTML = `
            <span class="stat-name">${STAT_ES[s.stat.name] || s.stat.name}</span>
            <span class="stat-value">${value}</span>
            <span class="stat-bar"><span class="stat-fill ${level}" style="width:${pct}%"></span></span>`;
        statsList.appendChild(row);
    });

    loadAbilities(body, pokemon);
    loadEvolutionChain(body, species);
}

async function loadAbilities(body, pokemon) {
    const list = body.querySelector(".abilities-list");
    try {
        const abilities = await Promise.all(
            pokemon.abilities.map(async (a) => {
                const data = await apiGet(a.ability.url);
                const flavorEs = [...(data.flavor_text_entries || [])].reverse()
                    .find((f) => f.language.name === "es");
                const effectEs = (data.effect_entries || [])
                    .find((e) => e.language.name === "es");
                return {
                    name: localized(data.names) || capitalize(a.ability.name),
                    description: (flavorEs?.flavor_text || effectEs?.short_effect || "")
                        .replace(/[\n\f\r]+/g, " "),
                    hidden: a.is_hidden,
                };
            })
        );
        list.innerHTML = "";
        abilities.forEach((a) => {
            const li = document.createElement("li");
            li.className = "ability-item";

            const header = document.createElement("div");
            header.className = "ability-name";
            header.textContent = a.name;
            if (a.hidden) {
                const tag = document.createElement("span");
                tag.className = "hidden-tag";
                tag.textContent = "oculta";
                header.appendChild(tag);
            }
            li.appendChild(header);

            if (a.description) {
                const desc = document.createElement("p");
                desc.className = "ability-desc";
                desc.textContent = a.description;
                li.appendChild(desc);
            }
            list.appendChild(li);
        });
    } catch {
        list.innerHTML = "<li>No disponible</li>";
    }
}

async function loadEvolutionChain(body, species) {
    const box = body.querySelector(".evo-chain");
    try {
        const chainData = await apiGet(species.evolution_chain.url);

        // Aplana el árbol en etapas (soporta ramas tipo Eevee)
        const stages = [];
        (function walk(node, depth) {
            if (!stages[depth]) stages[depth] = [];
            stages[depth].push(node.species);
            node.evolves_to.forEach((child) => walk(child, depth + 1));
        })(chainData.chain, 0);

        if (stages.length === 1 && stages[0].length === 1) {
            box.innerHTML = "<p class='evo-none'>Este Pokémon no evoluciona.</p>";
            return;
        }

        box.innerHTML = "";
        stages.forEach((stage, i) => {
            if (i > 0) {
                const arrow = document.createElement("span");
                arrow.className = "evo-arrow";
                arrow.textContent = "→";
                box.appendChild(arrow);
            }
            const group = document.createElement("div");
            group.className = "evo-stage";
            stage.forEach((sp) => {
                const id = sp.url.match(/\/(\d+)\/?$/)[1];
                const item = document.createElement("button");
                item.className = "evo-item" + (Number(id) === species.id ? " current" : "");
                item.setAttribute("aria-label", `Ver ficha de ${capitalize(sp.name)}`);
                const paddedId = String(id).padStart(3, "0");
                item.innerHTML = `
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png"
                        alt="" loading="lazy">
                    <span>${capitalize(sp.name)}</span>`;
                item.addEventListener("click", () => openDetail(id));
                group.appendChild(item);
            });
            box.appendChild(group);
        });
    } catch {
        box.innerHTML = "<p class='evo-none'>Línea evolutiva no disponible.</p>";
    }
}
