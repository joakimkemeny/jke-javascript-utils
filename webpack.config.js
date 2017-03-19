/* eslint-env node */
const webpack = require("webpack")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

const env = process.env.NODE_ENV
const config = {
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.js$/,
				use: { loader: "babel-loader" }
			}
		]
	},
	output: {
		library: "JkeJavaScriptUtils",
		libraryTarget: "umd"
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(env)
		})
	]
}

if (env === "production") {
	config.plugins.push(new UglifyJSPlugin())
}

module.exports = config
