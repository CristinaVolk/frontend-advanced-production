import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';

import { BuildPaths } from '../build/types/optionsConfig';
import { buildCSSLoader } from '../build/buildCSSLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    entry: '',
    dist: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.modules?.push('.ts', '.tsx');

  const plugins = config.plugins as webpack.WebpackPluginInstance[];

  plugins.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify(''),
  }));

  config.plugins = plugins;

  const rules = config!.module!.rules as RuleSetRule[];

  config.module!.rules = rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.resolve!.modules = [
    path.resolve(__dirname, '..', '..', 'src'),
    'node_modules',
  ];

  config.module!.rules.push(buildCSSLoader(true));
  config.module!.rules.push({
    test: /\.svg?$/,
    use: ['@svgr/webpack'],
  });

  return config;
};
