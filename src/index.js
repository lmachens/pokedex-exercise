// required to use async/await
import 'babel-polyfill';

import {
  createNoPokemons,
  setChild,
  resetInput,
  removeChilds,
  createPokemonElements
} from './api/elements';
import {
  getPokemonsByName,
  getAllPokemons,
  sortPokemonsByName,
  initPokemons
} from './api/pokemons';

initPokemons().then(start);

function start() {
  // Query elements
  const searchInput = document.querySelector('.search__input');
  const resultsElement = document.querySelector('.results');

  // Get all pokemons
  const allPokemons = getAllPokemons();
  allPokemons.forEach(
    pokemon =>
      (pokemon.name =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))
  );
  console.log(allPokemons);
  const allSortedPokemons = sortPokemonsByName(allPokemons);

  // Reset input and results
  resetInput(searchInput);
  const allPokemonElements = createPokemonElements(allSortedPokemons);
  setChild(resultsElement, allPokemonElements);

  // Add event listeners
  searchInput.addEventListener('input', event => {
    /**
     * Search for your pokemons now, create elements and add them to your results.
     */
    removeChilds(resultsElement);
    const filteredPokemons = getPokemonsByName(
      searchInput.value,
      getAllPokemons()
    );
    const filteredPokemonElements = createPokemonElements(filteredPokemons);
    setChild(resultsElement, filteredPokemonElements);
  });
}
