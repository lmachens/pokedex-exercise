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
searchInput.addEventListener('input', event => {
  console.log('Great! This event is fired:', event.target.value);
});

/**
 * Later, you can add sort functionality.
 */
