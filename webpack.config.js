const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
	entry: './src/react/index.js', // Entry point of your application
	output: {
		filename: 'index.bundle.js', // Output bundle file name
		path: path.resolve(__dirname, 'dist'), // Output directory
		publicPath: '/dist/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/react/index.html',
		}),
		new webpack.ProvidePlugin({
			React: 'react',
		}),
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react'],
					},
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'resources/[hash][ext][query]',
				},
			},
		],
	},
}
