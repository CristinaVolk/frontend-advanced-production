import webpack from 'webpack';

import { BuildOptions } from './types/optionsConfig';
import { buildCSSLoader } from './buildCSSLoaders';

type buildLoadersType = (options: BuildOptions) => webpack.RuleSetRule[];

export const buildLoaders: buildLoadersType = (options) => {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildCSSLoader(isDev);

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
            },
          ],
        ],
      },
    },
    exclude: /node_modules/,
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    cssLoader,
  ];
};
