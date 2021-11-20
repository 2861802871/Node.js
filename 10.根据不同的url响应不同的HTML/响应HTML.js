const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    // 获取url
    const url = req.url

    let content = '<h1>404 Not found<h1>'
    // 根据url响应不同HTML
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页<h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面<h1>'
    }
    // 防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 返回数据
    res.end(content)

})

server.listen(83, () => {
    console.log('server running at http://127.0.0.1:83');
})