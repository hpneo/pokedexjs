var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonsData = require('./data/pokedex'),
    PokedexApp = require('./components/app'),
    appNode = document.querySelector('#pokedex-app'),
    pokemonName;

if ('location' in global) {
  pokemonName = global.location.pathname.split('/').pop();
}

ReactDOM.render(React.createElement(PokedexApp, { pokemons: PokemonsData, initialPokemon: pokemonName }), appNode);