var port = process.env.PORT || 3000;

module.exports = {
  entry: './build/js/main.js',
  output: {
    path: './build/',
    filename: "js/main.compiled.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './build/',
    port: port
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
