var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");
const PORT = 4002;
const HOST = "127.0.0.1";
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
}).listen(PORT, HOST, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Listening - http://${HOST}:${PORT}`);
});
