import { createNoPokemons, setChild, resetInput } from './api/elements';

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
searchInput.addEventListener('keypress', event => {
  if (event.which == 13)
    /**
     * You can verify that this event is fired in the Browser console.
     * Can you find the value of searchInput in this event?
     */
    console.log('Great! This event is fired:', event);

  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */
