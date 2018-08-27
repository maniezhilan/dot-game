const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');
const devMode = process.env.NODE_ENV !== 'production';
const CleanWebpackPlugin = require('clean-webpack-plugin');

// the path(s) that should be cleaned
let pathsToClean = [
  'public',
  'build'
]

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx']
  },

	module : {
		 rules : [
				{
					test: /\.jsx?/,
					include: APP_DIR,
					loader: 'babel-loader',
					query: {
						presets: ['es2015']
					}
				},
				{
		            test: [/\.scss$/,/\.css$/],
		            use:  [MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }]
	        	}
        ]
      },

    devtool: 'source-map',

	plugins: [
	//new CleanWebpackPlugin(pathsToClean),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: BUILD_DIR+'/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ],


  mode : devMode ? 'development' : 'production'
};

module.exports = config;


