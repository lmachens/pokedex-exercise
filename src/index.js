import {
  createNoPokemons,
  setChild,
  resetInput,
  createPokemons,
  removeChilds
} from './api/elements';
import { getPokemonsByName } from './api/pokemons';
import pokemons from 'json-pokemon';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Reset input and results
resetInput(searchInput);
setChild(resultsElement, createNoPokemons());

// Add event listeners

/**
 * Find the correct event to listen for input changes.
 */
searchInput.addEventListener('change', function() {
  /**
   * You can verify that this event is fired in the Browser console.
   * Can you find the value of searchInput in this event?
   */

  //const selection = pokemons.filter(({ name }) => name.startsWith(searchInput));
  removeChilds(resultsElement);
  const PokemonSearch = getPokemonsByName(searchInput.value);

  PokemonSearch.forEach(createPokemons);

  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */
