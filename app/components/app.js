/** @jsx React.DOM */

var React = require('react'),
    PokemonList = require('./pokemon-list'),
    PokemonDetail = require('./pokemon-detail'),
    PokedexApp;

PokedexApp = React.createClass({
  nameToIndex: function(pokemonName) {
    pokemonName = pokemonName || this.props.pokemons[0].Name;

    for (var index = 0; index < this.props.pokemons.length; index++) {
      var pokemon = this.props.pokemons[index];

      if (pokemon.Name.toLowerCase() === pokemonName.toLowerCase()) {
        break;
      }
    }

    return index;
  },
  getInitialState: function() {
    return { index: this.nameToIndex(this.props.initialPokemon) };
  },
  componentDidMount: function() {
    window.addEventListener('popstate', function(popStateEvent) {
      var pokemonName = popStateEvent.state.pokemonName;

      this.setState({ index: this.nameToIndex(pokemonName) });
    }.bind(this));
  },
  onItemClick: function(item, index) {
    this.setState({ index: index });

    if ('history' in global) {
      global.history.pushState({ pokemonName: item.Name.toLowerCase() }, item.Name, '/' + item.Name.toLowerCase());
    }
  },
  render: function() {
    var index = this.state.index;

    return (
      <main>
        <PokemonList pokemons={this.props.pokemons} onItemClick={this.onItemClick} />
        <PokemonDetail pokemon={this.props.pokemons[index]} index={index} />
      </main>
    );
  }
});

module.exports = PokedexApp;