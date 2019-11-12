import {
  createNoPokemons,
  setChild,
  resetInput,
  createPokemons,
  createPokemonElement,
  removeChilds
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
  const searchValue = event.target.value;
  const pokemons = getPokemonsByName(searchValue);
  const pokemonElements = createPokemons(pokemons);
  if (pokemons.length > 0) {
    setChild(resultsElement, pokemonElements);
  } else {
    setChild(resultsElement, createNoPokemons());
  }
});
