const path = require("path");

module.exports = {
  entry: "./lib/renderers/dom.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "lib"), path.resolve("node_modules")]
  }
};
