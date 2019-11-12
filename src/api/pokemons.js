import pokemons from 'json-pokemon';

export function getAllPokemons() {
  return pokemons;
}

export function getPokemonsByName(pokemonName) {
  const pickPokemon = pokemons.filter(i =>
    i.name.startsWith(pokemonName, 'pik')
  );
  return pickPokemon;
}

export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
  if (sortDirection === 'ASC') {
    const sortASC = pokemons.sort(function(a, b) {
      a.name.localCompare(b.name);
    });
    return sortASC;
  } else sortDirection === 'DESC';
  const sortDESC = pokemons.sort(function(a, b) {
    a.name.localCompare(b.name);
  });
  return sortDESC;
}
