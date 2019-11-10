/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 */
import pokemons from 'json-pokemon';
// import searchInput from '../index';

export function getPokemonsByName(pokemonName) {
  const selection = pokemons.filter(({ name }) =>
    name.toLowerCase().match(pokemonName.toLowerCase())
  );
  return selection;
}

/**
 * pokemonName is unused.
 * You could use this property to filter the pokemons by name.
 * Take a look: Array.prototype.filter()
 *
 *
 *
 * Try to return all pokemons which starts with the name like: `pik` -> `Pikachu`, `Pikipek`.
 * It should be case independend.
 */

export function sortPokemonsByName(pokemons) {
  pokemons = pokemons.reverse(pokemons.name);

  return pokemons;
}
