/** @jsx React.DOM */

var React = require('react'),
    PokemonDetail;

PokemonDetail = React.createClass({
  padString: function(number) {
    var string = number.toString(),
        padding = '000';

    return padding.substring(0, padding.length - string.length) + string;
  },
  render: function() {
    return (
      <section id="pokemon-detail">
        <h2>{this.props.pokemon.Name}</h2>
        <aside id="pokemon-picture">
          <img src={'/images/big/' + this.padString(this.props.index + 1) + '.png'} />

          <dl>
            <dt>Type 1:</dt>
            <dd>{this.props.pokemon.Type1}</dd>
            <dt>Type 2:</dt>
            <dd>{this.props.pokemon.Type2}</dd>
          </dl>

          <dl>
            <dt>Height:</dt>
            <dd>{this.props.pokemon.Height} m</dd>
            <dt>Weight:</dt>
            <dd>{this.props.pokemon.Weight} kg</dd>
          </dl>
        </aside>
        <aside id="pokemon-info">
          <p>{this.props.pokemon.Pokedex}</p>
        </aside>
      </section>
    );
  }
});

module.exports = PokemonDetail;