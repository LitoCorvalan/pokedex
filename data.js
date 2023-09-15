const pokemonData = [];

function createPokemonData(name, types, imageUrl, number) {
    const pokemon = {
        name: name,
        type: types,
        image: imageUrl,
        number: number,
    };
    return pokemon;
}


for (let i = 37; i <= 1010; i++) {
    let number = i.toString().padStart(3, "0");
    let name = `Pokémon (${number})`;
    let types = ["TypeA", "TypeB"];
    let imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`;

    const pokemon = createPokemonData(name, types, imageUrl, number);
    pokemonData.push(pokemon);
}
pokemonData.forEach((pokemon) => {
    console.log(pokemon);console.log(",");
});