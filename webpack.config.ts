import path from 'path'
import webpack from 'webpack'

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/optionsConfig";

export const paths: BuildPaths = {
	entry: path.resolve(__dirname, 'src', 'index'),
	build: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
	mode: 'development',
	paths,
	isDev
})

export default config;