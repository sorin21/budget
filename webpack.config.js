const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const textWebpackPlugin = new ExtractTextPlugin({
  filename: 'styles.css',
  allChunks: true,
  // disable: process.env.NODE_ENV !== 'production'
});

module.exports = (env) => {
  console.log("mode", env);
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  localIdentName: "[name]__[local]___[hash:base64:5]"
                }
              },
              "postcss-loader"
            ]
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                // options: {
                //   modules: true,
                //   sourceMap: true,
                //   importLoaders: 2,
                //   localIdentName: "[name]__[local]___[hash:base64:5]"
                // }
              },
              "sass-loader"
            ]
          })
        }
      ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    },
    plugins: [htmlPlugin, textWebpackPlugin]
  };
}


// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.join(__dirname, "public"),
//     filename: "bundle.js"
//   },
//   module: {
//     rules: [
//       {
//         loader: "babel-loader",
//         test: /\.js$/,
//         exclude: /node_modules/
//       },
//       {
//         test: /\.s?css$/,
//         use: ["style-loader", "css-loader", "sass-loader"]
//       }
//     ]
//   },
//   devtool: "cheap-module-eval-source-map",
//   devServer: {
//     contentBase: path.join(__dirname, "public"),
//     historyApiFallback: true
//   }
// };