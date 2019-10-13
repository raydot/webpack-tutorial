const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    //filename: "main.js",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        // load css
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // load images
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: ["file-loader"]
      },
      {
        // load fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        // load csv
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        // load xml
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  }
};
