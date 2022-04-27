const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development",
  devServer: {
    static: path.join(__dirname, "public/"),
    port: 3000,
    hot: true,
    compress: true,
  },
//   devtool: "inline-source-map",
  devtool:"cheap-source-map",
});
