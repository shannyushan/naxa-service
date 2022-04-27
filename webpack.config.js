const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = true;
module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".jsx", ".ts", ".js", ".scss"],
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
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
  ],
  mode: "development",
  devServer: {
    static: path.join(__dirname, "public/"),
    port: 3000,
    hot: true,
    compress: true,
  },
  //   devtool: "inline-source-map",
  devtool: "cheap-source-map",
};
