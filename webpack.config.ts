import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnvVar, BuildPaths } from './config/build/types/optionsConfig';

export default (env: BuildEnvVar) => {
  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';
  const apiURL = env.apiURL || 'http://localhost:8000';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiURL,
  });

  return config;
};
