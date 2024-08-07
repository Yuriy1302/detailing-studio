const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 3000,
        watchFiles: ['src/**/*.html'],
    }
};

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  ...devServer(develop),
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
          filename: './styles/bundle.css'
      })
  ],
  module: {
      rules: [
          {
              test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
              type: 'asset/resource'
          },
          {
              test: /\.html$/i,
              loader: 'html-loader'
          },
          {
              test: /\.css$/i,
              use: [
                MiniCssExtractPlugin.loader, 'css-loader'
              ]
          },
          {
              test: /\.scss$/i,
              use: [
                MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
              ]
          },
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
      ]
  },

  resolve: {
    extensions: ['.js']
  }
});
