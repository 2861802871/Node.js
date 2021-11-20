const http = require('http')

const server = http.createServer()

// req请求对象
server.on('request', (req, res) => {
    const url = req.url
    const method = req.method
    const str = `Your request url is ${url},and method is ${method}`
    console.log(str);
    // 调用res.end()方法响应一些信息
    res.end(str)
})

server.listen(81, () => {
    console.log('sever running at http://127.0.0.1:81');
})