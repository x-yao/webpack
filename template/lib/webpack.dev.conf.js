var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfigMod = require('./webpack.base.conf'),
	baseWebpackConfig = baseWebpackConfigMod.config;


// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
	baseWebpackConfig.entry[name] = ['./lib/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
	module: {
		loaders: utils.styleLoaders()
	},
	output: {
		path: config.dev.assetsRoot,
		filename: utils.assetsPath('[name].js'),
		chunkFilename: utils.assetsPath('[id].js')
	},
	// eval-source-map is faster for development
	devtool: '#eval-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': config.dev.env
		}),
		// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	].concat(baseWebpackConfigMod.htmlDevList)
});
