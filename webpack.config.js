const path = require('path')
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin')

module.exports = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlBundlerPlugin({
			entry: {
				home: 'src/home/home.html',
				register: './src/register/register.html',
				contact: './src/contact/contact.html',
				notfound: './src/404.html',
			},
			filename: '[name]/index.html',
			js: {
				// output filename for JS
				filename: '[name]/[name].js',
			},
			css: {
				// output filename for CSS
				filename: '[name]/[name].css',
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: ['css-loader'],
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
