const pokemonData = [{
        name: "Bulbasaur (001)",
        type: ["Planta", "Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        number: "0001",
    },
    {
        name: "Ivysaur (002)",
        type: ["Planta", "Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        number: "0002",
    },
    {
        name: "Venusaur (003)",
        type: ["Planta", "Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        number: "0003",
    },
    {
        name: "Charmander (004)",
        type: ["Fuego"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        number: "0004",
    },
    {
        name: "Charmeleon (005)",
        type: ["Fuego"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        number: "0005",
    },
    {
        name: "Charizard (006)",
        type: ["Fuego", "Volador"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        number: "0006",
    },
    {
        name: "Squirtle (007)",
        type: ["Agua"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        number: "0007",
    },
    {
        name: "Wartortle (008)",
        type: ["Agua"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        number: "0008",
    },
    {
        name: "Blastoise (009)",
        type: ["Agua"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        number: "0009",
    },
    {
        name: "Caterpie (010)",
        type: ["Bicho"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        number: "0010",
    },
    {
        name: "Metapod (011)",
        type: ["Bicho"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
        number: "0011",
    },
    {
        name: "Butterfree (012)",
        type: ["Bicho", "Volador"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        number: "0012",
    },
    {
        name: "Weedle (013)",
        type: ["Bicho", "Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
        number: "0013",
    },
    {
        name: "Kakuna (014)",
        type: ["Bicho", "Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
        number: "0014",
    },
    {
        name: "Beedrill (015)",
        type: ["Bicho", "Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
        number: "0015",
    },
    {
        name: "Pidgey (016)",
        type: ["Normal", "Volador"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
        number: "0016",
    },
    {
        name: "Pidgeotto (017)",
        type: ["Normal", "Volador"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
        number: "0017",
    },
    {
        name: "Pidgeot (018)",
        type: ["Normal", "Volador"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
        number: "0018",
    },
    {
        name: "Rattata (019)",
        type: ["Normal"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
        number: "0019",
    },
    {
        name: "Raticate (020)",
        type: ["Normal"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
        number: "0020",
    },
    {
        name: "Spearow (021)",
        type: ["Normal", "Volador"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
        number: "0021",
    },
    {
        name: "Fearow (022)",
        type: ["Normal", "Volador"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
        number: "0022",
    },
    {
        name: "Ekans (023)",
        type: ["Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
        number: "0023",
    },
    {
        name: "Arbok (024)",
        type: ["Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
        number: "0024",
    },
    {
        name: "Pikachu (025)",
        type: ["Eléctrico"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        number: "0025",
    },
    {
        name: "Raichu (026)",
        type: ["Eléctrico"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        number: "0026",
    },
    {
        name: "Sandshrew (027)",
        type: ["Tierra"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
        number: "0027",
    },
    {
        name: "Sandslash (028)",
        type: ["Tierra"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
        number: "0028",
    },
    {
        name: "Nidoran ♀ (029)",
        type: ["Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
        number: "0029",
    },
    {
        name: "Nidorina (030)",
        type: ["Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
        number: "0030",
    },
    {
        name: "Nidoqueen (031)",
        type: ["Veneno", "Tierra"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
        number: "0031",
    },
    {
        name: "Nidoran ♂ (032)",
        type: ["Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
        number: "0029",
    },
    {
        name: "Nidorino (033)",
        type: ["Veneno"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
        number: "0030",
    },
    {
        name: "Nidoking (034)",
        type: ["Veneno", "Tierra"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
        number: "0034",
    },
    {
        name: "Clefairy (035)",
        type: ["Hada"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
        number: "0035",
    },
    {
        name: "Clefable (036)",
        type: ["Hada"],
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
        number: "0036",
    },
    {
        name: 'Vulpix (037)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
        number: '0037'
    },
    {
        name: 'Ninetales (038)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
        number: '0038'
    },
    {
        name: 'Jigglypuff (039)',
        type: ['Normal', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
        number: '0039'
    },
    {
        name: 'Wigglytuff (040)',
        type: ['Normal', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png',
        number: '0040'
    },
    {
        name: 'Zubat (041)',
        type: ['Veneno', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
        number: '0041'
    },
    {
        name: 'Golbat (042)',
        type: ['Veneno', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png',
        number: '0042'
    },
    {
        name: 'Oddish (043)',
        type: ['Planta', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
        number: '0043'
    },
    {
        name: 'Gloom (044)',
        type: ['Planta', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
        number: '0044'
    },
    {
        name: 'Vileplume (045)',
        type: ['Planta', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png',
        number: '0045'
    },
    {
        name: 'Paras (046)',
        type: ['Bicho', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
        number: '0046'
    },
    {
        name: 'Parasect (047)',
        type: ['Bicho', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png',
        number: '0047'
    },
    {
        name: 'Venonat (048)',
        type: ['Bicho', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
        number: '0048'
    },
    {
        name: 'Venomoth (049)',
        type: ['Bicho', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png',
        number: '0049'
    },
    {
        name: 'Diglett (050)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
        number: '0050'
    },
    {
        name: 'Dugtrio (051)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png',
        number: '0051'
    },
    {
        name: 'Meowth (052)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
        number: '0052'
    },
    {
        name: 'Persian (053)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png',
        number: '0053'
    },
    {
        name: 'Psyduck (054)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
        number: '0054'
    },
    {
        name: 'Golduck (055)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
        number: '0055'
    },
    {
        name: 'Mankey (056)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
        number: '0056'
    },
    {
        name: 'Primeape (057)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png',
        number: '0057'
    },
    {
        name: 'Growlithe (058)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
        number: '0058'
    },
    {
        name: 'Arcanine (059)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png',
        number: '0059'
    },
    {
        name: 'Poliwag (060)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
        number: '0060'
    },
    {
        name: 'Poliwhirl (061)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png',
        number: '0061'
    },
    {
        name: 'Poliwrath (062)',
        type: ['Agua', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png',
        number: '0062'
    },
    {
        name: 'Abra (063)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png',
        number: '0063'
    },
    {
        name: 'Kadabra (064)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
        number: '0064'
    },
    {
        name: 'Alakazam (065)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
        number: '0065'
    },
    {
        name: 'Machop (066)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png',
        number: '0066'
    },
    {
        name: 'Machoke (067)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png',
        number: '0067'
    },
    {
        name: 'Machamp (068)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
        number: '0068'
    },
    {
        name: 'Bellsprout (069)',
        type: ['Planta', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
        number: '0069'
    },
    {
        name: 'Weepinbell (070)',
        type: ['Planta', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png',
        number: '0070'
    },
    {
        name: 'Victreebel (071)',
        type: ['Planta', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png',
        number: '0071'
    },
    {
        name: 'Tentacool (072)',
        type: ['Agua', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
        number: '0072'
    },
    {
        name: 'Tentacruel (073)',
        type: ['Agua', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png',
        number: '0073'
    },
    {
        name: 'Geodude (074)',
        type: ['Roca', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png',
        number: '0074'
    },
    {
        name: 'Graveler (075)',
        type: ['Roca', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png',
        number: '0075'
    },
    {
        name: 'Golem (076)',
        type: ['Roca', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png',
        number: '0076'
    },
    {
        name: 'Ponyta (077)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
        number: '0077'
    },
    {
        name: 'Rapidash (078)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png',
        number: '0078'
    },
    {
        name: 'Slowpoke (079)',
        type: ['Agua', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png',
        number: '0079'
    },
    {
        name: 'Slowbro (080)',
        type: ['Agua', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png',
        number: '0080'
    },
    {
        name: 'Magnemite (081)',
        type: ["Eléctrico", "Acero"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png',
        number: '0081'
    },
    {
        name: 'Magneton (082)',
        type: ["Eléctrico", "Acero"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png',
        number: '0082'
    },
    {
        name: 'Farfetch´d (083)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png',
        number: '0083'
    },
    {
        name: 'Doduo (084)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png',
        number: '0084'
    },
    {
        name: 'Dodrio (085)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png',
        number: '0085'
    },
    {
        name: 'Seel (086)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png',
        number: '0086'
    },
    {
        name: 'Dewgong (087)',
        type: ['Agua', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png',
        number: '0087'
    },
    {
        name: 'Grimer (088)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png',
        number: '0088'
    },
    {
        name: 'Muk (089)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png',
        number: '0089'
    },
    {
        name: 'Shellder (090)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png',
        number: '0090'
    },
    {
        name: 'Cloyster (091)',
        type: ['Agua', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png',
        number: '0091'
    },
    {
        name: 'Gastly (092)',
        type: ['Fantasma', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png',
        number: '0092'
    },
    {
        name: 'Haunter (093)',
        type: ['Fantasma', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png',
        number: '0093'
    },
    {
        name: 'Gengar (094)',
        type: ['Fantasma', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
        number: '0094'
    },
    {
        name: 'Onix (095)',
        type: ['Roca', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png',
        number: '0095'
    },
    {
        name: 'Drowzee (096)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png',
        number: '0096'
    },
    {
        name: 'Hypno (097)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png',
        number: '0097'
    },
    {
        name: 'Krabby (098)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png',
        number: '0098'
    },
    {
        name: 'Kingler (099)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png',
        number: '0099'
    },
    {
        name: 'Voltorb (100)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png',
        number: '0100'
    },
    {
        name: 'Electrode (101)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png',
        number: '0101'
    },
    {
        name: 'Exeggcute (102)',
        type: ['Planta', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png',
        number: '0102'
    },
    {
        name: 'Exeggutor (103)',
        type: ['Planta', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png',
        number: '0103'
    },
    {
        name: 'Cubone (104)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png',
        number: '0104'
    },
    {
        name: 'Marowak (105)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png',
        number: '0105'
    },
    {
        name: 'Hitmonlee (106)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png',
        number: '0106'
    },
    {
        name: 'Hitmonchan (107)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png',
        number: '0107'
    },
    {
        name: 'Lickitung (108)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png',
        number: '0108'
    },
    {
        name: 'Koffing (109)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png',
        number: '0109'
    },
    {
        name: 'Weezing (110)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png',
        number: '0110'
    },
    {
        name: 'Rhyhorn (111)',
        type: ['Tierra', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png',
        number: '0111'
    },
    {
        name: 'Rhydon (112)',
        type: ['Tierra', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png',
        number: '0112'
    },
    {
        name: 'Chansey (113)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png',
        number: '0113'
    },
    {
        name: 'Tangela (114)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png',
        number: '0114'
    },
    {
        name: 'Kangaskhan (115)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png',
        number: '0115'
    },
    {
        name: 'Horsea (116)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png',
        number: '0116'
    },
    {
        name: 'Seadra (117)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png',
        number: '0117'
    },
    {
        name: 'Goldeen (118)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png',
        number: '0118'
    },
    {
        name: 'Seaking (119)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png',
        number: '0119'
    },
    {
        name: 'Staryu (120)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png',
        number: '0120'
    },
    {
        name: 'Starmie (121)',
        type: ['Agua', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png',
        number: '0121'
    },
    {
        name: 'Mr. Mime (122)',
        type: ['Psíquico', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png',
        number: '0122'
    },
    {
        name: 'Scyther (123)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png',
        number: '0123'
    },
    {
        name: 'Jynx (124)',
        type: ['Hielo', "Psíquico"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png',
        number: '0124'
    },
    {
        name: 'Electabuzz (125)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
        number: '0125'
    },
    {
        name: 'Magmar (126)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
        number: '0126'
    },
    {
        name: 'Pinsir (127)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png',
        number: '0127'
    },
    {
        name: 'Tauros (128)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png',
        number: '0128'
    },
    {
        name: 'Magikarp (129)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
        number: '0129'
    },
    {
        name: 'Gyarados (130)',
        type: ['Agua', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
        number: '0130'
    },
    {
        name: 'Lapras (131)',
        type: ['Agua', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png',
        number: '0131'
    },
    {
        name: 'Ditto (132)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
        number: '0132'
    },
    {
        name: 'Eevee (133)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
        number: '0133'
    },
    {
        name: 'Vaporeon (134)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png',
        number: '0134'
    },
    {
        name: 'Jolteon (135)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png',
        number: '0135'
    },
    {
        name: 'Flareon (136)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png',
        number: '0136'
    },
    {
        name: 'Porygon (137)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png',
        number: '0137'
    },
    {
        name: 'Omanyte (138)',
        type: ['Roca', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png',
        number: '0138'
    },
    {
        name: 'Omastar (139)',
        type: ['Roca', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png',
        number: '0139'
    },
    {
        name: 'Kabuto (140)',
        type: ['Roca', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png',
        number: '0140'
    },
    {
        name: 'Kabutops (141)',
        type: ['Roca', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png',
        number: '0141'
    },
    {
        name: 'Aerodactyl (142)',
        type: ['Roca', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png',
        number: '0142'
    },
    {
        name: 'Snorlax (143)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
        number: '0143'
    },
    {
        name: 'Articuno (144)',
        type: ['Hielo', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png',
        number: '0144'
    },
    {
        name: 'Zapdos (145)',
        type: ['Eléctrico', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png',
        number: '0145'
    },
    {
        name: 'Moltres (146)',
        type: ["Fuego", "Volador"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png',
        number: '0146'
    },
    {
        name: 'Dratini (147)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png',
        number: '0147'
    },
    {
        name: 'Dragonair (148)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png',
        number: '0148'
    },
    {
        name: 'Dragonite (149)',
        type: ['Dragón', "Volador"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
        number: '0149'
    },
    {
        name: 'Mewtwo (150)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
        number: '0150'
    },
    {
        name: 'Mew (151)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
        number: '0151'
    },
    {
        name: 'Chikorita (152)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png',
        number: '0152'
    },
    {
        name: 'Bayleef (153)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png',
        number: '0153'
    },
    {
        name: 'Meganium (154)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png',
        number: '0154'
    },
    {
        name: 'Cyndaquil (155)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png',
        number: '0155'
    },
    {
        name: 'Quilava (156)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png',
        number: '0156'
    },
    {
        name: 'Typhlosion (157)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png',
        number: '0157'
    },
    {
        name: 'Totodile (158)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png',
        number: '0158'
    },
    {
        name: 'Croconaw (159)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/159.png',
        number: '0159'
    },
    {
        name: 'Feraligatr (160)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png',
        number: '0160'
    },
    {
        name: 'Sentret (161)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/161.png',
        number: '0161'
    },
    {
        name: 'Furret (162)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/162.png',
        number: '0162'
    },
    {
        name: 'Hoothoot (163)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/163.png',
        number: '0163'
    },
    {
        name: 'Noctowl (164)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/164.png',
        number: '0164'
    },
    {
        name: 'Ledyba (165)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/165.png',
        number: '0165'
    },
    {
        name: 'Ledian (166)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/166.png',
        number: '0166'
    },
    {
        name: 'Spinarak (167)',
        type: ['Bicho', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/167.png',
        number: '0167'
    },
    {
        name: 'Ariados (168)',
        type: ['Bicho', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/168.png',
        number: '0168'
    },
    {
        name: 'Crobat (169)',
        type: ['Veneno', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/169.png',
        number: '0169'
    },
    {
        name: 'Chinchou (170)',
        type: ['Agua', 'Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/170.png',
        number: '0170'
    },
    {
        name: 'Lanturn (171)',
        type: ['Agua', 'Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/171.png',
        number: '0171'
    },
    {
        name: 'Pichu (172)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
        number: '0172'
    },
    {
        name: 'Cleffa (173)',
        type: ["Hada"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/173.png',
        number: '0173'
    },
    {
        name: 'Igglybuff (174)',
        type: ['Normal', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/174.png',
        number: '0174'
    },
    {
        name: 'Togepi (175)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png',
        number: '0175'
    },
    {
        name: 'Togetic (176)',
        type: ['Hada', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/176.png',
        number: '0176'
    },
    {
        name: 'Natu (177)',
        type: ['Psíquico', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/177.png',
        number: '0177'
    },
    {
        name: 'Xatu (178)',
        type: ['Psíquico', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/178.png',
        number: '0178'
    },
    {
        name: 'Mareep (179)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/179.png',
        number: '0179'
    },
    {
        name: 'Flaaffy (180)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/180.png',
        number: '0180'
    },
    {
        name: 'Ampharos (181)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png',
        number: '0181'
    },
    {
        name: 'Bellossom (182)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/182.png',
        number: '0182'
    },
    {
        name: 'Marill (183)',
        type: ['Agua', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/183.png',
        number: '0183'
    },
    {
        name: 'Azumarill (184)',
        type: ['Agua', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/184.png',
        number: '0184'
    },
    {
        name: 'Sudowoodo (185)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/185.png',
        number: '0185'
    },
    {
        name: 'Politoed (186)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/186.png',
        number: '0186'
    },
    {
        name: 'Hoppip (187)',
        type: ['Planta', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/187.png',
        number: '0187'
    },
    {
        name: 'Skiploom (188)',
        type: ['Planta', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/188.png',
        number: '0188'
    },
    {
        name: 'Jumpluff (189)',
        type: ['Planta', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/189.png',
        number: '0189'
    },
    {
        name: 'Aipom (190)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/190.png',
        number: '0190'
    },
    {
        name: 'Sunkern (191)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/191.png',
        number: '0191'
    },
    {
        name: 'Sunflora (192)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/192.png',
        number: '0192'
    },
    {
        name: 'Yanma (193)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/193.png',
        number: '0193'
    },
    {
        name: 'Wooper (194)',
        type: ['Agua', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/194.png',
        number: '0194'
    },
    {
        name: 'Quagsire (195)',
        type: ['Agua', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/195.png',
        number: '0195'
    },
    {
        name: 'Espeon (196)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png',
        number: '0196'
    },
    {
        name: 'Umbreon (197)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png',
        number: '0197'
    },
    {
        name: 'Murkrow (198)',
        type: ['Siniestro', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png',
        number: '0198'
    },
    {
        name: 'Slowking (199)',
        type: ['Agua', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/199.png',
        number: '0199'
    },
    {
        name: 'Misdreavus (200)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png',
        number: '0200'
    },
    {
        name: 'Unown (201)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png',
        number: '0201'
    },
    {
        name: 'Wobbuffet (202)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/202.png',
        number: '0202'
    },
    {
        name: 'Girafarig (203)',
        type: ['Normal', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/203.png',
        number: '0203'
    },
    {
        name: 'Pineco (204)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/204.png',
        number: '0204'
    },
    {
        name: 'Forretress (205)',
        type: ['Bicho', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/205.png',
        number: '0205'
    },
    {
        name: 'Dunsparce(206)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/206.png',
        number: '0206'
    },
    {
        name: 'Gligar (207)',
        type: ['Tierra', "Volador"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/207.png',
        number: '0207'
    },
    {
        name: 'Steelix (208)',
        type: ["Acero", 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/208.png',
        number: '0208'
    },
    {
        name: 'Snubbull (209)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/209.png',
        number: '0209'
    },
    {
        name: 'Granbull (210)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/210.png',
        number: '0210'
    },
    {
        name: 'Qwilfish (211)',
        type: ['Agua', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/211.png',
        number: '0211'
    },
    {
        name: 'Scizor (212)',
        type: ['Bicho', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png',
        number: '0212'
    },
    {
        name: 'Shuckle (213)',
        type: ['Bicho', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/213.png',
        number: '0213'
    },
    {
        name: 'Heracross (214)',
        type: ['Bicho', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png',
        number: '0214'
    },
    {
        name: 'Sneasel (215)',
        type: ['Siniestro', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/215.png',
        number: '0215'
    },
    {
        name: 'Teddiursa (216)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/216.png',
        number: '0216'
    },
    {
        name: 'Usaring (217)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/217.png',
        number: '0217'
    },
    {
        name: 'Slugma (218)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/218.png',
        number: '0218'
    },
    {
        name: 'Magcargo (219)',
        type: ["Fuego", "Roca"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/219.png',
        number: '0219'
    },
    {
        name: 'Swinub (220)',
        type: ['Hielo', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/220.png',
        number: '0220'
    },
    {
        name: 'Piloswine (221)',
        type: ['Hielo', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/221.png',
        number: '0221'
    },
    {
        name: 'Corsola (222)',
        type: ['Agua', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/222.png',
        number: '0222'
    },
    {
        name: 'Remoraid (223)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/223.png',
        number: '0223'
    },
    {
        name: 'Octillery (224)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/224.png',
        number: '0224'
    },
    {
        name: 'Delibird (225)',
        type: ['Hielo', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/225.png',
        number: '0225'
    },
    {
        name: 'Mantine (226)',
        type: ['Agua', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/226.png',
        number: '0226'
    },
    {
        name: 'Skarmory (227)',
        type: ['Acero', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/227.png',
        number: '0227'
    },
    {
        name: 'Houndour (228)',
        type: ["Fuego", 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/228.png',
        number: '0228'
    },
    {
        name: 'Houndoom (229)',
        type: ["Fuego", 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/229.png',
        number: '0229'
    },
    {
        name: 'Kingdra (230)',
        type: ['Agua', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/230.png',
        number: '0230'
    },
    {
        name: 'Phanpy (231)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/231.png',
        number: '0231'
    },
    {
        name: 'Donphan (232)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/232.png',
        number: '0232'
    },
    {
        name: 'Porygon2 (233)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/233.png',
        number: '0233'
    },
    {
        name: 'Stantler (234)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/234.png',
        number: '0234'
    },
    {
        name: 'Smeargle (235)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/235.png',
        number: '0235'
    },
    {
        name: 'Tyrogue (236)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/236.png',
        number: '0236'
    },
    {
        name: 'Hitmontop (237)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/237.png',
        number: '0237'
    },
    {
        name: 'Smoochum (238)',
        type: ['Hielo', "Psíquico"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/238.png',
        number: '0238'
    },
    {
        name: 'Elekid (239)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/239.png',
        number: '0239'
    },
    {
        name: 'Magby (240)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/240.png',
        number: '0240'
    },
    {
        name: 'Miltank (241)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/241.png',
        number: '0241'
    },
    {
        name: 'Blissey (242)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/242.png',
        number: '0242'
    },
    {
        name: 'Raikou (243)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png',
        number: '0243'
    },
    {
        name: 'Entei (244)',
        type: ["Fuego"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/244.png',
        number: '0244'
    },
    {
        name: 'Suicune (245)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/245.png',
        number: '0245'
    },
    {
        name: 'Larvitar (246)',
        type: ['Roca', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/246.png',
        number: '0246'
    },
    {
        name: 'Pupitar (247)',
        type: ['Roca', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/247.png',
        number: '0247'
    },
    {
        name: 'Tyranitar (248)',
        type: ['Roca', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png',
        number: '0248'
    },
    {
        name: 'Lugia (249)',
        type: ['Psíquico', "Volador"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png',
        number: '0249'
    },
    {
        name: 'Ho-Oh (250)',
        type: ["Fuego", "Volador"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/250.png',
        number: '0250'
    },
    {
        name: 'Celebi (251)',
        type: ['Psíquico', "Planta"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png',
        number: '0251'
    },
    {
        name: 'Treecko (252)',
        type: ["Planta"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png',
        number: '0252'
    },
    {
        name: 'Grovyle (253)',
        type: ["Planta"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/253.png',
        number: '0253'
    },
    {
        name: 'Sceptile (254)',
        type: ["Planta"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png',
        number: '0254'
    },
    {
        name: 'Torchic (255)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png',
        number: '0255'
    },
    {
        name: 'Combusken (256)',
        type: ['Fuego', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/256.png',
        number: '0256'
    },
    {
        name: 'Blaziken (257)',
        type: ['Fuego', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png',
        number: '0257'
    },
    {
        name: 'Mudkip (258)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png',
        number: '0258'
    },
    {
        name: 'Marshtomp (259)',
        type: ['Agua', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/259.png',
        number: '0259'
    },
    {
        name: 'Swampert (260)',
        type: ['Agua', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png',
        number: '0260'
    },
    {
        name: 'Poochyena (261)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/261.png',
        number: '0261'
    },
    {
        name: 'Mightyena (262)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/262.png',
        number: '0262'
    },
    {
        name: 'Zigzagoon (263)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/263.png',
        number: '0263'
    },
    {
        name: 'Linoone (264)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/264.png',
        number: '0264'
    },
    {
        name: 'Wurmple (265)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/265.png',
        number: '0265'
    },
    {
        name: 'Silcoon (266)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/266.png',
        number: '0266'
    },
    {
        name: 'Beautifly (267)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/267.png',
        number: '0267'
    },
    {
        name: 'Cascoon (268)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/268.png',
        number: '0268'
    },
    {
        name: 'Dustox (269)',
        type: ['Bicho', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/269.png',
        number: '0269'
    },
    {
        name: 'Lotad (270)',
        type: ['Agua', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/270.png',
        number: '0270'
    },
    {
        name: 'Lombre (271)',
        type: ['Agua', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/271.png',
        number: '0271'
    },
    {
        name: 'Ludicolo (272)',
        type: ['Agua', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/272.png',
        number: '0272'
    },
    {
        name: 'Seedot (273)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/273.png',
        number: '0273'
    },
    {
        name: 'Nuzleaf (274)',
        type: ['Planta', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/274.png',
        number: '0274'
    },
    {
        name: 'Shiftry (275)',
        type: ['Planta', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/275.png',
        number: '0275'
    },
    {
        name: 'Taillow (276)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/276.png',
        number: '0276'
    },
    {
        name: 'Swellow (277)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/277.png',
        number: '0277'
    },
    {
        name: 'Wingull (278)',
        type: ['Agua', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/278.png',
        number: '0278'
    },
    {
        name: 'Pelipper (279)',
        type: ['Agua', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/279.png',
        number: '0279'
    },
    {
        name: 'Ralts (280)',
        type: ['Psíquico', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/280.png',
        number: '0280'
    },
    {
        name: 'Kirlia (281)',
        type: ['Psíquico', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/281.png',
        number: '0281'
    },
    {
        name: 'Gardevoir (282)',
        type: ['Psíquico', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png',
        number: '0282'
    },
    {
        name: 'Surskit (283)',
        type: ['Bicho', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/283.png',
        number: '0283'
    },
    {
        name: 'Masquerain (284)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/284.png',
        number: '0284'
    },
    {
        name: 'Shroomish (285)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/285.png',
        number: '0285'
    },
    {
        name: 'Breloom (286)',
        type: ['Planta', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/286.png',
        number: '0286'
    },
    {
        name: 'Slakoth (287)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/287.png',
        number: '0287'
    },
    {
        name: 'Vigoroth (288)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/288.png',
        number: '0288'
    },
    {
        name: 'Slaking (289)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/289.png',
        number: '0289'
    },
    {
        name: 'Nincada (290)',
        type: ['Bicho', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/290.png',
        number: '0290'
    },
    {
        name: 'Ninjask (291)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/291.png',
        number: '0291'
    },
    {
        name: 'Shedinja (292)',
        type: ['Bicho', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/292.png',
        number: '0292'
    },
    {
        name: 'Whismur (293)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/293.png',
        number: '0293'
    },
    {
        name: 'Loudred (294)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/294.png',
        number: '0294'
    },
    {
        name: 'Exploud (295)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/295.png',
        number: '0295'
    },
    {
        name: 'Makuhita (296)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/296.png',
        number: '0296'
    },
    {
        name: 'Hariyama (297)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/297.png',
        number: '0297'
    },
    {
        name: 'Azurill (298)',
        type: ['Normal', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/298.png',
        number: '0298'
    },
    {
        name: 'Nosepass (299)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/299.png',
        number: '0299'
    },
    {
        name: 'Skitty (300)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/300.png',
        number: '0300'
    },
    {
        name: 'Delcatty (301)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/301.png',
        number: '0301'
    },
    {
        name: 'Sableye (302)',
        type: ['Siniestro', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/302.png',
        number: '0302'
    },
    {
        name: 'Mawile (303)',
        type: ['Acero', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/303.png',
        number: '0303'
    },
    {
        name: 'Aaron (304)',
        type: ['Acero', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/304.png',
        number: '0304'
    },
    {
        name: 'Lairon (305)',
        type: ['Acero', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/305.png',
        number: '0305'
    },
    {
        name: 'Aggron (306)',
        type: ['Acero', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png',
        number: '0306'
    },
    {
        name: 'Meditite (307)',
        type: ['Lucha', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/307.png',
        number: '0307'
    },
    {
        name: 'Medicham (308)',
        type: ['Lucha', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/308.png',
        number: '0308'
    },
    {
        name: 'Electrike (309)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/309.png',
        number: '0309'
    },
    {
        name: 'Manectric (310)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/310.png',
        number: '0310'
    },
    {
        name: 'Plusle (311)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/311.png',
        number: '0311'
    },
    {
        name: 'Minun (312)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/312.png',
        number: '0312'
    },
    {
        name: 'Volbeat (313)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/313.png',
        number: '0313'
    },
    {
        name: 'Illumise (314)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/314.png',
        number: '0314'
    },
    {
        name: 'Roselia (315)',
        type: ["Planta", 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/315.png',
        number: '0315'
    },
    {
        name: 'Gulpin (316)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/316.png',
        number: '0316'
    },
    {
        name: 'Swalot (317)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/317.png',
        number: '0317'
    },
    {
        name: 'Carvanha (318)',
        type: ['Agua', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/318.png',
        number: '0318'
    },
    {
        name: 'Sharpedo (319)',
        type: ['Agua', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/319.png',
        number: '0319'
    },
    {
        name: 'Wailmer (320)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/320.png',
        number: '0320'
    },
    {
        name: 'Wailord (321)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/321.png',
        number: '0321'
    },
    {
        name: 'Numel (322)',
        type: ['Fuego', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/322.png',
        number: '0322'
    },
    {
        name: 'Camerupt (323)',
        type: ['Fuego', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/323.png',
        number: '0323'
    },
    {
        name: 'Torkoal (324)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/324.png',
        number: '0324'
    },
    {
        name: 'Spoink (325)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/325.png',
        number: '0325'
    },
    {
        name: 'Grumpig (326)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/326.png',
        number: '0326'
    },
    {
        name: 'Spinda (327)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/327.png',
        number: '0327'
    },
    {
        name: 'Trapinch (328)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/328.png',
        number: '0328'
    },
    {
        name: 'Vibrava (329)',
        type: ['Tierra', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/329.png',
        number: '0329'
    },
    {
        name: 'Flygon (330)',
        type: ['Tierra', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/330.png',
        number: '0330'
    },
    {
        name: 'Cacnea (331)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/331.png',
        number: '0331'
    },
    {
        name: 'Cacturne (332)',
        type: ['Planta', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/332.png',
        number: '0332'
    },
    {
        name: 'Swablu (333)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/333.png',
        number: '0333'
    },
    {
        name: 'Altaria (334)',
        type: ['Dragón', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/334.png',
        number: '0334'
    },
    {
        name: 'Zangoose (335)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/335.png',
        number: '0335'
    },
    {
        name: 'Seviper (336)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/336.png',
        number: '0336'
    },
    {
        name: 'Lunatone (337)',
        type: ['Roca', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/337.png',
        number: '0337'
    },
    {
        name: 'Solrock (338)',
        type: ['Roca', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/338.png',
        number: '0338'
    },
    {
        name: 'Barboach (339)',
        type: ['Agua', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/339.png',
        number: '0339'
    },
    {
        name: 'Whiscash (340)',
        type: ['Agua', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/340.png',
        number: '0340'
    },
    {
        name: 'Corphish (341)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/341.png',
        number: '0341'
    },
    {
        name: 'Crawdaunt (342)',
        type: ['Agua', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/342.png',
        number: '0342'
    },
    {
        name: 'Baltoy (343)',
        type: ['Tierra', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/343.png',
        number: '0343'
    },
    {
        name: 'Claydol (344)',
        type: ['Tierra', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/344.png',
        number: '0344'
    },
    {
        name: 'Lileep (345)',
        type: ['Roca', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/345.png',
        number: '0345'
    },
    {
        name: 'Cradily (346)',
        type: ['Roca', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/346.png',
        number: '0346'
    },
    {
        name: 'Anorith (347)',
        type: ['Roca', 'Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/347.png',
        number: '0347'
    },
    {
        name: 'Armaldo (348)',
        type: ['Roca', 'Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/348.png',
        number: '0348'
    },
    {
        name: 'Feebas (349)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/349.png',
        number: '0349'
    },
    {
        name: 'Milotic (350)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png',
        number: '0350'
    },
    {
        name: 'Castform (351)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/351.png',
        number: '0351'
    },
    {
        name: 'Kecleon (352)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/352.png',
        number: '0352'
    },
    {
        name: 'Shuppet (353)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/353.png',
        number: '0353'
    },
    {
        name: 'Banette (354)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/354.png',
        number: '0354'
    },
    {
        name: 'Duskull (355)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png',
        number: '0355'
    },
    {
        name: 'Dusclops (356)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/356.png',
        number: '0356'
    },
    {
        name: 'Tropius (357)',
        type: ['Planta', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/357.png',
        number: '0357'
    },
    {
        name: 'Chimecho (358)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/358.png',
        number: '0358'
    },
    {
        name: 'Absol (359)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png',
        number: '0359'
    },
    {
        name: 'Wynaut (360)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/360.png',
        number: '0360'
    },
    {
        name: 'Snorunt (361)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/361.png',
        number: '0361'
    },
    {
        name: 'Glalie (362)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/362.png',
        number: '0362'
    },
    {
        name: 'Spheal (363)',
        type: ['Hielo', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/363.png',
        number: '0363'
    },
    {
        name: 'Sealeo (364)',
        type: ['Hielo', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/364.png',
        number: '0364'
    },
    {
        name: 'Walrein (365)',
        type: ['Hielo', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/365.png',
        number: '0365'
    },
    {
        name: 'Clamperl (366)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/366.png',
        number: '0366'
    },
    {
        name: 'Huntail (367)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/367.png',
        number: '0367'
    },
    {
        name: 'Gorebyss (368)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/368.png',
        number: '0368'
    },
    {
        name: 'Relicanth (369)',
        type: ['Agua', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/369.png',
        number: '0369'
    },
    {
        name: 'Luvdisc (370)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/370.png',
        number: '0370'
    },
    {
        name: 'Bagon (371)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/371.png',
        number: '0371'
    },
    {
        name: 'Shelgon (372)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/372.png',
        number: '0372'
    },
    {
        name: 'Salamence (373)',
        type: ['Dragón', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png',
        number: '0373'
    },
    {
        name: 'Beldum (374)',
        type: ['Acero', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/374.png',
        number: '0374'
    },
    {
        name: 'Metang (375)',
        type: ['Acero', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/375.png',
        number: '0375'
    },
    {
        name: 'Metagross (376)',
        type: ['Acero', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png',
        number: '0376'
    },
    {
        name: 'Regirock (377)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/377.png',
        number: '0377'
    },
    {
        name: 'Regice (378)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/378.png',
        number: '0378'
    },
    {
        name: 'Registeel (379)',
        type: ['Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/379.png',
        number: '0379'
    },
    {
        name: 'Latias (380)',
        type: ['Dragón', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/380.png',
        number: '0380'
    },
    {
        name: 'Latios (381)',
        type: ['Dragón', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/381.png',
        number: '0381'
    },
    {
        name: 'Kyogre (382)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png',
        number: '0382'
    },
    {
        name: 'Groudon (383)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/383.png',
        number: '0383'
    },
    {
        name: 'Rayquaza (384)',
        type: ['Dragón', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png',
        number: '0384'
    },
    {
        name: 'Jirachi (385)',
        type: ['Acero', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/385.png',
        number: '0385'
    },
    {
        name: 'Deoxys (386)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/386.png',
        number: '0386'
    },
    {
        name: 'Turtwig (387)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png',
        number: '0387'
    },
    {
        name: 'Grotle (388)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/388.png',
        number: '0388'
    },
    {
        name: 'Torterra (389)',
        type: ['Planta', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/389.png',
        number: '0389'
    },
    {
        name: 'Chimchar (390)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png',
        number: '0390'
    },
    {
        name: 'Monferno (391)',
        type: ['Fuego', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/391.png',
        number: '0391'
    },
    {
        name: 'Infernape (392)',
        type: ['Fuego', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/392.png',
        number: '0392'
    },
    {
        name: 'Piplup (393)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png',
        number: '0393'
    },
    {
        name: 'Prinplup (394)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/394.png',
        number: '0394'
    },
    {
        name: 'Empoleon (395)',
        type: ['Agua', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/395.png',
        number: '0395'
    },
    {
        name: 'Starly (396)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/396.png',
        number: '0396'
    },
    {
        name: 'Staravia (397)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/397.png',
        number: '0397'
    },
    {
        name: 'Staraptor (398)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/398.png',
        number: '0398'
    },
    {
        name: 'Bidoof (399)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/399.png',
        number: '0399'
    },
    {
        name: 'Bibarel (400)',
        type: ['Normal', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/400.png',
        number: '0400'
    },
    {
        name: 'Kricketot (401)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/401.png',
        number: '0401'
    },
    {
        name: 'Kricketune (402)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/402.png',
        number: '0402'
    },
    {
        name: 'Shinx (403)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/403.png',
        number: '0403'
    },
    {
        name: 'Luxio (404)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/404.png',
        number: '0404'
    },
    {
        name: 'Luxray (405)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/405.png',
        number: '0405'
    },
    {
        name: 'Budew (406)',
        type: ['Planta', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/406.png',
        number: '0406'
    },
    {
        name: 'Roserade (407)',
        type: ['Planta', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/407.png',
        number: '0407'
    },
    {
        name: 'Cranidos (408)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/408.png',
        number: '0408'
    },
    {
        name: 'Rampardos (409)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/409.png',
        number: '0409'
    },
    {
        name: 'Shieldon (410)',
        type: ['Roca', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/410.png',
        number: '0410'
    },
    {
        name: 'Bastiodon (411)',
        type: ['Roca', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/411.png',
        number: '0411'
    },
    {
        name: 'Burmy (412)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/412.png',
        number: '0412'
    },
    {
        name: 'Wormadam (413)',
        type: ['Bicho', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/413.png',
        number: '0413'
    },
    {
        name: 'Mothim (414)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/414.png',
        number: '0414'
    },
    {
        name: 'Combee (415)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/415.png',
        number: '0415'
    },
    {
        name: 'Vespiquen (416)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/416.png',
        number: '0416'
    },
    {
        name: 'Pachirisu (417)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/417.png',
        number: '0417'
    },
    {
        name: 'Buizel (418)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/418.png',
        number: '0418'
    },
    {
        name: 'Floatzel (419)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/419.png',
        number: '0419'
    },
    {
        name: 'Cherubi (420)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/420.png',
        number: '0420'
    },
    {
        name: 'Cherrim (421)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/421.png',
        number: '0421'
    },
    {
        name: 'Shellos (422)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/422.png',
        number: '0422'
    },
    {
        name: 'Gastrodon (423)',
        type: ['Agua', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/423.png',
        number: '0423'
    },
    {
        name: 'Ambipom (424)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/424.png',
        number: '0424'
    },
    {
        name: 'Drifloon (425)',
        type: ['Fantasma', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/425.png',
        number: '0425'
    },
    {
        name: 'Drifblim (426)',
        type: ['Fantasma', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/426.png',
        number: '0426'
    },
    {
        name: 'Buneary (427)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/427.png',
        number: '0427'
    },
    {
        name: 'Lopunny (428)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/428.png',
        number: '0428'
    },
    {
        name: 'Mismagius (429)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/429.png',
        number: '0429'
    },
    {
        name: 'Honchkrow (430)',
        type: ['Siniestro', "Volador"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/430.png',
        number: '0430'
    },
    {
        name: 'Glameow (431)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/431.png',
        number: '0431'
    },
    {
        name: 'Purugly (432)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/432.png',
        number: '0432'
    },
    {
        name: 'Chingling (433)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/433.png',
        number: '0433'
    },
    {
        name: 'Stunky (434)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/434.png',
        number: '0434'
    },
    {
        name: 'Skuntank (435)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/435.png',
        number: '0435'
    },
    {
        name: 'Bronzor (436)',
        type: ['Acero', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/436.png',
        number: '0436'
    },
    {
        name: 'Bronzong (437)',
        type: ['Acero', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/437.png',
        number: '0437'
    },
    {
        name: 'Bonsly (438)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/438.png',
        number: '0438'
    },
    {
        name: 'Mime Jr. (439)',
        type: ['Psíquico', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/439.png',
        number: '0439'
    },
    {
        name: 'Happiny (440)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/440.png',
        number: '0440'
    },
    {
        name: 'Chatot (441)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/441.png',
        number: '0441'
    },
    {
        name: 'Spiritomb (442)',
        type: ['Fantasma', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/442.png',
        number: '0442'
    },
    {
        name: 'Gible (443)',
        type: ['Dragón', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/443.png',
        number: '0443'
    },
    {
        name: 'Gabite (444)',
        type: ['Dragón', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/444.png',
        number: '0444'
    },
    {
        name: 'Garchomp (445)',
        type: ['Dragón', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png',
        number: '0445'
    },
    {
        name: 'Munchlax (446)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/446.png',
        number: '0446'
    },
    {
        name: 'Riolu (447)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/447.png',
        number: '0447'
    },
    {
        name: 'Lucario (448)',
        type: ['Lucha', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png',
        number: '0448'
    },
    {
        name: 'Hippopotas (449)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/449.png',
        number: '0449'
    },
    {
        name: 'Hippowdon (450)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/450.png',
        number: '0450'
    },
    {
        name: 'Skorupi (451)',
        type: ['Veneno', 'Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/451.png',
        number: '0451'
    },
    {
        name: 'Drapion (452)',
        type: ['Veneno', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/452.png',
        number: '0452'
    },
    {
        name: 'Croagunk (453)',
        type: ['Veneno', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/453.png',
        number: '0453'
    },
    {
        name: 'Toxicroak (454)',
        type: ['Veneno', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/454.png',
        number: '0454'
    },
    {
        name: 'Carnivine (455)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/455.png',
        number: '0455'
    },
    {
        name: 'Finneon (456)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/456.png',
        number: '0456'
    },
    {
        name: 'Lumineon (457)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/457.png',
        number: '0457'
    },
    {
        name: 'Mantyke (458)',
        type: ['Agua', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/458.png',
        number: '0458'
    },
    {
        name: 'Snover (459)',
        type: ['Planta', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/459.png',
        number: '0459'
    },
    {
        name: 'Abomasnow (460)',
        type: ['Planta', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/460.png',
        number: '0460'
    },
    {
        name: 'Weavile (461)',
        type: ['Siniestro', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/461.png',
        number: '0461'
    },
    {
        name: 'Magnezone (462)',
        type: ['Eléctrico', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/462.png',
        number: '0462'
    },
    {
        name: 'Lickilicky (463)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/463.png',
        number: '0463'
    },
    {
        name: 'Rhyperior (464)',
        type: ['Tierra', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/464.png',
        number: '0464'
    },
    {
        name: 'Tangrowth (465)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/465.png',
        number: '0465'
    },
    {
        name: 'Electivire (466)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/466.png',
        number: '0466'
    },
    {
        name: 'Magmortar (467)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/467.png',
        number: '0467'
    },
    {
        name: 'Togekiss (468)',
        type: ['Hada', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/468.png',
        number: '0468'
    },
    {
        name: 'Yanmega (469)',
        type: ['Bicho', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/469.png',
        number: '0469'
    },
    {
        name: 'Leafeon (470)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png',
        number: '0470'
    },
    {
        name: 'Glaceon (471)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/471.png',
        number: '0471'
    },
    {
        name: 'Gliscor (472)',
        type: ['Tierra', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/472.png',
        number: '0472'
    },
    {
        name: 'Mamoswine (473)',
        type: ['Hielo', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/473.png',
        number: '0473'
    },
    {
        name: 'Porygon-Z (474)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/474.png',
        number: '0474'
    },
    {
        name: 'Gallade (475)',
        type: ['Psíquico', "Lucha"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/475.png',
        number: '0475'
    },
    {
        name: 'Probopass (476)',
        type: ['Roca', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/476.png',
        number: '0476'
    },
    {
        name: 'Dusknoir (477)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/477.png',
        number: '0477'
    },
    {
        name: 'Froslass (478)',
        type: ['Hielo', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/478.png',
        number: '0478'
    },
    {
        name: 'Rotom (479)',
        type: ['Eléctrico', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/479.png',
        number: '0479'
    },
    {
        name: 'Uxie (480)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/480.png',
        number: '0480'
    },
    {
        name: 'Mesprit (481)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/481.png',
        number: '0481'
    },
    {
        name: 'Azelf (482)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/482.png',
        number: '0482'
    },
    {
        name: 'Dialga (483)',
        type: ['Acero', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/483.png',
        number: '0483'
    },
    {
        name: 'Palkia (484)',
        type: ['Agua', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/484.png',
        number: '0484'
    },
    {
        name: 'Heatran (485)',
        type: ['Fuego', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/485.png',
        number: '0485'
    },
    {
        name: 'Regigigas (486)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/486.png',
        number: '0486'
    },
    {
        name: 'Giratina (487)',
        type: ['Fantasma', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/487.png',
        number: '0487'
    },
    {
        name: 'Cresselia (488)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/488.png',
        number: '0488'
    },
    {
        name: 'Phione (489)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/489.png',
        number: '0489'
    },
    {
        name: 'Manaphy (490)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/490.png',
        number: '0490'
    },
    {
        name: 'Darkrai (491)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/491.png',
        number: '0491'
    },
    {
        name: 'Shaymin (492)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/492.png',
        number: '0492'
    },
    {
        name: 'Arceus (493)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/493.png',
        number: '0493'
    },
    {
        name: 'Victini (494)',
        type: ['Psíquico', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/494.png',
        number: '0494'
    },
    {
        name: 'Snivy (495)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png',
        number: '0495'
    },
    {
        name: 'Servine (496)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/496.png',
        number: '0496'
    },
    {
        name: 'Serperior (497)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/497.png',
        number: '0497'
    },
    {
        name: 'Tepig (498)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/498.png',
        number: '0498'
    },
    {
        name: 'Pignite (499)',
        type: ['Fuego', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/499.png',
        number: '0499'
    },
    {
        name: 'Emboar (500)',
        type: ['Fuego', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/500.png',
        number: '0500'
    },
    {
        name: 'Oshawott (501)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png',
        number: '0501'
    },
    {
        name: 'Dewott (502)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/502.png',
        number: '0502'
    },
    {
        name: 'Samurott (503)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/503.png',
        number: '0503'
    },
    {
        name: 'Patrat (504)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/504.png',
        number: '0504'
    },
    {
        name: 'Watchog (505)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/505.png',
        number: '0505'
    },
    {
        name: 'Lillipup (506)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/506.png',
        number: '0506'
    },
    {
        name: 'Herdier (507)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/507.png',
        number: '0507'
    },
    {
        name: 'Stoutland (508)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/508.png',
        number: '0508'
    },
    {
        name: 'Purrloin (509)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/509.png',
        number: '0509'
    },
    {
        name: 'Liepard (510)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/510.png',
        number: '0510'
    },
    {
        name: 'Pansage (511)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/511.png',
        number: '0511'
    },
    {
        name: 'Simisage (512)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/512.png',
        number: '0512'
    },
    {
        name: 'Pansear (513)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png',
        number: '0513'
    },
    {
        name: 'Simisear (514)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/514.png',
        number: '0514'
    },
    {
        name: 'Panpour (515)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/515.png',
        number: '0515'
    },
    {
        name: 'Simipour (516)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/516.png',
        number: '0516'
    },
    {
        name: 'Munna (517)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/517.png',
        number: '0517'
    },
    {
        name: 'Musharna (518)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/518.png',
        number: '0518'
    },
    {
        name: 'Pidove (519)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/519.png',
        number: '0519'
    },
    {
        name: 'Tranquill (520)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/520.png',
        number: '0520'
    },
    {
        name: 'Unfezant (521)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/521.png',
        number: '0521'
    },
    {
        name: 'Blitzle (522)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/522.png',
        number: '0522'
    },
    {
        name: 'Zebstrika (523)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/523.png',
        number: '0523'
    },
    {
        name: 'Roggenrola (524)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/524.png',
        number: '0524'
    },
    {
        name: 'Boldore (525)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/525.png',
        number: '0525'
    },
    {
        name: 'Gigalith (526)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/526.png',
        number: '0526'
    },
    {
        name: 'Woobat (527)',
        type: ['Psíquico', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/527.png',
        number: '0527'
    },
    {
        name: 'Swoobat (528)',
        type: ['Psíquico', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/528.png',
        number: '0528'
    },
    {
        name: 'Drilbur (529)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/529.png',
        number: '0529'
    },
    {
        name: 'Excadrill (530)',
        type: ['Tierra', "Acero"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/530.png',
        number: '0530'
    },
    {
        name: 'Audino (531)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/531.png',
        number: '0531'
    },
    {
        name: 'Timburr (532)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/532.png',
        number: '0532'
    },
    {
        name: 'Gurdurr (533)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/533.png',
        number: '0533'
    },
    {
        name: 'Conkeldurr (534)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/534.png',
        number: '0534'
    },
    {
        name: 'Tympole (535)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/535.png',
        number: '0535'
    },
    {
        name: 'Palpitoad (536)',
        type: ['Agua', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/536.png',
        number: '0536'
    },
    {
        name: 'Seismitoad (537)',
        type: ['Agua', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/537.png',
        number: '0537'
    },
    {
        name: 'Throh (538)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/538.png',
        number: '0538'
    },
    {
        name: 'Sawk (539)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/539.png',
        number: '0539'
    },
    {
        name: 'Sewaddle (540)',
        type: ['Bicho', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/540.png',
        number: '0540'
    },
    {
        name: 'Swadloon (541)',
        type: ['Bicho', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/541.png',
        number: '0541'
    },
    {
        name: 'Leavanny (542)',
        type: ['Bicho', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/542.png',
        number: '0542'
    },
    {
        name: 'Venipede (543)',
        type: ['Bicho', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/543.png',
        number: '0543'
    },
    {
        name: 'Whirlipede (544)',
        type: ['Bicho', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/544.png',
        number: '0544'
    },
    {
        name: 'Scolipede (545)',
        type: ['Bicho', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/545.png',
        number: '0545'
    },
    {
        name: 'Cottonee (546)',
        type: ['Planta', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/546.png',
        number: '0546'
    },
    {
        name: 'Whimsicott (547)',
        type: ['Planta', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/547.png',
        number: '0547'
    },
    {
        name: 'Petilil (548)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/548.png',
        number: '0548'
    },
    {
        name: 'Lilligant (549)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/549.png',
        number: '0549'
    },
    {
        name: 'Basculin (550)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/550.png',
        number: '0550'
    },
    {
        name: 'Sandile (551)',
        type: ['Tierra', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/551.png',
        number: '0551'
    },
    {
        name: 'Krokorok (552)',
        type: ['Tierra', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/552.png',
        number: '0552'
    },
    {
        name: 'Krookodile (553)',
        type: ['Tierra', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/553.png',
        number: '0553'
    },
    {
        name: 'Darumaka (554)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/554.png',
        number: '0554'
    },
    {
        name: 'Darmanitan (555)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/555.png',
        number: '0555'
    },
    {
        name: 'Maractus (556)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/556.png',
        number: '0556'
    },
    {
        name: 'Dwebble (557)',
        type: ['Bicho', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/557.png',
        number: '0557'
    },
    {
        name: 'Crustle (558)',
        type: ['Bicho', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/558.png',
        number: '0558'
    },
    {
        name: 'Scraggy (559)',
        type: ['Siniestro', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/559.png',
        number: '0559'
    },
    {
        name: 'Scrafty (560)',
        type: ['Siniestro', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/560.png',
        number: '0560'
    },
    {
        name: 'Sigilyph (561)',
        type: ['Psíquico', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/561.png',
        number: '0561'
    },
    {
        name: 'Yamask (562)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/562.png',
        number: '0562'
    },
    {
        name: 'Cofagrigus (563)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/563.png',
        number: '0563'
    },
    {
        name: 'Tirtouga (564)',
        type: ['Agua', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/564.png',
        number: '0564'
    },
    {
        name: 'Carracosta (565)',
        type: ['Agua', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/565.png',
        number: '0565'
    },
    {
        name: 'Archen (566)',
        type: ['Roca', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/566.png',
        number: '0566'
    },
    {
        name: 'Archeops (567)',
        type: ['Roca', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/567.png',
        number: '0567'
    },
    {
        name: 'Trubbish (568)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/568.png',
        number: '0568'
    },
    {
        name: 'Garbodor (569)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/569.png',
        number: '0569'
    },
    {
        name: 'Zorua (570)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/570.png',
        number: '0570'
    },
    {
        name: 'Zoroark (571)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/571.png',
        number: '0571'
    },
    {
        name: 'Minccino (572)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/572.png',
        number: '0572'
    },
    {
        name: 'Cinccino (573)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/573.png',
        number: '0573'
    },
    {
        name: 'Gothita (574)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/574.png',
        number: '0574'
    },
    {
        name: 'Gothorita (575)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/575.png',
        number: '0575'
    },
    {
        name: 'Gothitelle (576)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/576.png',
        number: '0576'
    },
    {
        name: 'Solosis (577)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/577.png',
        number: '0577'
    },
    {
        name: 'Duosion (578)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/578.png',
        number: '0578'
    },
    {
        name: 'Reuniclus (579)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/579.png',
        number: '0579'
    },
    {
        name: 'Ducklett (580)',
        type: ['Agua', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/580.png',
        number: '0580'
    },
    {
        name: 'Swanna (581)',
        type: ['Agua', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/581.png',
        number: '0581'
    },
    {
        name: 'Vanillite (582)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/582.png',
        number: '0582'
    },
    {
        name: 'Vanillish (583)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/583.png',
        number: '0583'
    },
    {
        name: 'Vanilluxe (584)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/584.png',
        number: '0584'
    },
    {
        name: 'Deerling (585)',
        type: ['Normal', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/585.png',
        number: '0585'
    },
    {
        name: 'Sawsbuck (586)',
        type: ['Normal', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/586.png',
        number: '0586'
    },
    {
        name: 'Emolga (587)',
        type: ['Eléctrico', "Volador"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/587.png',
        number: '0587'
    },
    {
        name: 'Karrablast (588)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/588.png',
        number: '0588'
    },
    {
        name: 'Escavalier (589)',
        type: ['Bicho', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/589.png',
        number: '0589'
    },
    {
        name: 'Foongus (590)',
        type: ['Planta', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/590.png',
        number: '0590'
    },
    {
        name: 'Amoonguss (591)',
        type: ['Planta', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/591.png',
        number: '0591'
    },
    {
        name: 'Frillish (592)',
        type: ['Agua', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/592.png',
        number: '0592'
    },
    {
        name: 'Jellicent (593)',
        type: ['Agua', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/593.png',
        number: '0593'
    },
    {
        name: 'Alomomola (594)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/594.png',
        number: '0594'
    },
    {
        name: 'Joltik (595)',
        type: ['Bicho', "Eléctrico"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/595.png',
        number: '0595'
    },
    {
        name: 'Galvantula (596)',
        type: ['Bicho', "Eléctrico"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/596.png',
        number: '0596'
    },
    {
        name: 'Ferroseed (597)',
        type: ['Planta', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/597.png',
        number: '0597'
    },
    {
        name: 'Ferrothorn (598)',
        type: ['Planta', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/598.png',
        number: '0598'
    },
    {
        name: 'Klink (599)',
        type: ["Acero"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/599.png',
        number: '0599'
    },
    {
        name: 'Klang (600)',
        type: ["Acero"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/600.png',
        number: '0600'
    },
    {
        name: 'Klinklang (601)',
        type: ["Acero"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/601.png',
        number: '0601'
    },
    {
        name: 'Tynamo (602)',
        type: ["Eléctrico"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/602.png',
        number: '0602'
    },
    {
        name: 'Eelektrik (603)',
        type: ["Eléctrico"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/603.png',
        number: '0603'
    },
    {
        name: 'Eelektross (604)',
        type: ["Eléctrico"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/604.png',
        number: '0604'
    },
    {
        name: 'Elgyem (605)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/605.png',
        number: '0605'
    },
    {
        name: 'Beheeyem (606)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/606.png',
        number: '0606'
    },
    {
        name: 'Litwick (607)',
        type: ['Fantasma', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/607.png',
        number: '0607'
    },
    {
        name: 'Lampent (608)',
        type: ['Fantasma', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/608.png',
        number: '0608'
    },
    {
        name: 'Chandelure (609)',
        type: ['Fantasma', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/609.png',
        number: '0609'
    },
    {
        name: 'Axew (610)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/610.png',
        number: '0610'
    },
    {
        name: 'Fraxure (611)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/611.png',
        number: '0611'
    },
    {
        name: 'Haxorus (612)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/612.png',
        number: '0612'
    },
    {
        name: 'Cubchoo (613)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/613.png',
        number: '0613'
    },
    {
        name: 'Beartic (614)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/614.png',
        number: '0614'
    },
    {
        name: 'Cryogonal (615)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/615.png',
        number: '0615'
    },
    {
        name: 'Shelmet (616)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/616.png',
        number: '0616'
    },
    {
        name: 'Accelgor (617)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/617.png',
        number: '0617'
    },
    {
        name: 'Stunfisk (618)',
        type: ['Tierra', 'Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/618.png',
        number: '0618'
    },
    {
        name: 'Mienfoo (619)',
        type: ["Lucha"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/619.png',
        number: '0619'
    },
    {
        name: 'Mienshao (620)',
        type: ["Lucha"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/620.png',
        number: '0620'
    },
    {
        name: 'Druddigon (621)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/621.png',
        number: '0621'
    },
    {
        name: 'Golett (622)',
        type: ['Tierra', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/622.png',
        number: '0622'
    },
    {
        name: 'Golurk (623)',
        type: ['Tierra', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/623.png',
        number: '0623'
    },
    {
        name: 'Pawniard (624)',
        type: ['Siniestro', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/624.png',
        number: '0624'
    },
    {
        name: 'Bisharp (625)',
        type: ['Siniestro', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/625.png',
        number: '0625'
    },
    {
        name: 'Bouffalant (626)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/626.png',
        number: '0626'
    },
    {
        name: 'Rufflet (627)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/627.png',
        number: '0627'
    },
    {
        name: 'Braviary (628)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/628.png',
        number: '0628'
    },
    {
        name: 'Vullaby (629)',
        type: ['Siniestro', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/629.png',
        number: '0629'
    },
    {
        name: 'Mandibuzz (630)',
        type: ['Siniestro', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/630.png',
        number: '0630'
    },
    {
        name: 'Heatmor (631)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/631.png',
        number: '0631'
    },
    {
        name: 'Durant (632)',
        type: ['Bicho', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/632.png',
        number: '0632'
    },
    {
        name: 'Deino (633)',
        type: ['Siniestro', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/633.png',
        number: '0633'
    },
    {
        name: 'Zweilous (634)',
        type: ['Siniestro', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/634.png',
        number: '0634'
    },
    {
        name: 'Hydreigon (635)',
        type: ['Siniestro', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/635.png',
        number: '0635'
    },
    {
        name: 'Larvesta (636)',
        type: ['Bicho', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/636.png',
        number: '0636'
    },
    {
        name: 'Volcarona (637)',
        type: ['Bicho', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/637.png',
        number: '0637'
    },
    {
        name: 'Cobalion (638)',
        type: ['Acero', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/638.png',
        number: '0638'
    },
    {
        name: 'Terrakion (639)',
        type: ["Tierra", 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/639.png',
        number: '0639'
    },
    {
        name: 'Virizion (640)',
        type: ['Planta', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/640.png',
        number: '0640'
    },
    {
        name: 'Tornadus (641)',
        type: ['Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/641.png',
        number: '0641'
    },
    {
        name: 'Thundurus (642)',
        type: ['Eléctrico', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/642.png',
        number: '0642'
    },
    {
        name: 'Reshiram (643)',
        type: ['Dragón', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/643.png',
        number: '0643'
    },
    {
        name: 'Zekrom (644)',
        type: ['Dragón', 'Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/644.png',
        number: '0644'
    },
    {
        name: 'Landorus (645)',
        type: ['Tierra', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/645.png',
        number: '0645'
    },
    {
        name: 'Kyurem (646)',
        type: ['Dragón', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/646.png',
        number: '0646'
    },
    {
        name: 'Keldeo (647)',
        type: ['Agua', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/647.png',
        number: '0647'
    },
    {
        name: 'Meloetta (648)',
        type: ['Normal', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/648.png',
        number: '0648'
    },
    {
        name: 'Genesect (649)',
        type: ['Bicho', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/649.png',
        number: '0649'
    },
    {
        name: 'Chespin (650)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/650.png',
        number: '0650'
    },
    {
        name: 'Quilladin (651)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/651.png',
        number: '0651'
    },
    {
        name: 'Chesnaught (652)',
        type: ['Planta', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/652.png',
        number: '0652'
    },
    {
        name: 'Fennekin (653)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/653.png',
        number: '0653'
    },
    {
        name: 'Braixen (654)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/654.png',
        number: '0654'
    },
    {
        name: 'Delphox (655)',
        type: ['Fuego', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/655.png',
        number: '0655'
    },
    {
        name: 'Froakie (656)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/656.png',
        number: '0656'
    },
    {
        name: 'Frogadier (657)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/657.png',
        number: '0657'
    },
    {
        name: 'Greninja (658)',
        type: ['Agua', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png',
        number: '0658'
    },
    {
        name: 'Bunnelby (659)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/659.png',
        number: '0659'
    },
    {
        name: 'Diggersby (660)',
        type: ['Normal', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/660.png',
        number: '0660'
    },
    {
        name: 'Fletchling (661)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/661.png',
        number: '0661'
    },
    {
        name: 'Fletchinder (662)',
        type: ['Fuego', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/662.png',
        number: '0662'
    },
    {
        name: 'Talonflame (663)',
        type: ['Fuego', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/663.png',
        number: '0663'
    },
    {
        name: 'Scatterbug (664)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/664.png',
        number: '0664'
    },
    {
        name: 'Spewpa (665)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/665.png',
        number: '0665'
    },
    {
        name: 'Vivillon (666)',
        type: ['Bicho', "Volador"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/666.png',
        number: '0666'
    },
    {
        name: 'Litleo (667)',
        type: ['Fuego', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/667.png',
        number: '0667'
    },
    {
        name: 'Pyroar (668)',
        type: ['Fuego', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/668.png',
        number: '0668'
    },
    {
        name: 'Flabébé (669)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/669.png',
        number: '0669'
    },
    {
        name: 'Floette (670)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/670.png',
        number: '0670'
    },
    {
        name: 'Florges (671)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/671.png',
        number: '0671'
    },
    {
        name: 'Skiddo (672)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/672.png',
        number: '0672'
    },
    {
        name: 'Gogoat (673)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/673.png',
        number: '0673'
    },
    {
        name: 'Pancham (674)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/674.png',
        number: '0674'
    },
    {
        name: 'Pangoro (675)',
        type: ['Lucha', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/675.png',
        number: '0675'
    },
    {
        name: 'Furfrou (676)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/676.png',
        number: '0676'
    },
    {
        name: 'Espurr (677)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/677.png',
        number: '0677'
    },
    {
        name: 'Meowstic (678)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/678.png',
        number: '0678'
    },
    {
        name: 'Honedge (679)',
        type: ['Acero', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/679.png',
        number: '0679'
    },
    {
        name: 'Doublade (680)',
        type: ['Acero', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/680.png',
        number: '0680'
    },
    {
        name: 'Aegislash (681)',
        type: ['Acero', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/681.png',
        number: '0681'
    },
    {
        name: 'Spritzee (682)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/682.png',
        number: '0682'
    },
    {
        name: 'Aromatisse (683)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/683.png',
        number: '0683'
    },
    {
        name: 'Swirlix (684)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/684.png',
        number: '0684'
    },
    {
        name: 'Slurpuff (685)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/685.png',
        number: '0685'
    },
    {
        name: 'Inkay (686)',
        type: ['Siniestro', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/686.png',
        number: '0686'
    },
    {
        name: 'Malamar (687)',
        type: ['Siniestro', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/687.png',
        number: '0687'
    },
    {
        name: 'Binacle (688)',
        type: ['Roca', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/688.png',
        number: '0688'
    },
    {
        name: 'Barbaracle (689)',
        type: ['Roca', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/689.png',
        number: '0689'
    },
    {
        name: 'Skrelp (690)',
        type: ['Veneno', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/690.png',
        number: '0690'
    },
    {
        name: 'Dragalge (691)',
        type: ['Veneno', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/691.png',
        number: '0691'
    },
    {
        name: 'Clauncher (692)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/692.png',
        number: '0692'
    },
    {
        name: 'Clawitzer (693)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/693.png',
        number: '0693'
    },
    {
        name: 'Helioptile (694)',
        type: ['Eléctrico', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/694.png',
        number: '0694'
    },
    {
        name: 'Heliolisk (695)',
        type: ['Eléctrico', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/695.png',
        number: '0695'
    },
    {
        name: 'Tyrunt (696)',
        type: ['Roca', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/696.png',
        number: '0696'
    },
    {
        name: 'Tyrantrum (697)',
        type: ['Roca', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/697.png',
        number: '0697'
    },
    {
        name: 'Amaura (698)',
        type: ['Roca', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/698.png',
        number: '0698'
    },
    {
        name: 'Aurorus (699)',
        type: ['Roca', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/699.png',
        number: '0699'
    },
    {
        name: 'Sylveon (700)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png',
        number: '0700'
    },
    {
        name: 'Hawlucha (701)',
        type: ['Lucha', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/701.png',
        number: '0701'
    },
    {
        name: 'Dedenne (702)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/702.png',
        number: '0702'
    },
    {
        name: 'Carbink (703)',
        type: ['Roca', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/703.png',
        number: '0703'
    },
    {
        name: 'Goomy (704)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/704.png',
        number: '0704'
    },
    {
        name: 'Sliggoo (705)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/705.png',
        number: '0705'
    },
    {
        name: 'Goodra (706)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/706.png',
        number: '0706'
    },
    {
        name: 'Klefki (707)',
        type: ['Acero', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/707.png',
        number: '0707'
    },
    {
        name: 'Phantump (708)',
        type: ['Fantasma', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/708.png',
        number: '0708'
    },
    {
        name: 'Trevenant (709)',
        type: ['Fantasma', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/709.png',
        number: '0709'
    },
    {
        name: 'Pumpkaboo (710)',
        type: ['Fantasma', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/710.png',
        number: '0710'
    },
    {
        name: 'Gourgeist (711)',
        type: ['Fantasma', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/711.png',
        number: '0711'
    },
    {
        name: 'Bergmite (712)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/712.png',
        number: '0712'
    },
    {
        name: 'Avalugg (713)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/713.png',
        number: '0713'
    },
    {
        name: 'Noibat (714)',
        type: ['Volador', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/714.png',
        number: '0714'
    },
    {
        name: 'Noivern (715)',
        type: ['Volador', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/715.png',
        number: '0715'
    },
    {
        name: 'Xerneas (716)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/716.png',
        number: '0716'
    },
    {
        name: 'Yveltal (717)',
        type: ['Siniestro', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/717.png',
        number: '0717'
    },
    {
        name: 'Zygarde (718)',
        type: ['Dragón', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/718.png',
        number: '0718'
    },
    {
        name: 'Diancie (719)',
        type: ['Roca', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/719.png',
        number: '0719'
    },
    {
        name: 'Hoopa (720)',
        type: ['Psíquico', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/720.png',
        number: '0720'
    },
    {
        name: 'Volcanion (721)',
        type: ['Fuego', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/721.png',
        number: '0721'
    },
    {
        name: 'Rowlet (722)',
        type: ['Planta', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/722.png',
        number: '0722'
    },
    {
        name: 'Dartrix (723)',
        type: ['Planta', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/723.png',
        number: '0723'
    },
    {
        name: 'Decidueye (724)',
        type: ['Planta', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/724.png',
        number: '0724'
    },
    {
        name: 'Litten (725)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/725.png',
        number: '0725'
    },
    {
        name: 'Torracat (726)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/726.png',
        number: '0726'
    },
    {
        name: 'Incineroar (727)',
        type: ['Fuego', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/727.png',
        number: '0727'
    },
    {
        name: 'Popplio (728)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/728.png',
        number: '0728'
    },
    {
        name: 'Brionne (729)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/729.png',
        number: '0729'
    },
    {
        name: 'Primarina (730)',
        type: ['Agua', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/730.png',
        number: '0730'
    },
    {
        name: 'Pikipek (731)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/731.png',
        number: '0731'
    },
    {
        name: 'Trumbeak (732)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/732.png',
        number: '0732'
    },
    {
        name: 'Toucannon (733)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/733.png',
        number: '0733'
    },
    {
        name: 'Yungoos (734)',
        type: ["Normal"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/734.png',
        number: '0734'
    },
    {
        name: 'Gumshoos (735)',
        type: ["Normal"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/735.png',
        number: '0735'
    },
    {
        name: 'Grubbin (736)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/736.png',
        number: '0736'
    },
    {
        name: 'Charjabug (737)',
        type: ['Bicho', 'Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/737.png',
        number: '0737'
    },
    {
        name: 'Vikavolt (738)',
        type: ['Bicho', 'Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/738.png',
        number: '0738'
    },
    {
        name: 'Crabrawler (739)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/739.png',
        number: '0739'
    },
    {
        name: 'Crabominable (740)',
        type: ['Lucha', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/740.png',
        number: '0740'
    },
    {
        name: 'Oricorio (741)',
        type: ['Fuego', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/741.png',
        number: '0741'
    },
    {
        name: 'Cutiefly (742)',
        type: ['Bicho', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/742.png',
        number: '0742'
    },
    {
        name: 'Ribombee (743)',
        type: ['Bicho', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/743.png',
        number: '0743'
    },
    {
        name: 'Rockruff (744)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/744.png',
        number: '0744'
    },
    {
        name: 'Lycanroc (745)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/745.png',
        number: '0745'
    },
    {
        name: 'Wishiwashi (746)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/746.png',
        number: '0746'
    },
    {
        name: 'Mareanie (747)',
        type: ['Veneno', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/747.png',
        number: '0747'
    },
    {
        name: 'Toxapex (748)',
        type: ['Veneno', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/748.png',
        number: '0748'
    },
    {
        name: 'Mudbray (749)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/749.png',
        number: '0749'
    },
    {
        name: 'Mudsdale (750)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/750.png',
        number: '0750'
    },
    {
        name: 'Dewpider (751)',
        type: ['Agua', 'Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/751.png',
        number: '0751'
    },
    {
        name: 'Araquanid (752)',
        type: ['Agua', 'Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/752.png',
        number: '0752'
    },
    {
        name: 'Fomantis (753)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/753.png',
        number: '0753'
    },
    {
        name: 'Lurantis (754)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/754.png',
        number: '0754'
    },
    {
        name: 'Morelull (755)',
        type: ['Planta', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/755.png',
        number: '0755'
    },
    {
        name: 'Shiinotic (756)',
        type: ['Planta', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/756.png',
        number: '0756'
    },
    {
        name: 'Salandit (757)',
        type: ['Veneno', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/757.png',
        number: '0757'
    },
    {
        name: 'Salazzle (758)',
        type: ['Veneno', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/758.png',
        number: '0758'
    },
    {
        name: 'Stufful (759)',
        type: ['Normal', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/759.png',
        number: '0759'
    },
    {
        name: 'Bewear (760)',
        type: ['Normal', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/760.png',
        number: '0760'
    },
    {
        name: 'Bounsweet (761)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/761.png',
        number: '0761'
    },
    {
        name: 'Steenee (762)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/762.png',
        number: '0762'
    },
    {
        name: 'Tsareena (763)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/763.png',
        number: '0763'
    },
    {
        name: 'Comfey (764)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/764.png',
        number: '0764'
    },
    {
        name: 'Oranguru (765)',
        type: ['Normal', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/765.png',
        number: '0765'
    },
    {
        name: 'Passimian (766)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/766.png',
        number: '0766'
    },
    {
        name: 'Wimpod (767)',
        type: ['Bicho', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/767.png',
        number: '0767'
    },
    {
        name: 'Golisopod (768)',
        type: ['Bicho', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/768.png',
        number: '0768'
    },
    {
        name: 'Sandygast (769)',
        type: ['Fantasma', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/769.png',
        number: '0769'
    },
    {
        name: 'Palossand (770)',
        type: ['Fantasma', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/770.png',
        number: '0770'
    },
    {
        name: 'Pyukumuku (771)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/771.png',
        number: '0771'
    },
    {
        name: 'Código Cero (772)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/772.png',
        number: '0772'
    },
    {
        name: 'Silvally (773)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/773.png',
        number: '0773'
    },
    {
        name: 'Minior (774)',
        type: ['Roca', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/774.png',
        number: '0774'
    },
    {
        name: 'Komala (775)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/775.png',
        number: '0775'
    },
    {
        name: 'Turtonator (776)',
        type: ['Fuego', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/776.png',
        number: '0776'
    },
    {
        name: 'Togedemaru (777)',
        type: ['Eléctrico', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/777.png',
        number: '0777'
    },
    {
        name: 'Mimikyu (778)',
        type: ['Fantasma', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png',
        number: '0778'
    },
    {
        name: 'Bruxish (779)',
        type: ['Agua', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/779.png',
        number: '0779'
    },
    {
        name: 'Drampa (780)',
        type: ['Normal', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/780.png',
        number: '0780'
    },
    {
        name: 'Dhelmise (781)',
        type: ['Fantasma', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/781.png',
        number: '0781'
    },
    {
        name: 'Jangmo-o (782)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/782.png',
        number: '0782'
    },
    {
        name: 'Hakamo-o (783)',
        type: ['Dragón', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/783.png',
        number: '0783'
    },
    {
        name: 'Kommo-o (784)',
        type: ['Dragón', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/784.png',
        number: '0784'
    },
    {
        name: 'Tapu Koko (785)',
        type: ['Eléctrico', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/785.png',
        number: '0785'
    },
    {
        name: 'Tapu Lele (786)',
        type: ['Psíquico', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/786.png',
        number: '0786'
    },
    {
        name: 'Tapu Bulu (787)',
        type: ['Planta', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/787.png',
        number: '0787'
    },
    {
        name: 'Tapu Fini (788)',
        type: ['Agua', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/788.png',
        number: '0788'
    },
    {
        name: 'Cosmog (789)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/789.png',
        number: '0789'
    },
    {
        name: 'Cosmoem (790)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/790.png',
        number: '0790'
    },
    {
        name: 'Solgaleo (791)',
        type: ['Psíquico', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/791.png',
        number: '0791'
    },
    {
        name: 'Lunala (792)',
        type: ['Psíquico', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/792.png',
        number: '0792'
    },
    {
        name: 'Nihilego (793)',
        type: ['Roca', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/793.png',
        number: '0793'
    },
    {
        name: 'Buzzwole (794)',
        type: ['Bicho', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/794.png',
        number: '0794'
    },
    {
        name: 'Pheromosa (795)',
        type: ['Bicho', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/795.png',
        number: '0795'
    },
    {
        name: 'Xurkitree (796)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/796.png',
        number: '0796'
    },
    {
        name: 'Celesteela (797)',
        type: ['Acero', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/797.png',
        number: '0797'
    },
    {
        name: 'Kartana (798)',
        type: ['Planta', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/798.png',
        number: '0798'
    },
    {
        name: 'Guzzlord (799)',
        type: ['Siniestro', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/799.png',
        number: '0799'
    },
    {
        name: 'Necrozma (800)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/800.png',
        number: '0800'
    },
    {
        name: 'Magearna (801)',
        type: ['Acero', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/801.png',
        number: '0801'
    },
    {
        name: 'Marshadow (802)',
        type: ['Fantasma', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/802.png',
        number: '0802'
    },
    {
        name: 'Poipole (803)',
        type: ['Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/803.png',
        number: '0803'
    },
    {
        name: 'Naganadel (804)',
        type: ['Veneno', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/804.png',
        number: '0804'
    },
    {
        name: 'Stakataka (805)',
        type: ['Roca', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/805.png',
        number: '0805'
    },
    {
        name: 'Blacephalon (806)',
        type: ['Fuego', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/806.png',
        number: '0806'
    },
    {
        name: 'Zeraora (807)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/807.png',
        number: '0807'
    },
    {
        name: 'Meltan (808)',
        type: ['Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/808.png',
        number: '0808'
    },
    {
        name: 'Melmetal (809)',
        type: ['Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/809.png',
        number: '0809'
    },
    {
        name: 'Grookey (810)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/810.png',
        number: '0810'
    },
    {
        name: 'Thwackey (811)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/811.png',
        number: '0811'
    },
    {
        name: 'Rillaboom (812)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/812.png',
        number: '0812'
    },
    {
        name: 'Scorbunny (813)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/813.png',
        number: '0813'
    },
    {
        name: 'Raboot (814)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/814.png',
        number: '0814'
    },
    {
        name: 'Cinderace (815)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/815.png',
        number: '0815'
    },
    {
        name: 'Sobble (816)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png',
        number: '0816'
    },
    {
        name: 'Drizzile (817)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/817.png',
        number: '0817'
    },
    {
        name: 'Inteleon (818)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/818.png',
        number: '0818'
    },
    {
        name: 'Skwovet (819)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/819.png',
        number: '0819'
    },
    {
        name: 'Greedent (820)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/820.png',
        number: '0820'
    },
    {
        name: 'Rookidee (821)',
        type: ['Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/821.png',
        number: '0821'
    },
    {
        name: 'Corvisquire (822)',
        type: ['Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/822.png',
        number: '0822'
    },
    {
        name: 'Corviknight (823)',
        type: ['Volador', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/823.png',
        number: '0823'
    },
    {
        name: 'Blipbug (824)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/824.png',
        number: '0824'
    },
    {
        name: 'Dottler (825)',
        type: ['Bicho', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/825.png',
        number: '0825'
    },
    {
        name: 'Orbeetle (826)',
        type: ['Bicho', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/826.png',
        number: '0826'
    },
    {
        name: 'Nickit (827)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/827.png',
        number: '0827'
    },
    {
        name: 'Thievul (828)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/828.png',
        number: '0828'
    },
    {
        name: 'Gossifleur (829)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/829.png',
        number: '0829'
    },
    {
        name: 'Eldegoss (830)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/830.png',
        number: '0830'
    },
    {
        name: 'Wooloo (831)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/831.png',
        number: '0831'
    },
    {
        name: 'Dubwool (832)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/832.png',
        number: '0832'
    },
    {
        name: 'Chewtle (833)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/833.png',
        number: '0833'
    },
    {
        name: 'Drednaw (834)',
        type: ['Agua', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/834.png',
        number: '0834'
    },
    {
        name: 'Yamper (835)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/835.png',
        number: '0835'
    },
    {
        name: 'Boltund (836)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/836.png',
        number: '0836'
    },
    {
        name: 'Rolycoly (837)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/837.png',
        number: '0837'
    },
    {
        name: 'Carkol (838)',
        type: ['Roca', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/838.png',
        number: '0838'
    },
    {
        name: 'Coalossal (839)',
        type: ['Roca', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/839.png',
        number: '0839'
    },
    {
        name: 'Applin (840)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/840.png',
        number: '0840'
    },
    {
        name: 'Flapple (841)',
        type: ['Planta', "Dragón"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/841.png',
        number: '0841'
    },
    {
        name: 'Appletun (842)',
        type: ['Planta', "Dragón"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/842.png',
        number: '0842'
    },
    {
        name: 'Silicobra (843)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/843.png',
        number: '0843'
    },
    {
        name: 'Sandaconda (844)',
        type: ['Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/844.png',
        number: '0844'
    },
    {
        name: 'Cramorant (845)',
        type: ['Volador', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/845.png',
        number: '0845'
    },
    {
        name: 'Arrokuda (846)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/846.png',
        number: '0846'
    },
    {
        name: 'Barraskewda (847)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/847.png',
        number: '0847'
    },
    {
        name: 'Toxel (848)',
        type: ['Eléctrico', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/848.png',
        number: '0848'
    },
    {
        name: 'Toxtricity (849)',
        type: ['Eléctrico', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/849.png',
        number: '0849'
    },
    {
        name: 'Sizzlipede (850)',
        type: ['Fuego', "Bicho"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/850.png',
        number: '0850'
    },
    {
        name: 'Centiskorch (851)',
        type: ['Fuego', "Bicho"],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/851.png',
        number: '0851'
    },
    {
        name: 'Clobbopus (852)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/852.png',
        number: '0852'
    },
    {
        name: 'Grapploct (853)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/853.png',
        number: '0853'
    },
    {
        name: 'Sinistea (854)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/854.png',
        number: '0854'
    },
    {
        name: 'Polteageist (855)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/855.png',
        number: '0855'
    },
    {
        name: 'Hatenna (856)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/856.png',
        number: '0856'
    },
    {
        name: 'Hattrem (857)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/857.png',
        number: '0857'
    },
    {
        name: 'Hatterene (858)',
        type: ['Psíquico', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/858.png',
        number: '0858'
    },
    {
        name: 'Impidimp (859)',
        type: ['Siniestro', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/859.png',
        number: '0859'
    },
    {
        name: 'Morgrem (860)',
        type: ['Siniestro', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/860.png',
        number: '0860'
    },
    {
        name: 'Grimmsnarl (861)',
        type: ['Siniestro', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/861.png',
        number: '0861'
    },
    {
        name: 'Obstagoon (862)',
        type: ['Siniestro', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/862.png',
        number: '0862'
    },
    {
        name: 'Perrserker (863)',
        type: ['Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/863.png',
        number: '0863'
    },
    {
        name: 'Cursola (864)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/864.png',
        number: '0864'
    },
    {
        name: 'Sirfetch´d (865)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/865.png',
        number: '0865'
    },
    {
        name: 'Mr. Rime (866)',
        type: ['Hielo', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/866.png',
        number: '0866'
    },
    {
        name: 'Runerigus (867)',
        type: ['Tierra', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/867.png',
        number: '0867'
    },
    {
        name: 'Milcery (868)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/868.png',
        number: '0868'
    },
    {
        name: 'Alcremie (869)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/869.png',
        number: '0869'
    },
    {
        name: 'Falinks (870)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/870.png',
        number: '0870'
    },
    {
        name: 'Pincurchin (871)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/871.png',
        number: '0871'
    },
    {
        name: 'Snom (872)',
        type: ['Hielo', 'Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/872.png',
        number: '0872'
    },
    {
        name: 'Frosmoth (873)',
        type: ['Hielo', 'Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/873.png',
        number: '0873'
    },
    {
        name: 'Stonjourner (874)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/874.png',
        number: '0874'
    },
    {
        name: 'Eiscue (875)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/875.png',
        number: '0875'
    },
    {
        name: 'Indeedee (876)',
        type: ['Psíquico', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/876.png',
        number: '0876'
    },
    {
        name: 'Morpeko (877)',
        type: ['Eléctrico', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/877.png',
        number: '0877'
    },
    {
        name: 'Cufant (878)',
        type: ['Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/878.png',
        number: '0878'
    },
    {
        name: 'Copperajah (879)',
        type: ['Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/879.png',
        number: '0879'
    },
    {
        name: 'Dracozolt (880)',
        type: ['Eléctrico', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/880.png',
        number: '0880'
    },
    {
        name: 'Arctozolt (881)',
        type: ['Eléctrico', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/881.png',
        number: '0881'
    },
    {
        name: 'Dracovish (882)',
        type: ['Agua', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/882.png',
        number: '0882'
    },
    {
        name: 'Arctovish (883)',
        type: ['Agua', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/883.png',
        number: '0883'
    },
    {
        name: 'Duraludon (884)',
        type: ['Acero', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/884.png',
        number: '0884'
    },
    {
        name: 'Dreepy (885)',
        type: ['Dragón', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/885.png',
        number: '0885'
    },
    {
        name: 'Drakloak (886)',
        type: ['Dragón', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/886.png',
        number: '0886'
    },
    {
        name: 'Dragapult (887)',
        type: ['Dragón', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/887.png',
        number: '0887'
    },
    {
        name: 'Zacian (888)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/888.png',
        number: '0888'
    },
    {
        name: 'Zamazenta (889)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/889.png',
        number: '0889'
    },
    {
        name: 'Eternatus (890)',
        type: ['Veneno', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/890.png',
        number: '0890'
    },
    {
        name: 'Kubfu (891)',
        type: ['Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/891.png',
        number: '0891'
    },
    {
        name: 'Urshifu (892)',
        type: ['Lucha', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/892.png',
        number: '0892'
    },
    {
        name: 'Zarude (893)',
        type: ['Siniestro', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/893.png',
        number: '0893'
    },
    {
        name: 'Regieleki (894)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/894.png',
        number: '0894'
    },
    {
        name: 'Regidrago (895)',
        type: ['Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/895.png',
        number: '0895'
    },
    {
        name: 'Glastrier (896)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/896.png',
        number: '0896'
    },
    {
        name: 'Spectrier (897)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/897.png',
        number: '0897'
    },
    {
        name: 'Calyrex (898)',
        type: ['Psíquico', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/898.png',
        number: '0898'
    },
    {
        name: 'Wyrdeer (899)',
        type: ['Normal', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/899.png',
        number: '0899'
    },
    {
        name: 'Kleavor (900)',
        type: ['Bicho', 'Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/900.png',
        number: '0900'
    },
    {
        name: 'Ursaluna (901)',
        type: ['Tierra', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/901.png',
        number: '0901'
    },
    {
        name: 'Basculegion (902)',
        type: ['Agua', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/902.png',
        number: '0902'
    },
    {
        name: 'Sneasler (903)',
        type: ['Lucha', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/903.png',
        number: '0903'
    },
    {
        name: 'Overqwil (904)',
        type: ['Siniestro', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/904.png',
        number: '0904'
    },
    {
        name: 'Enamorus (905)',
        type: ['Hada', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/905.png',
        number: '0905'
    },
    {
        name: 'Sprigatito (906)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/906.png',
        number: '0906'
    },
    {
        name: 'Floragato (907)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/907.png',
        number: '0907'
    },
    {
        name: 'Meowscarada (908)',
        type: ['Planta', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/908.png',
        number: '0908'
    },
    {
        name: 'Fuecoco (909)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/909.png',
        number: '0909'
    },
    {
        name: 'Crocalor (910)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/910.png',
        number: '0910'
    },
    {
        name: 'Skeledirge (911)',
        type: ['Fuego', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/911.png',
        number: '0911'
    },
    {
        name: 'Quaxly (912)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/912.png',
        number: '0912'
    },
    {
        name: 'Quaxwell (913)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/913.png',
        number: '0913'
    },
    {
        name: 'Quaquaval (914)',
        type: ['Agua', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/914.png',
        number: '0914'
    },
    {
        name: 'Lechonk (915)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/915.png',
        number: '0915'
    },
    {
        name: 'Oinkologne (916)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/916.png',
        number: '0916'
    },
    {
        name: 'Tarountula (917)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/917.png',
        number: '0917'
    },
    {
        name: 'Spidops (918)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/918.png',
        number: '0918'
    },
    {
        name: 'Nymble (919)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/919.png',
        number: '0919'
    },
    {
        name: 'Lokix (920)',
        type: ['Bicho', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/920.png',
        number: '0920'
    },
    {
        name: 'Pawmi (921)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/921.png',
        number: '0921'
    },
    {
        name: 'Pawmo (922)',
        type: ['Eléctrico', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/922.png',
        number: '0922'
    },
    {
        name: 'Pawmot (923)',
        type: ['Eléctrico', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/923.png',
        number: '0923'
    },
    {
        name: 'Tandemaus (924)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/924.png',
        number: '0924'
    },
    {
        name: 'Maushold (925)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/925.png',
        number: '0925'
    },
    {
        name: 'Fidough (926)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/926.png',
        number: '0926'
    },
    {
        name: 'Dachsbun (927)',
        type: ['Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/927.png',
        number: '0927'
    },
    {
        name: 'Smoliv (928)',
        type: ['Planta', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/928.png',
        number: '0928'
    },
    {
        name: 'Dolliv (929)',
        type: ['Planta', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/929.png',
        number: '0929'
    },
    {
        name: 'Arboliva (930)',
        type: ['Planta', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/930.png',
        number: '0930'
    },
    {
        name: 'Squawkabilly (931)',
        type: ['Normal', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/931.png',
        number: '0931'
    },
    {
        name: 'Nacli (932)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/932.png',
        number: '0932'
    },
    {
        name: 'Naclstack (933)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/933.png',
        number: '0933'
    },
    {
        name: 'Garganacl (934)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/934.png',
        number: '0934'
    },
    {
        name: 'Charcadet (935)',
        type: ['Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/935.png',
        number: '0935'
    },
    {
        name: 'Armarouge (936)',
        type: ['Fuego', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/936.png',
        number: '0936'
    },
    {
        name: 'Ceruledge (937)',
        type: ['Fuego', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/937.png',
        number: '0937'
    },
    {
        name: 'Tadbulb (938)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/938.png',
        number: '0938'
    },
    {
        name: 'Bellibolt (939)',
        type: ['Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/939.png',
        number: '0939'
    },
    {
        name: 'Wattrel (940)',
        type: ['Eléctrico', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/940.png',
        number: '0940'
    },
    {
        name: 'Kilowattrel (941)',
        type: ['Eléctrico', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/941.png',
        number: '0941'
    },
    {
        name: 'Maschiff (942)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/942.png',
        number: '0942'
    },
    {
        name: 'Mabosstiff (943)',
        type: ['Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/943.png',
        number: '0943'
    },
    {
        name: 'Shroodle (944)',
        type: ['Veneno', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/944.png',
        number: '0944'
    },
    {
        name: 'Grafaiai (945)',
        type: ['Veneno', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/945.png',
        number: '0945'
    },
    {
        name: 'Bramblin (946)',
        type: ['Planta', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/946.png',
        number: '0946'
    },
    {
        name: 'Brambleghast (947)',
        type: ['Planta', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/947.png',
        number: '0947'
    },
    {
        name: 'Toedscool (948)',
        type: ['Tierra', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/948.png',
        number: '0948'
    },
    {
        name: 'Toedscruel (949)',
        type: ['Tierra', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/949.png',
        number: '0949'
    },
    {
        name: 'Klawf (950)',
        type: ['Roca'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/950.png',
        number: '0950'
    },
    {
        name: 'Capsakid (951)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/951.png',
        number: '0951'
    },
    {
        name: 'Scovillain (952)',
        type: ['Planta', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/952.png',
        number: '0952'
    },
    {
        name: 'Rellor (953)',
        type: ['Bicho'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/953.png',
        number: '0953'
    },
    {
        name: 'Rabsca (954)',
        type: ['Bicho', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/954.png',
        number: '0954'
    },
    {
        name: 'Flittle (955)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/955.png',
        number: '0955'
    },
    {
        name: 'Espathra (956)',
        type: ['Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/956.png',
        number: '0956'
    },
    {
        name: 'Tinkatink (957)',
        type: ['Hada', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/957.png',
        number: '0957'
    },
    {
        name: 'Tinkatuff (958)',
        type: ['Hada', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/958.png',
        number: '0958'
    },
    {
        name: 'Tinkaton (959)',
        type: ['Hada', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/959.png',
        number: '0959'
    },
    {
        name: 'Wiglett (960)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/960.png',
        number: '0960'
    },
    {
        name: 'Wugtrio (961)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/961.png',
        number: '0961'
    },
    {
        name: 'Bombirdier (962)',
        type: ['Volador', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/962.png',
        number: '0962'
    },
    {
        name: 'Finizen (963)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/963.png',
        number: '0963'
    },
    {
        name: 'Palafin (964)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/964.png',
        number: '0964'
    },
    {
        name: 'Varoom (965)',
        type: ['Acero', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/965.png',
        number: '0965'
    },
    {
        name: 'Revavroom (966)',
        type: ['Acero', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/966.png',
        number: '0966'
    },
    {
        name: 'Cyclizar (967)',
        type: ['Dragón', 'Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/967.png',
        number: '0967'
    },
    {
        name: 'Orthworm (968)',
        type: ['Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/968.png',
        number: '0968'
    },
    {
        name: 'Glimmet (969)',
        type: ['Roca', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/969.png',
        number: '0969'
    },
    {
        name: 'Glimmora (970)',
        type: ['Roca', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/970.png',
        number: '0970'
    },
    {
        name: 'Greavard (971)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/971.png',
        number: '0971'
    },
    {
        name: 'Houndstone (972)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/972.png',
        number: '0972'
    },
    {
        name: 'Flamigo (973)',
        type: ['Volador', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/973.png',
        number: '0973'
    },
    {
        name: 'Cetoddle (974)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/974.png',
        number: '0974'
    },
    {
        name: 'Cetitan (975)',
        type: ['Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/975.png',
        number: '0975'
    },
    {
        name: 'Veluza (976)',
        type: ['Agua', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/976.png',
        number: '0976'
    },
    {
        name: 'Dondozo (977)',
        type: ['Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/977.png',
        number: '0977'
    },
    {
        name: 'Tatsugiri (978)',
        type: ['Dragón', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/978.png',
        number: '0978'
    },
    {
        name: 'Annihilape (979)',
        type: ['Lucha', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/979.png',
        number: '0979'
    },
    {
        name: 'Clodsire (980)',
        type: ['Veneno', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/980.png',
        number: '0980'
    },
    {
        name: 'Farigiraf (981)',
        type: ['Normal', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/981.png',
        number: '0981'
    },
    {
        name: 'Dudunsparce (982)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/982.png',
        number: '0982'
    },
    {
        name: 'Kingambit (983)',
        type: ['Siniestro', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/983.png',
        number: '0983'
    },
    {
        name: 'Colmilargo (984)',
        type: ['Tierra', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/984.png',
        number: '0984'
    },
    {
        name: 'Colagrito (985)',
        type: ['Hada', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/985.png',
        number: '0985'
    },
    {
        name: 'Furioseta (986)',
        type: ['Planta', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/986.png',
        number: '0986'
    },
    {
        name: 'Melenaleteo (987)',
        type: ['Fantasma', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/987.png',
        number: '0987'
    },
    {
        name: 'Reptalada (988)',
        type: ['Bicho', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/988.png',
        number: '0988'
    },
    {
        name: 'Pelarena (989)',
        type: ['Eléctrico', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/989.png',
        number: '0989'
    },
    {
        name: 'Ferrodada (990)',
        type: ['Tierra', 'Acero'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/990.png',
        number: '0990'
    },
    {
        name: 'Ferrosaco (991)',
        type: ['Hielo', 'Agua'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/991.png',
        number: '0991'
    },
    {
        name: 'Ferropalmas (992)',
        type: ['Lucha', 'Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/992.png',
        number: '0992'
    },
    {
        name: 'Ferrocuello (993)',
        type: ['Siniestro', 'Volador'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/993.png',
        number: '0993'
    },
    {
        name: 'Ferropolilla (994)',
        type: ['Fuego', 'Veneno'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/994.png',
        number: '0994'
    },
    {
        name: 'Ferropúas (995)',
        type: ['Roca', 'Eléctrico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/995.png',
        number: '0995'
    },
    {
        name: 'Frigibax (996)',
        type: ['Dragón', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/996.png',
        number: '0996'
    },
    {
        name: 'Arctibax (997)',
        type: ['Dragón', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/997.png',
        number: '0997'
    },
    {
        name: 'Baxcalibur (998)',
        type: ['Dragón', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/998.png',
        number: '0998'
    },
    {
        name: 'Gimmighoul (999)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/999.png',
        number: '0999'
    },
    {
        name: 'Gholdengo (1000)',
        type: ['Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1000.png',
        number: '1000'
    },
    {
        name: 'Wo-Chien (1001)',
        type: ['Siniestro', 'Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1001.png',
        number: '1001'
    },
    {
        name: 'Chien-Pao (1002)',
        type: ['Siniestro', 'Hielo'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1002.png',
        number: '1002'
    },
    {
        name: 'Ting-Lu (1003)',
        type: ['Siniestro', 'Tierra'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1003.png',
        number: '1003'
    },
    {
        name: 'Chi-Yu (1004)',
        type: ['Siniestro', 'Fuego'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1004.png',
        number: '1004'
    },
    {
        name: 'Bramaluna (1005)',
        type: ['Dragón', 'Siniestro'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1005.png',
        number: '1005'
    },
    {
        name: 'Ferropaladín (1006)',
        type: ['Hada', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1006.png',
        number: '1006'
    },
    {
        name: 'Koraidon (1007)',
        type: ['Lucha', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1007.png',
        number: '1007'
    },
    {
        name: 'Miraidon (1008)',
        type: ['Eléctrico', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1008.png',
        number: '1008'
    },
    {
        name: 'Ondulagua (1009)',
        type: ['Agua', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1009.png',
        number: '1009'
    },
    {
        name: 'Ferroverdor (1010)',
        type: ['Planta', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1010.png',
        number: '1010'
    },
    {
        name: 'Dipplin (1011)',
        type: ['Planta', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1011.png',
        number: '1011'
    },
    {
        name: 'Poltchageist (1012)',
        type: ['Planta', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1012.png',
        number: '1012'
    },
    {
        name: 'Sinistcha (1013)',
        type: ['Planta', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1013.png',
        number: '1013'
    },
    {
        name: 'Okidogi (1014)',
        type: ['Veneno', 'Lucha'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1014.png',
        number: '1014'
    },
    {
        name: 'Munkidori (1015)',
        type: ['Veneno', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1015.png',
        number: '1015'
    },
    {
        name: 'Fezandipiti (1016)',
        type: ['Veneno', 'Hada'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1016.png',
        number: '1016'
    },
    {
        name: 'Ogerpon (1017)',
        type: ['Planta'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1017.png',
        number: '1017'
    },
    {
        name: 'Archaludon (1018)',
        type: ['Acero', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1018.png',
        number: '1018'
    },
    {
        name: 'Hydrapple (1019)',
        type: ['Planta', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1019.png',
        number: '1019'
    },
    {
        name: 'Flamariete (1020)',
        type: ['Fuego', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1020.png',
        number: '1020'
    },
    {
        name: 'Electrofuria (1021)',
        type: ['Eléctrico', 'Dragón'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1021.png',
        number: '1021'
    },
    {
        name: 'Ferromole (1022)',
        type: ['Roca', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1022.png',
        number: '1022'
    },
    {
        name: 'Ferrotesta (1023)',
        type: ['Acero', 'Psíquico'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1023.png',
        number: '1023'
    },
    {
        name: 'Terapagos (1024)',
        type: ['Normal'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1024.png',
        number: '1024'
    },
    {
        name: 'Pecharunt (1025)',
        type: ['Veneno', 'Fantasma'],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/1025.png',
        number: '1025'
    },
];

const genFilters = [{
        name: "gen1Button",
        filterActive: false,
        min: "0001",
        max: "0151"
    },
    {
        name: "gen2Button",
        filterActive: false,
        min: "0152",
        max: "0251"
    },
    {
        name: "gen3Button",
        filterActive: false,
        min: "0252",
        max: "0386"
    },
    {
        name: "gen4Button",
        filterActive: false,
        min: "0387",
        max: "0493"
    },
    {
        name: "gen5Button",
        filterActive: false,
        min: "0494",
        max: "0649"
    },
    {
        name: "gen6Button",
        filterActive: false,
        min: "0650",
        max: "0721"
    },
    {
        name: "gen7Button",
        filterActive: false,
        min: "0722",
        max: "0809"
    },
    {
        name: "gen8Button",
        filterActive: false,
        min: "0810",
        max: "0905"
    },
    {
        name: "gen9Button",
        filterActive: false,
        min: "0906",
        max: "1025"
    },
    
];

// Normaliza para comparar: minusculas y sin acentos ("Flabébé" -> "flabebe")
function normalizeText(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function pokemonDisplayName(pokemon) {
    return pokemon.name.replace(/\s*\(\d+\)\s*$/, "");
}

// Coincide si el nombre EMPIEZA con lo tipeado (o el numero, si se tipean digitos)
function matchesSearch(pokemon, term) {
    if (!term) return true;
    if (/^\d+$/.test(term)) {
        return String(parseInt(pokemon.number, 10)).startsWith(String(parseInt(term, 10)));
    }
    return normalizeText(pokemonDisplayName(pokemon)).startsWith(normalizeText(term));
}

document.addEventListener("DOMContentLoaded", () => {
    filterPokemon("", []);
    setupSearchSuggestions();

    const clearButton = document.getElementById("clearFilters");
    if (clearButton) clearButton.addEventListener("click", clearAllFilters);
    const emptyClear = document.getElementById("emptyClear");
    if (emptyClear) emptyClear.addEventListener("click", clearAllFilters);

    const searchBox = document.getElementById("searchBox");
    searchBox.addEventListener("input", (event) => {
        const searchTerm = event.target.value.trim();
        const typeFilters = getCurrentTypeFilters();
        filterPokemon(searchTerm, typeFilters);
    });

    const typeButtons = document.querySelectorAll("#typeFilter button");
    typeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const searchTerm = document.getElementById("searchBox").value.trim();
            const selectedType = event.currentTarget.value;
            if (selectedType === "All") {
                resetTypeFilters();
                filterPokemon(searchTerm, []);
            } else {
                toggleTypeFilter(event.currentTarget);
                const typeFilters = getCurrentTypeFilters();
                filterPokemon(searchTerm, typeFilters);
            }
        });
    });

    genFilters.forEach((genFilter) => {
        const genButton = document.getElementById(genFilter.name);
        genButton.addEventListener("click", () => {
            genFilter.filterActive = !genFilter.filterActive;
            const searchTerm = document.getElementById("searchBox").value.trim();
            const typeFilters = getCurrentTypeFilters();
            filterPokemon(searchTerm, typeFilters);
            updateButtonState(genButton, genFilter.filterActive);
        });
    });
});

function getCurrentTypeFilters() {
    const activeButtons = document.querySelectorAll("#typeFilter button.active");
    const typeFilters = Array.from(activeButtons).map((button) => button.value);
    return typeFilters;
}

function toggleTypeFilter(button) {
    button.classList.toggle("active");
}

function resetTypeFilters() {
    const typeButtons = document.querySelectorAll("#typeFilter button");
    typeButtons.forEach((button) => {
        button.classList.remove("active");
    });
}

function filterPokemon(searchTerm, typeFilters) {
    let filteredPokemon = pokemonData;

    const activeGenFilters = genFilters.filter((genFilter) => genFilter.filterActive);
    if (activeGenFilters.length > 0) {
        filteredPokemon = filteredPokemon.filter((pokemon) => {
            return activeGenFilters.some(
                (genFilter) => pokemon.number >= genFilter.min && pokemon.number <= genFilter.max
            );
        });
    }

    if (typeFilters.length > 0) {
        filteredPokemon = filteredPokemon.filter((pokemon) => {
            return typeFilters.every((type) => pokemon.type.includes(type));
        });
    }

    // Filtro por nombre: coincide desde el inicio (no "contiene")
    filteredPokemon = filteredPokemon.filter((pokemon) => matchesSearch(pokemon, searchTerm));

    const mainElement = document.querySelector("main");
    mainElement.innerHTML = "";

    const fragment = document.createDocumentFragment();
    filteredPokemon.forEach((pokemon) => {
        fragment.appendChild(createPokemonCard(pokemon));
    });
    mainElement.appendChild(fragment);

    updateResultsUI(filteredPokemon.length, searchTerm, typeFilters);
}

function updateResultsUI(count, searchTerm, typeFilters) {
    const resultCount = document.getElementById("resultCount");
    const clearButton = document.getElementById("clearFilters");
    const emptyState = document.getElementById("emptyState");
    const hasFilters =
        searchTerm.length > 0 ||
        typeFilters.length > 0 ||
        genFilters.some((g) => g.filterActive);

    if (resultCount) {
        resultCount.textContent =
            count === 1 ? "1 Pokémon" : `${count} Pokémon`;
    }
    if (clearButton) clearButton.hidden = !hasFilters;
    if (emptyState) emptyState.hidden = count !== 0;
}

// ---------- Autocompletado del buscador ----------
function setupSearchSuggestions() {
    const searchBox = document.getElementById("searchBox");
    const suggestBox = document.getElementById("searchSuggestions");
    if (!searchBox || !suggestBox) return;

    let activeIndex = -1;

    function closeSuggestions() {
        suggestBox.hidden = true;
        suggestBox.innerHTML = "";
        activeIndex = -1;
        searchBox.setAttribute("aria-expanded", "false");
    }

    function selectSuggestion(item) {
        searchBox.value = item.dataset.name;
        closeSuggestions();
        filterPokemon(searchBox.value, getCurrentTypeFilters());
    }

    function renderSuggestions(term) {
        const matches = pokemonData
            .filter((p) => matchesSearch(p, term))
            .slice(0, 8);

        if (term.length === 0 || matches.length === 0) {
            closeSuggestions();
            return;
        }

        suggestBox.innerHTML = "";
        matches.forEach((p) => {
            const displayName = pokemonDisplayName(p);
            const item = document.createElement("button");
            item.type = "button";
            item.className = "suggest-item";
            item.dataset.name = displayName;
            item.setAttribute("role", "option");

            const prefixLength = /^\d+$/.test(term) ? 0 : term.length;
            const bold = displayName.slice(0, prefixLength);
            const rest = displayName.slice(prefixLength);
            item.innerHTML = `
                <img src="${p.image}" alt="" loading="lazy">
                <span class="suggest-name"><strong>${bold}</strong>${rest}</span>
                <span class="suggest-number">N.º ${p.number}</span>`;
            item.addEventListener("mousedown", (e) => {
                e.preventDefault(); // evita perder el foco antes del click
                selectSuggestion(item);
            });
            suggestBox.appendChild(item);
        });
        suggestBox.hidden = false;
        activeIndex = -1;
        searchBox.setAttribute("aria-expanded", "true");
    }

    searchBox.addEventListener("input", () => {
        renderSuggestions(searchBox.value.trim());
    });

    searchBox.addEventListener("keydown", (e) => {
        const items = suggestBox.querySelectorAll(".suggest-item");
        if (suggestBox.hidden || items.length === 0) return;

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            const step = e.key === "ArrowDown" ? 1 : -1;
            activeIndex = (activeIndex + step + items.length) % items.length;
            items.forEach((el, i) => el.classList.toggle("active", i === activeIndex));
            items[activeIndex].scrollIntoView({ block: "nearest" });
        } else if (e.key === "Enter" && activeIndex >= 0) {
            e.preventDefault();
            selectSuggestion(items[activeIndex]);
        } else if (e.key === "Escape") {
            closeSuggestions();
        }
    });

    searchBox.addEventListener("blur", () => setTimeout(closeSuggestions, 120));
}

function clearAllFilters() {
    document.getElementById("searchBox").value = "";
    resetTypeFilters();
    genFilters.forEach((genFilter) => {
        genFilter.filterActive = false;
        const genButton = document.getElementById(genFilter.name);
        if (genButton) updateButtonState(genButton, false);
    });
    filterPokemon("", []);
}

function updateButtonState(button, isActive) {
    if (isActive) {
        button.classList.add("active-button");
    } else {
        button.classList.remove("active-button");
    }
}
////////////////////////////////////////PRUEBA BOTONES DE ABAJO////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Colores del tipo como variables CSS (una sola fuente de verdad: badges.js)
    const c1 = (TYPE_COLORS[pokemon.type[0]] || {}).bg || "#A8A77A";
    const c2 = (TYPE_COLORS[pokemon.type[1] || pokemon.type[0]] || {}).bg || c1;
    card.style.setProperty("--c1", c1);
    card.style.setProperty("--c2", c2);

    // "Bulbasaur (001)" -> nombre y número separados
    const match = pokemon.name.match(/^(.*?)\s*\((\d+)\)\s*$/);
    const displayName = match ? match[1] : pokemon.name;
    const displayNumber = match ? match[2] : pokemon.number;

    const numberChip = document.createElement("span");
    numberChip.classList.add("poke-number");
    numberChip.textContent = `N.\u00ba ${displayNumber}`;
    card.appendChild(numberChip);

    const name = document.createElement("h2");
    name.textContent = displayName;
    card.appendChild(name);

    const imageButton = document.createElement("button");
    imageButton.classList.add("sprite-button");
    imageButton.title = "Toc\u00e1 para escuchar su grito";
    imageButton.setAttribute("aria-label", `Escuchar el grito de ${displayName}`);
    const image = document.createElement("img");
    image.src = pokemon.image;
    image.alt = displayName;
    image.loading = "lazy";
    image.decoding = "async";
    imageButton.appendChild(image);
    card.appendChild(imageButton);

    const typeImagesContainer = document.createElement("div");
    typeImagesContainer.classList.add("type-images-container");
    for (let i = 0; i < pokemon.type.length; i++) {
        const typeImage = document.createElement("img");
        typeImage.src = getTypeImageURL(pokemon.type[i]);
        typeImage.alt = `Tipo ${pokemon.type[i]}`;
        typeImagesContainer.appendChild(typeImage);
    }
    card.appendChild(typeImagesContainer);

    imageButton.addEventListener("click", () => {
        togglePokemonSound(pokemon.name); // nombre completo: coincide con los archivos de audio existentes
    });

    const detailButton = document.createElement("button");
    detailButton.classList.add("detail-button");
    detailButton.textContent = "Ver ficha";
    detailButton.setAttribute("aria-label", `Ver ficha completa de ${displayName}`);
    detailButton.addEventListener("click", () => {
        openDetail(displayNumber);
    });
    card.appendChild(detailButton);

    return card;
}

///////////////////////////////////AUDIO///////////////////////////////////////////////////////////////////////////////////
let audio = null;
let currentPokemon = null;

function playPokemonSound(pokemonName) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    audio = new Audio(`audios/${pokemonName.toLowerCase()}.mp3`); // Ruta relativa a la carpeta "sounds"
    audio.loop = false;
    audio.play();
    currentPokemon = pokemonName.toLowerCase();
}

function togglePokemonSound(pokemonName) {
    if (audio && !audio.paused && currentPokemon === pokemonName.toLowerCase()) {
        audio.pause();
    } else {
        playPokemonSound(pokemonName);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// getTypeImageURL() ahora vive en badges.js (SVG locales, sin URLs externas).

// Render inicial: lo hace filterPokemon("", []) en DOMContentLoaded.