import webpack from "webpack";

import {BuildOptions} from "./types/optionsConfig";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";


export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
	const {mode, paths} = options;

	return {
		entry: paths.entry,
		mode: mode,
		output: {
			path: paths.dist,
			filename: "[name].[contenthash].js",
			clean: true
		},
		module: {
			rules: buildLoaders()
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(options),
		devtool: 'inline-source-map',
		devServer: buildDevServer(options)
 }
}