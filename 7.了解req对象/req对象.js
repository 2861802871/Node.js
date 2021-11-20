const http = require('http')

const server = http.createServer()

// req请求对象
server.on('request', (req) => {
    const url = req.url
    const method = req.method
    const str = `Your request url is ${url},and method is ${method}`
    console.log(str);
})

server.listen(80, () => {
    console.log('sever running at http://127.0.0.1');
})