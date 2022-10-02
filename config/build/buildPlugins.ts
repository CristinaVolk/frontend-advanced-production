import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/optionsConfig';

type buildPluginsType = ({ paths, isDev }: BuildOptions) => webpack.WebpackPluginInstance[];

export const buildPlugins: buildPluginsType = ({ paths, isDev }) => [
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new webpack.ProgressPlugin(),
  !isDev && new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
  isDev && new webpack.HotModuleReplacementPlugin(),
  isDev && new ReactRefreshWebpackPlugin({
    overlay: false,
  }),
  isDev && new BundleAnalyzerPlugin(),
].filter(Boolean);
