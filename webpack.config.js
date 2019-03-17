const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: ENV,
  watchOptions: {
    poll: true,
  },
  stats: {
    colors: true,
  },
  entry: [
    './src/scripts/index.js',
    './src/styles/style.scss',
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              minimize: {
                safe: true,
              },
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../',
            },
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      },
    ],
  },
};
