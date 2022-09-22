import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/optionsConfig";

type buildLoadersType = (options: BuildOptions) => webpack.RuleSetRule[];


export const buildLoaders: buildLoadersType = (options) => {
	const {isDev} = options;

	const svgLoader = {
		test: /\.svg?$/,
		use: ['@svgr/webpack'],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader'
			}
		]
	}

	const cssLoader = {
		test: /\.(sc|sa|c)ss$/,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath:string) => Boolean(resPath.includes('.module.')),
						// auto: /.module./gm,
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]'
					},
				}
			},
			"sass-loader"
		]
	}

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				"plugins": [
					[
						"i18next-extract",
						{
							locales: ['ru', 'en']
						}
					]
				]
			}
		},
		exclude: /node_modules/,
	}

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		tsLoader,
		cssLoader,
	]
}