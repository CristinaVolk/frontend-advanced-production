import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

type buildCSSLoaderType = (isDev:boolean) => webpack.RuleSetRule;

export const buildCSSLoader:buildCSSLoaderType = (isDev) => ({
  test: /\.(sc|sa|c)ss$/,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath:string) => Boolean(resPath.includes('.module.')),
          // auto: /.module./gm,
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:8]',
        },
      },
    },
    {
      loader: 'sass-loader',
    },
  ],
  exclude: /node_modules/,
});
