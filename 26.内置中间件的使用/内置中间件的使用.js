const express = require('express')
const app = express()
// 内置中间件静态托管
// app.use(express.static(__dirname))

// 内置中间件express.json()解析JSON格式的数据
app.use(express.json())

// 内置中间件express.urlencoded解析urlencoded格式的数据
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.post('/book', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})