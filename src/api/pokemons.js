/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 */
import pokemons from 'json-pokemon';
// console.log(pokemons);

export function getPokemonsByName(pokemonName) {
  const selection = pokemons.filter(({ name }) => name.match('Pik'));

  return selection;
}

// let filterPoke = (name) => {
//   return pokemons.filter(data => {
//     return (data.toLowerCase().indexOf(name.toLowerCase()) > -1);
//   });
// };

// console.log(filterPoke('piku')

// console.log(pokemons)

export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
  /**
   * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
   *
   * See Array.prototype.sort()
   */
  return pokemons;
}
