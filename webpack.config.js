/**
 * Created with webpack.config.js
 * @Author: maxsmu
 * @Homepage: https://github.com/maxsmu
 * @Date: 2016-07-07 11:38 AM
 */
const webpack = require('webpack');

module.exports = {

	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('This file is created by zhaoda')
	]
};
