var devConfig = require('./webpack.config.js');
var webpack = require('webpack');
var WebpackStripLoader = require('strip-loader');

var stripLoader = {
 test: [/\.js$/, /\.es6$/],
 exclude: /node_modules/,
 loader: WebpackStripLoader.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);

var output = {
	path: __dirname + "/build",
	filename: "bundle.js",
	publicPath: '/'
}

devConfig.output = output;

var plugins = [
	new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
			}
	}),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin()
]

devConfig.plugins = plugins;

module.exports = devConfig;
