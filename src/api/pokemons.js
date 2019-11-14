/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 */
const resultsElement = document.querySelector('.results');
import pokemons from './pokemon.json';

export function getAllPokemon() {
  return pokemons;
}

export function showPokemons(pokeList) {
  pokeList.forEach(pokemon => {
    let newItem = document.createElement('div');
    newItem.innerHTML = pokemon.name;
    resultsElement.appendChild(newItem);
  });
}

export function getPokemonsByName(pokemonName) {
  const normalizedQueryInput = pokemonName.toLowerCase();
  const matchedPokemon = pokemons.filter(pokemon => {
    const normalizedPokemonName = pokemon.name.toLowerCase();
    return normalizedPokemonName.match(normalizedQueryInput);
  });
  return matchedPokemon;
}
/**
 * pokemonName is unused.
 * You could use this property to filter the pokemons by name.
 * Take a look: Array.prototype.filter()
 *
 * Try to return all pokemons which starts with the name like: `pik` -> `Pikachu`, `Pikipek`.
 * It should be case independend.
 */

export function sortPokemonsByName(pokemons) {
  return pokemons.sort((pokemonA, pokemonB) => {
    const nameA = pokemonA.name.toLowerCase;
    const nameB = pokemonB.name.toLowerCase;
    if (sortDirection.toLowerCase === 'DESC') {
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    } else if (sortDirection === 'ASC') {
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    }
  });
  /**
   * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
   *
   * See Array.prototype.sort()
   */
  return pokemons;
}
