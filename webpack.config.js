var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	context: __dirname + "/app",

  entry: ['./App.js'],

  output: {
		path: __dirname + "/build",
    filename: "bundle.js",
		//publicPath: 'http://localhost:8080/' // if not absolute, dev server doesn't work loading images
  },

	module: {

		preLoaders: [
			{
        test: [/\.js$/, /\.es6$/],
				exclude: [/node_modules/, __dirname + "/app/lib/"],
        loaders: ['eslint-loader']
      }
		],

		loaders: [
			{
				test: [/\.js$/, /\.es6$/],
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
				 	presets: ['es2015']
				}
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				//loader: 'file?name=[path][name].[hash].[ext]',
				loader: 'url-loader?limit=8192',
			},
			{
				test: /\.scss$/,
				loaders: [ 'style', 'css?sourceMap', 'resolve-url', 'sass?sourceMap' ]
			},
			{
				test: /\.css$/,
			 	loader: "style-loader!css-loader"
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('style.css', {
				allChunks: true
		})
	],

	resolve: {
		extensions: ['', '.js', '.es6']
	},

	watch: false,

	devtool: "#source-map",

	devServer: {
		contentBase: __dirname + "/build",
  },

	eslint: {
        failOnWarning: false,
        failOnError: true
  },

}
