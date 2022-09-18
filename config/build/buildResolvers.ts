import webpack from "webpack";
import {BuildOptions} from "./types/optionsConfig";


type buildResolversType = (options: BuildOptions) => webpack.ResolveOptions;

export const buildResolvers: buildResolversType = (options) =>{
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {}
	};
}
