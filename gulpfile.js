var elixir = require('laravel-elixir');

require('laravel-elixir-browser-sync-simple');

elixir(function(mix) {
	mix.sass('main.scss')
    .browserSync({
      port: 9000,
      server: {
      	baseDir: "public",
      	directory: true
      }
    });
});

