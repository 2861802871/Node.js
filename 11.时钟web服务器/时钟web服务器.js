const fs = require('fs')
const path = require('path')
const http = require('http')


const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url//获取客户端提供的地址
    // const fpath = path.join(__dirname, url)//将其映射为本地文件路径
    // 路径优化处理
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }

    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) {
            return res.end('404 Not found')
        }
        const content = dataStr
        // 浏览器拿到HTML文件后发现HTML文件中还需要请求两个额外的资源，于是接着在link部分请求css,和在Script部分请求js文件
        res.end(content)
    })
})

server.listen(84, () => {
    console.log('server running at http://127.0.0.1:84');
})