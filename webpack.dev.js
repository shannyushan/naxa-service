const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist/"),
    port: 3000,
    hot: true,
    compress: true,
  },
//   devtool: "inline-source-map",
  devtool:"cheap-source-map",
});
