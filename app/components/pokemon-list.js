/** @jsx React.DOM */

var React = require('react'),
    PokemonList;

function padString(number) {
  var string = number.toString(),
      padding = '000';

  return padding.substring(0, padding.length - string.length) + string;
}

PokemonList = React.createClass({
  renderListItem: function(item, index) {
    var key = item.InternalName.toLowerCase(),
        styles = { backgroundImage: 'url("/images/icons/icon' + padString(index + 1) + '.png")' };

    return <li key={key} style={styles} onClick={this.props.onItemClick.bind(null, item, index)}>{item.Name}</li>;
  },
  render: function() {
    return (
      <aside id="pokemon-list">
        <ul>
          {this.props.pokemons.map(this.renderListItem)}
        </ul>
      </aside>
    );
  }
});

module.exports = PokemonList;