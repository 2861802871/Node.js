// 导入express
const express = require('express')
//创建服务器
const app = express()
// 监听GET请求
// url请求地址，req氢气对象（请求相关的属性和方法），res响应对象（包含了与响应相关的属性和方法）
app.get('/user', function (req, res) {
    res.send({ name: 'zs', age: '123' })
})
// 监听POST请求
app.post('/user', function (req, res) {
    res.send("post请求")
})

// 获取url携带的查询参数
app.get('/', function (req, res) {
    // 获取url中携带的参数
    const data = req.query
    console.log(data);
    res.send(data)
})
// 获取url中的动态参数：后面的参数
app.get('/:id/:name', (req, res) => {
    const data1 = req.params
    console.log(data1);
    res.send(data1)
})
//启动服务器
app.listen(80, () => {
    console.log('express running at http://127.0.0.1');
})