import {
  createNoPokemons,
  setChild,
  resetInput,
  createPokemons,
  createPokemonElement
} from './api/elements';

import { getPokemonsByName, getAllPokemons } from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

//Get all Pokemons
const allPokemons = getAllPokemons();

// Reset input and results
resetInput(searchInput);
const allPokemonElement = createPokemons(allPokemons);
setChild(resultsElement, allPokemonElement);

// Add event listeners

searchInput.addEventListener('input', event => {
  console.log('Great! This event is fired:', event.target.value);
});

console.log(getPokemonsByName('pika'));
/**
 * Search for your pokemons now, create elements and add them to your results.
 */

/**
 * Later, you can add sort functionality.
 */
