const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".jsx", ".ts", ".js", ".scss"],
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
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
  ],
  mode: "development",
  devServer: {
    static: path.join(__dirname, "public/"),
    port: 3000,
    hot: true,
    compress: true,
  },
  devtool: "cheap-source-map",
};
