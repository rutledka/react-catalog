var port = process.env.PORT || 3000;

module.exports = {
  entry: './app/main.js',
  output: {
    path: './BUILD/',
    filename: "js/main.compiled.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './BUILD/',
    port: port
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  }
};
