module.exports = function(config) {
	config.set({

		singleRun: false,

		files: [
			{ pattern: 'test-context.js', watched: false },
		],

		frameworks: ['jasmine'],

		preprocessors: {
			'test-context.js': ['webpack']
		},

		webpack: {
			module: {
				loaders: [
					{ test: /\.js/, exclude: /node_modules/, loader: 'babel?presets[]=es2015' } ]
			},

			watch: true
		},

		webpackServer: { noInfo: true },


		browsers: ['Chrome'],

		customLaunchers: {
      Chrome_DevTools_Saved_Prefs: {
        base: 'Chrome',
        flags: ['--user-data-dir=./tests/config/.chrome_dev_user']
      }
    }

	});

};
