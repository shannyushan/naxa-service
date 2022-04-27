const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "/src/index.js",
  resolve: {
    extensions: [".jsx", ".ts", ".js"],
  },
  module: {
    rules: [
      { test: /\.(png|jpg|jpeg|svg)$/, use: [
        {
          options: {
            name: "[name].[ext]",
            outputPath: "img/",
            publicPath:"img/"
          },
          loader: "file-loader"
        }
      ] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,

        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};
