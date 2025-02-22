// filepath: /c:/Users/enzoa/OneDrive/Documents/Developpemnt/ThumbExt/ThumbExt/webpack.config.js
const webpack = require("webpack");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

module.exports = {
  mode: "production",
  // Entry point for application
  entry: "./public/js/script.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NEXT_PUBLIC_API_KEY": JSON.stringify(
        process.env.NEXT_PUBLIC_API_KEY
      ),
    }),
  ],
  resolve: {
    fallback: {
      process: require.resolve("process/browser"),
    },
  },
};
