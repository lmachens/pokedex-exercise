// const response = await fetch('url');
// const data = await response.json();
// console.log(data);

let pokemons = [];

export async function initPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
  const data = await response.json();
  pokemons = data.results;
}

export function getAllPokemons() {
  return pokemons;
}

export function getPokemonsByName(pokemonName) {
  /**
   * pokemonName is unused.
   * You could use this property to filter the pokemons by name.
   * Take pokemonNameA look: Array.prototype.filter()
   *
   * Try to return all pokemons which starts with the name like: `pik` -> `Pikachu`, `Pikipek`.
   * It should be case independend.
   */
  const myNormalizedPokemonName = pokemonName.toLowerCase();
  const foundPokemons = pokemons.filter(({ name }) => {
    const normalizedPokemonName = name.toLowerCase();
    return normalizedPokemonName.match(myNormalizedPokemonName);
  });
  return foundPokemons;
}

export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
  /**
   * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
   *
   * See Array.prototype.sort()
   */

  const sortedPokemons = pokemons.sort((pokemonNameA, pokemonNameB) => {
    var nameA = pokemonNameA.name.toUpperCase(); // ignore upper and lowercase
    var nameB = pokemonNameB.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
  return sortedPokemons;
}
