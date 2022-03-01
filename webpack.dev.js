const path = require("path");
const common = require("./webpack.common");
const {merge} = require('webpack-merge');

module.exports = merge(common, {
    mode : "development",
    output : {
        filename : 'main.js',
        path : path.resolve(__dirname, "dist"),
    },
    devServer : {
        static: {
            directory: path.join(__dirname, "public")
          },
      
          compress: true,
          port: 3010, // default 8000
    }
});