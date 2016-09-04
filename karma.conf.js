module.exports = function(config) {
	config.set({

		singleRun: false,

		browsers: ['Chrome'],

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

		webpackServer: { noInfo: true }

	});

};
