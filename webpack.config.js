const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    "./src/index.js",
    "./src/home/index.js",
    "./src/register/index.js",
    "./src/contact/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
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
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          outputPath: "fonts/",
        },
      },
    ],
  },
};
