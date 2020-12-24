/***** webpack.config.js *****/
module.exports = {
  /* ... */
  devServer: {
    inline: true,
    port: 3000,
    contentBase: __dirname + "/public/",
    historyApiFallback: true,
  },
  /* ... */
};
