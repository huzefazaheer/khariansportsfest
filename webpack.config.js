const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Kharian Sports Fest",
      filename: "./home/index.html",
      template: "./src/home/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Kharian Sports Fest",
      filename: "./register/index.html",
      template: "./src/register/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Kharian Sports Fest",
      filename: "./contact/index.html",
      template: "./src/contact/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Not Found",
      filename: "./404.html",
      template: "./src/404.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ttf|otf)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[hash].[ext]",
            outputPath: "./fonts",
          },
        },
      },
    ],
  },
};
