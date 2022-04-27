const {merge} = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production",
  devtool:false,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000,
    },
    
  },
  plugins:[
    new CleanWebpackPlugin(),
  ]
});
