const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => ({
	mode: env.MODE,
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js",
		clean: true,
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx)$/,
				use: "babel-loader",
			},
			{
				test: /\.css$/,
				use: [{ loader: "style-loader" }, { loader: "css-loader" }],
			},
			{ test: /\.svg$/, type: "asset/resource" },
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			minify: true,
		}),
	],
	optimization: {
		minimize: true,
	},
	devServer: {
		historyApiFallback: {
			disableDotRule: true,
		},
	},
});
