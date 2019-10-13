const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use
// webpack.config.js config file as a bast.abs
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

// serve the files
app.listen(3000, function() {
  console.log("Candle is lit on 3000!\n");
});

// add a server script to package.json...
