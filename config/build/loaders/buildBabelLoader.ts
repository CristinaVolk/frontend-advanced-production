import { BuildOptions } from '../types/optionsConfig';
import babelRemovePropsPlugin from '../../customPlugin/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }:BuildBabelLoaderProps) => {
  const isProd = !isDev;
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isTsx && isProd && [
            babelRemovePropsPlugin,
            {
              props: ['data-testid'],
            },
          ],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
    exclude: /node_modules/,
  };
};
