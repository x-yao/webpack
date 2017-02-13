var path = require('path');
var config = require('../config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../');

// https://github.com/ampedandwired/html-webpack-plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entryMap = {
	main: 'src/main.js',
}, htmlDevList = [], htmlProdList = [];

for (var k in entryMap) {
	htmlDevList.push(new HtmlWebpackPlugin({
		filename:'index.html',
		template: 'index.html',
		chunks: [k]
	}));
}


var baseConf = {
	entry: entryMap,
	output: {
		path: config.build.assetsRoot,
		publicPath: config.build.assetsPublicPath,
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		fallback: [path.join(__dirname, '../node_modules')],
		alias: {
			'src': path.resolve(__dirname, '../src'),
			'html': path.resolve(__dirname, '../src/html'),
			'assets': path.resolve(__dirname, '../src/assets'),
			'components': path.resolve(__dirname, '../src/components'),
			'mod':path.resolve(__dirname, '../src/mod'),
			'vuexpath':path.resolve(__dirname, '../src/vuex'),
			'util':path.resolve(__dirname, '../src/util')
		}
	},
	resolveLoader: {
		fallback: [path.join(__dirname, '../node_modules')]
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				include: projectRoot,
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.html$/,
				loader: 'vue-html'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	vue: {
		loaders: utils.cssLoaders()
	}
};


module.exports = {
	htmlDevList: htmlDevList,
	htmlProdList: htmlProdList,
	config: baseConf
};