module.exports = {
	entry: {
		app: './src/js/index.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
			},
			{
				parser: {
					amd: false
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	node: {
		fs: 'empty'
	}
};
