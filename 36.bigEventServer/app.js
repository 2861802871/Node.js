const express = require('express')//服务器
const app = express()//创建服务器

const cors = require('cors')//跨域请求
app.use(cors())

app.use(express.urlencoded({ extended: false }))//解析表单数据中间件X-www...

app.use((req, res, next) => {//处理异常反
    res.cc = (err, status = 1) => {
        res.send({
            status,
            // 判断是错误还是字符串
            msg: err instanceof Error ? err.message : err
        })
    }
    next()
})

const userRouter = require('./router/user')//导入用户路由模块
app.use('/api', userRouter)//将户路由模块注册为全局中间件

app.listen(3007, () => {//监听服务器请求
    console.log('Express server running at 127.0.0.1:3007');
})