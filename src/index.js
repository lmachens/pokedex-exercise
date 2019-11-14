import { createNoPokemons, removeChilds } from './api/elements';
import {
  getAllPokemon,
  showAllPokemons,
  showPokemons,
  getPokemonsByName
} from './api/pokemons';

// Query element
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');
const allPokemons = getAllPokemon();
// Reset input and results
// Add event listeners

/**
 * Find the correct event to listen for input changes.
 */
searchInput.addEventListener('input', event => {
  /**
   * You can verify that this event is fired in the Browser console.
   * Can you find the value of searchInput in this event?
   */
  removeChilds(resultsElement);
  const queryList = getPokemonsByName(event.target.value);

  if (queryList == '') {
    resultsElement.appendChild(createNoPokemons());
  }

  showPokemons(queryList);
  console.log('Great! This event is fired:', event.target.value, queryList);

  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */
