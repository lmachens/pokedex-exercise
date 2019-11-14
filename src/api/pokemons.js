import pokemons from './pokemons.json';

export function getAllPokemons() {
  return pokemons;
}

export function getPokemonsByName(pokemonName) {
  const normalizedName = pokemonName.toLowerCase();
  const pickPokemons = pokemons.filter(pokemon => {
    const normalizedPokemon = pokemon.name.toLowerCase();
    return normalizedPokemon.startsWith(normalizedName);
  });
  return pickPokemons;
}

export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
  const sortedPokemons = pokemons.sort((pokemonA, pokemonB) => {
    const nameA = pokemonA.name.toLowerCase();
    const nameB = pokemonB.name.toLowerCase();

    if (nameA > nameB) {
      return -1;
    }
    if (nameB > nameA) {
      return 1;
    }

    return 0;
  });

  if (sortDirection === 'DESC') {
    sortedPokemons.reverse();
  }
  return sortedPokemons;
}
