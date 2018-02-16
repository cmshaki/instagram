const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
	filename:  (getPath) => {
      return getPath('css/[name].css').replace('css/js', 'css');
		}
});

module.exports = {
	entry: {
			main: path.resolve('src/assets/shared/js', './index.js'),
			login: path.resolve('src/assets/login/js/react', './login.js'),
			users: path.resolve('src/assets/users/js', './users.js')
	},
	output: {
		path: path.resolve('/dist'),
		filename: 'js/[name].js',
	},
	devServer: {
		contentBase: path.resolve('dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react']
				}
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					 minimize: true,
					 removeComments: true,
					 collapseWhitespace: false
			}
		},
			{
				test: /\.css/,
				use: extractPlugin.extract({
					use: 'css-loader!postcss-loader',
				}),
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader!postcss-loader!sass-loader?sourceMap',
				}),
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				loader: 'url-loader?limit=5120&name=img/[name].[ext]',
			},
			{
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=/fonts/[name].[ext]'
      },
		]
	},
	plugins: [
		extractPlugin,
		// new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: 'jquery',
		// 	path: 'path'
		// }),

		new HtmlWebpackPlugin({
	    filename: path.resolve('dist', './index.html'),
	    template: path.resolve('src', './index.html'),
	    chunks: ['main', 'login'],
	  }),
		new HtmlWebpackPlugin({
	    filename: path.resolve('dist/users', './users.html'),
	    template: path.resolve('src/users', './users.html'),
	    chunks: ['main', 'users'],
	  }),
		// new CleanWebpackPlugin([
		// 	path.resolve('/dist'),
		// ]),
		new webpack.optimize.UglifyJsPlugin({
		 beautify: false,
		 comments: false,
		 compress: {
			 warnings: false,
			 drop_console: true
		 },
		 mangle: {
			 except: ['$'],
			 screw_ie8: true,
			 keep_fnames: false
		 }
	 })
	]
}
