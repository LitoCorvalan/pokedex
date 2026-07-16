// ============================================================
// badges.js — Insignias de tipo generadas como SVG (data URI).
// Sin imágenes externas: nunca se rompen, funcionan offline.
// Debe cargarse ANTES que script.js.
// ============================================================

const TYPE_COLORS = {
    Acero:     { bg: "#B7B7CE", border: "#8E8EA8" },
    Agua:      { bg: "#6390F0", border: "#3D6FD6" },
    Bicho:     { bg: "#A6B91A", border: "#7E8E12" },
    Dragón:    { bg: "#6F35FC", border: "#5020C4" },
    Eléctrico: { bg: "#F7D02C", border: "#D4AC0D" },
    Fantasma:  { bg: "#735797", border: "#554070" },
    Fuego:     { bg: "#EE8130", border: "#C7611A" },
    Hada:      { bg: "#F78CC8", border: "#E060A8" },
    Hielo:     { bg: "#96D9D6", border: "#66B8B4" },
    Lucha:     { bg: "#C22E28", border: "#96211C" },
    Normal:    { bg: "#A8A77A", border: "#84835B" },
    Planta:    { bg: "#7AC74C", border: "#57A032" },
    Psíquico:  { bg: "#F95587", border: "#D63066" },
    Roca:      { bg: "#B6A136", border: "#8E7D28" },
    Siniestro: { bg: "#705746", border: "#514033" },
    Tierra:    { bg: "#E2BF65", border: "#C09E42" },
    Veneno:    { bg: "#A33EA1", border: "#7E2F7C" },
    Volador:   { bg: "#A98FF3", border: "#8368D6" },
};

const badgeCache = {};

function getTypeImageURL(type) {
    if (badgeCache[type]) return badgeCache[type];

    const colors = TYPE_COLORS[type] || { bg: "#999999", border: "#666666" };
    const label = type.toUpperCase();

    const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="56" viewBox="0 0 200 56">` +
        `<rect x="3" y="3" width="194" height="50" rx="25" fill="${colors.bg}" stroke="${colors.border}" stroke-width="4"/>` +
        `<text x="100" y="37" text-anchor="middle" font-family="Verdana, Arial, sans-serif" font-size="24" font-weight="bold" ` +
        `letter-spacing="2" fill="#FFFFFF" stroke="${colors.border}" stroke-width="4" paint-order="stroke" ` +
        `style="text-transform:uppercase">${label}</text>` +
        `</svg>`;

    const url = "data:image/svg+xml," + encodeURIComponent(svg);
    badgeCache[type] = url;
    return url;
}

// Rellena las imágenes de los botones del filtro de tipos del header.
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#typeFilter button").forEach((btn) => {
        const img = btn.querySelector("img");
        if (img) img.src = getTypeImageURL(btn.value);
    });
});
