const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
     entry : "./src/index.js",
     plugins : [new HtmlWebpackPlugin({
         template : "./src/template.html"
     }), new CopyPlugin({
         patterns: [
            {from: "./src/public", to:  path.resolve(__dirname, "dist/public")}
         ]
     })],
     module:{
         rules: [
            {
                test: /\.s[ac]ss$/i,
                use : ["style-loader" ,"css-loader", "sass-loader"]
            }
         ]
    }
}