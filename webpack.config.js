const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
	entry: {
		index: ['./src/index.js'],
		home: ['./src/home/home.js'],
		register: ['./src/register/register.js'],
		contact: ['./src/contact/contact.js'],
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: '[name]/[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Kharian Sports Fest',
			filename: './home/home.html',
			template: './src/home/home.html',
		}),
		new HtmlWebpackPlugin({
			title: 'Kharian Sports Fest',
			filename: './register/register.html',
			template: './src/register/register.html',
		}),
		new HtmlWebpackPlugin({
			title: 'Kharian Sports Fest',
			filename: './contact/contact.html',
			template: './src/contact/contact.html',
		}),
		new HtmlWebpackPlugin({
			title: 'Not Found',
			filename: './404.html',
			template: './src/404.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name]/[name].css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'resources/[hash][ext][query]',
				},
			},
		],
	},
}
