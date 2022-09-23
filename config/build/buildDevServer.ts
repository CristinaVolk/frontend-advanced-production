import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/optionsConfig';

type buildDevServerTypeType = (options: BuildOptions) => DevServerConfiguration;

export const buildDevServer: buildDevServerTypeType = (options) => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
