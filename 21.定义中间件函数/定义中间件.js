const express = require('express')

const app = express()

const mw = function (req, res, next) {//中间件函数
    console.log('这是一个简单地中间件函数');
    // res.send('这是一个简单地中间件函数')
    next()
}

// 将mv注册为全局生效的中间件任何请求都会触发
app.use(mw)

app.get('/', (req, res) => {
    res.send(req.url)
})

app.get('/user', (req, res) => {
    res.send(req.url)
})


app.listen(80, () => {
    console.log('express server running ar http://127.0.0.1');
})

