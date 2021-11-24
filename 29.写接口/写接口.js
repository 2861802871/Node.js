const express = require('express')
const cors = require('cors')
const router = require('./apiRouter')
const app = express()

// 路由之前配置 urlencoded解析中间件
app.use(express.urlencoded({ extended: false }))
app.get('/api/jsonp', (req, res) => {
    // jsonp的具体实现过程
    // 得到函数名称
    const funName = req.query.callback
    // 要发送到客户端的数据
    const data = { name: '小黑', age: 1 }
    // 拼接函数的调用
    const scriptStr = `${funName}(${JSON.stringify(data)})`
    // 把拼接的字符串，响应给客户端
    console.log('JSONP');
    res.send(scriptStr)
})
// cors中间件解决跨域问题
app.use(cors())

app.use('/api', router)




app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})