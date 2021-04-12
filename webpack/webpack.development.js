const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');
const publicPath = '/';

module.exports = () => {
	const port = 9999;
	const { ENV_VARIABLE = `A value from process.env` } = process.env;

	return merge(common, {
		devtool: 'inline-cheap-source-map',
		mode: 'development',
		output: {
			path: path.join(__dirname, publicPath),
			publicPath,
			filename: '[name].js'
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendor',
						chunks: 'all'
					}
				}
			}
		},
		devServer: {
			publicPath,
			hot: true,
			inline: true,
			historyApiFallback: {
				disableDotRule: true,
				index: `${publicPath}index.html`
			},
			port
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
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: loader => [
									require('postcss-import')({
										root: loader.resourcePath
									}),
									require('postcss-preset-env')({
										stage: 3
									}),
									require('autoprefixer')(),
									require('cssnano')({
										autoprefixer: false
									}),
									require('postcss-flexbugs-fixes')(),
									require('postcss-nesting')()
								]
							}
						}
					]
				}
			]
		},
		resolve: {
			alias: {
				'react-dom': '@hot-loader/react-dom'
			}
		},
		plugins: [
			new webpack.LoaderOptionsPlugin({ options: {} }),
			new CaseSensitivePathsPlugin(),
			new MiniCssExtractPlugin({
				filename: '[name].css'
			}),
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				filename: path.resolve(__dirname, `.${publicPath}index.html`),
				ENV_VARIABLE
			}),
			new webpack.NamedModulesPlugin(),
			new webpack.optimize.ModuleConcatenationPlugin()
		]
	});
};
