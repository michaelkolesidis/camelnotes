module.exports = {
  output: {
    filename: "[name].pack.js",
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "babel-preset-react"],
          },
        },
        exclude: /node_modules/,
        test: /\.js$/,
        use: ["file-loader"],
      },
    ],
  },
  entry: {
    index: "./src/index.js",
  },
  devServer: {
    open: true,
    hot: true,
    port: 9000,
    // Enable compression
    compress: true,
    // Enable hot reloading
    hot: true,
    port: 9000,
    // Public path is root of content base
    publicPath: "/",
  },
};
