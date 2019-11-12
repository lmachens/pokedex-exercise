import {
  createNoPokemons,
  createPokemonElements,
  setChild,
  resetInput,
  removeChilds
} from './api/elements';
import { getPokemonsByName, getAllPokemons } from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Get all pokemons
const allPokemons = getAllPokemons();

// Reset input and results
resetInput(searchInput);
const allPokemonElement = createPokemonElements(allPokemons);
setChild(resultsElement, allPokemonElement);

// Add event listeners
searchInput.addEventListener('input', event => {
  console.log('Great! This event is fired:', event.target.value);

  // resultsElement.innerHTML = '';
  removeChilds(resultsElement);

  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */
