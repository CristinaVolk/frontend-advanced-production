import {BuildOptions} from "./types/optionsConfig";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';


type buildDevServerTypeType = (options: BuildOptions) => DevServerConfiguration;

export const buildDevServer: buildDevServerTypeType = (options) => {
	return {
		port: options.port,
		open: true
	};
}
