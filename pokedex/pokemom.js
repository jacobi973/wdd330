async function fetchPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100000');
    const data = await response.json();
    const results = data.results;
    return results.map(result_1 => result_1.name);
}
async function fetchPokemonTypes(){
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    const data = await response.json();
    const results = data.results;
    return results.map(result_1 => result_1.name);
}
export const pokemon = await fetchPokemon()
export const pokemonTypes = await fetchPokemonTypes()