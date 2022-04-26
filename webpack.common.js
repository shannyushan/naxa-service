const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".jsx", ".ts", ".js"],
  },
  module: {
    rules: [
      { test: /\.(png|jpg|jpeg|svg)$/, use: ["file-loader"] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // include: path.resolve(__dirname, "src"),

        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
