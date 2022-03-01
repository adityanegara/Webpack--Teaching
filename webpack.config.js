const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
     mode : "development",
     entry : "./src/index.js",
     output : {
         filename : "main.[contenthash].js",
         path : path.resolve(__dirname, "dist")
     },
     plugins : [
        new HtmlWebpackPlugin({
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