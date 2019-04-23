const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const common = require("./webpack.common");

module.exports = () => {
	return merge(common, {
		devtool: "source-map",
		mode: "production",
		output: {
			path: path.resolve(__dirname, "../dist/js"),
			filename: "[name].[chunkhash].js"
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendor",
						chunks: "all"
					}
				}
			},
			minimizer: [
				new TerserPlugin({
					cache: true,
					parallel: true,
				})
			]
		},
		stats: {
			errors: true,
			errorDetails: true
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								hmr: true,
								reloadAll: true
							}
						},
						"css-loader",
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: loader => [
								  require( 'postcss-import' )( {
									  root: loader.resourcePath,
								  } ),
								  require( 'postcss-preset-env' )( {
									  stage: 3,
								  } ),
								  require( 'autoprefixer' )(),
								  require( 'cssnano' )( {
									  autoprefixer: false
								  } ),
								  require( 'postcss-flexbugs-fixes' )(),
								  require('postcss-nesting')()
							  ],
							},
						},
					]
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new CaseSensitivePathsPlugin(),
			new webpack.optimize.OccurrenceOrderPlugin(),
			new HtmlWebpackPlugin({
				template: "./src/index.html",
				filename: "../index.html"
			}),
			new MiniCssExtractPlugin({
				filename: "../css/[name].[chunkhash].css"
			}),
			new CopyPlugin([
				{ from: 'src/public-assets', to: '../' }
			  ]),
			new webpack.LoaderOptionsPlugin({ options: {} }),
			new webpack.optimize.ModuleConcatenationPlugin()
		]
	});
};
