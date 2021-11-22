const express = require('express')
const router = require('./routing')//导入路由模块

const app = express()
// 注册路由模块
app.use('/api', router)

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})