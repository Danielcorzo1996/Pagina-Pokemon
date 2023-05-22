const url = 'https://pokeapi.co/api/v2/evolution-chain/';
const totalPokemon = 151; // Total number of Pokémon

async function getPokemonEvolutions(pokemonId) {
    const response = await fetch(`${url}${pokemonId}`);
    const data = await response.json();
    const chain = data.chain;
    let evolutions = [];
    let currentChain = chain;

    // Find all evolutions in chain
    while (currentChain !== null) {
        const pokemon = currentChain.species;
        const pokemonData = await getPokemonData(pokemon.name);
        evolutions.push(pokemonData);
        currentChain = currentChain.evolves_to.length > 0 ? currentChain.evolves_to[0] : null;
    }

    return evolutions;
}

async function getPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    const pokemonData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
    };

    return pokemonData;
}

async function loadAllPokemonEvolutions() {
    const pokemonList = document.getElementById('pokemon-list');
    pokemonList.innerHTML = '';

    // Load evolutions for each Pokémon
    for (let i = 1; i <= totalPokemon; i++) {
        const evolutions = await getPokemonEvolutions(i);

        // Add each Pokemon to the table
        for (let j = 0; j < evolutions.length; j++) {
            const evolution = evolutions[j];
            const row = `
                <tr>
                    <td>${evolution.id}</td>
                    <td>${evolution.name}</td>
                    <td>
                        <img src="${evolution.image}" alt="${evolution.name}" width="250" >
                    </td>
                </tr>
            `;
            pokemonList.innerHTML += row;
        }
    }
}

// Load all Pokémon evolutions on page load
document.addEventListener('DOMContentLoaded', function() {
    loadAllPokemonEvolutions();
});
