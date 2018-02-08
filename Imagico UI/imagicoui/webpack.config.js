var webpack = require("webpack");
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
entry: SRC_DIR + "/index.js",
output: {
	path: DIST_DIR ,
	filename:"bundle.js",
    publicPath: '/'
	},
    devtool : 'inline-source-map',
    devServer: {
        contentBase: './public'
  },
module: {
	loaders:[
		{
			test: /\.js?/,
			include:SRC_DIR,
			loader:"babel-loader",
			query:{
				presets:["react", "es2015", "stage-2"]
			}
		},
          
        { 	test: /\.css?/,
			loaders: [
				"style-loader",
				"css-loader"
			]
		},
        {
            test: /\.(jpg|g|png|gif|svg)$/,
            loader: "file-loader"
        },
        {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader']
		},
        {
			test: /\.html$/,
			loader: "html"
        }

	]
}

}

module.exports = config