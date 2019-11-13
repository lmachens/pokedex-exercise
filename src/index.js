import {
  createNoPokemons,
  setChild,
  resetInput,
  removeChilds,
  createPokemonElements,
  createPokemonElement
} from './api/elements';
import { getPokemonsByName, getAllPokemons } from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Reset input and results
resetInput(searchInput);
const allPokemons = getAllPokemons();
const allPokemonElements = createPokemonElements(allPokemons);
setChild(resultsElement, allPokemonElements);
// Add event listeners
/**
 * Find the correct event to listen for input changes.
 */
searchInput.addEventListener('input', event => {
  /**
   * You can verify that this event is fired in the Browser console.
   * Can you find the value of searchInput in this event?
   */
  console.log('Great! This event is fired:', event);
  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
  removeChilds(resultsElement);
  const filteredPokemons = getPokemonsByName(searchInput.value);
  const filteredPokemonElements = createPokemonElements(filteredPokemons);
  setChild(resultsElement, filteredPokemonElements);
});

/**
 * Later, you can add sort functionality.
 */
