import webpack from "webpack";

type buildLoadersType = () => webpack.RuleSetRule[];


export const buildLoaders: buildLoadersType = () => {
	const cssLoader = {
		test: /\.(sc|sa|c)ss$/,
		use: [
			// Creates `style` nodes from JS strings
			"style-loader",
			// Translates CSS into CommonJS
			"css-loader",
			// Compiles Sass to CSS
			"sass-loader"
		]
	}

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		tsLoader,
		cssLoader,
	]
}