require('node-jsx').install();

var React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    PokemonsData = require('./app/data/pokedex'),
    PokedexApp = require('./app/components/app'),
    express = require('express'),
    port = process.env.PORT || 3000,
    app;

app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var app = React.createElement(PokedexApp, { pokemons: PokemonsData }),
      reactHtml = ReactDOMServer.renderToString(app);

  response.render('index.ejs', { reactOutput: reactHtml });
});

app.get('/*', function(request, response) {
  var pokemonName = request.path.split('/').pop(),
      app = React.createElement(PokedexApp, { pokemons: PokemonsData, initialPokemon: pokemonName }),
      reactHtml = ReactDOMServer.renderToString(app);

  response.render('index.ejs', { reactOutput: reactHtml });
});

app.listen(port);

console.log('Pokedex.js running in localhost:' + port);