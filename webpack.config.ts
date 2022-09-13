import path from 'path'
import webpack from 'webpack'

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnvVar, BuildPaths} from "./config/build/types/optionsConfig";


export default (env: BuildEnvVar) => {
	const mode = env.mode || 'development';
	const port = env.port || 3000;
	const isDev = mode === 'development';

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html')
	}

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port
	})

	return config
}

