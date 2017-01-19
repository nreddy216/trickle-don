var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: "./public/scripts/entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
