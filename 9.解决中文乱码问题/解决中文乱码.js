const http = require('http')

const server = http.createServer()

// req请求对象
server.on('request', (req, res) => {
    const url = req.url
    const method = req.method
    const str = `您请求的 url 地址是 ${url},您请求的 method 类型是 ${method}`
    console.log(str);
    // 解决中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 调用res.end()方法响应一些信息
    res.end(str)
})

server.listen(82, () => {
    console.log('sever running at http://127.0.0.1:82');
})