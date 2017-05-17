import { join } from 'path';

const include = join(__dirname, 'src');

const config = {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'reduxCamel',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/, include }
    ]
  }
};

export default config;
