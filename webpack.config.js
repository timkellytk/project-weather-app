const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
		],
	},
};