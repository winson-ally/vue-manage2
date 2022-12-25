
module.exports = {
  outputDir: 'dist', // 输出目录，默认为 dist，可不配置
  publicPath: '', // 部署应用包时的基本 URL，配置为 '' 空字符串时，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径

  devServer: {
    open: true
  }
}
