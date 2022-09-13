import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

import {BuildOptions} from "./types/optionsConfig";


type buildPluginsType = ({ paths }: BuildOptions) => webpack.WebpackPluginInstance[];

export const buildPlugins: buildPluginsType = ({paths}) => {
	return [
		new HtmlWebpackPlugin({
				template: paths.html
			}),
		new webpack.ProgressPlugin()
	]
}