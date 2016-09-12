const webpack = require("webpack")

const env = process.env.NODE_ENV
const config = {
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loaders: ["babel-loader"],
				test: /\.js$/
			}
		]
	},
	output: {
		library: "JkeJavaScriptUtils",
		libraryTarget: "umd"
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(env)
		})
	]
}

if (env === "production") {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				warnings: false
			}
		})
	)
}

module.exports = config
