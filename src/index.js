import { createNoPokemons, setChild, resetInput } from './api/elements';
import { getAllPokemon, showAllPokemons } from './api/pokemons';

// Query element
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');
const allPokemons = getAllPokemon();
// Reset input and results
// Add event listeners
console.log(allPokemons);

/**
 * Find the correct event to listen for input changes.
 */
showAllPokemons();
searchInput.addEventListener('input', event => {
  /**
   * You can verify that this event is fired in the Browser console.
   * Can you find the value of searchInput in this event?
   */
  console.log('Great! This event is fired:', event.target.value);

  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */
