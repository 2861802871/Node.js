const express = require('express')//服务器
const app = express()//创建服务器
// const joi = require('@hapi/joi')
const joi = require('joi')


const cors = require('cors')//跨域请求
app.use(cors())

app.use(express.urlencoded({ extended: false }))//解析表单数据中间件X-www...

app.use((req, res, next) => {//处理异常返回数据
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


// 定义错误级别中间件
app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) {//判断错误是否为joi的实例对象，是否为验证失败导致的错误
        return res.cc(err)
    }
    res.cc(err)//不是表单验证错误返回其他的错误
})

app.listen(3007, () => {//监听服务器请求
    console.log('Express server running at 127.0.0.1:3007');
})