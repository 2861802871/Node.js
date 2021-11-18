// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器实例绑定request监听客户端请求
server.on('request', function (req, res) {
    console.log('ok');
    console.log('Someone visit our web server.');
})
// 启动服务器
server.listen(8080, function () {
    // 服务器运行在http://127.0.0.1:80  ,端口号80可以省略
    console.log('sever running at http://127.0.0.1:8080');
})