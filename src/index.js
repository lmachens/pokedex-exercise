import { createNoPokemons, setChild, resetInput } from './api/elements';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Reset input and results
resetInput(searchInput);
setChild(resultsElement, createNoPokemons());

// Add event listeners
searchInput.addEventListener('input', event => {
  console.log('Great! This event is fired:', event.target.value);

  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */
