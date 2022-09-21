import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin  from "mini-css-extract-plugin";
import webpack from "webpack";

import {BuildOptions} from "./types/optionsConfig";


type buildPluginsType = ({ paths, isDev }: BuildOptions) => webpack.WebpackPluginInstance[];

export const buildPlugins: buildPluginsType = ({paths, isDev}) => {
	return [
		new HtmlWebpackPlugin({
				template: paths.html
			}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev)
		})
	]
}