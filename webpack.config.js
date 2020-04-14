const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/scroll.js',
  output: {
    path: path.resolve('lib'),
    filename: 'scroll.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  // alias: {
  //   react: path.resolve('./node_modules/react')
  // }
  externals: {
    'react': 'commonjs react' 
  }
};
