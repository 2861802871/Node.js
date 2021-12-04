const express = require('express')//服务器
const app = express()//创建服务器
// const joi = require('@hapi/joi')
const joi = require('joi')//


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

// 托管静态资源文件
app.use('/uploads', express.static('./uploads'))

// 配置全局中间件
const expressJWT = require('express-jwt')
const config = require('./config')
const { UnauthorizedError } = require('express-jwt')
// api开头不需要验证
app.use(expressJWT({ secret: config.jwtSECretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))

const userRouter = require('./router/user')//导入用户路由模块
app.use('/api', userRouter)//将用户路由模块注册为全局中间件

// 放在解析token后面，解析完成后挂载user到req后才能调用req.user.id
const userinfoRouter = require('./router/usrerinfo')//导入用户信息路由
app.use('/my', userinfoRouter)//修改户信息路由注册为全局中间件

// 导入获取文章分类列表路由并注册为全局中间件
const artCateRouter = require('./router/artate')
app.use('/my/artate', artCateRouter)

// 导入发布文章列表路由并注册为全局中间件
const articleRouter = require('./router/article')
app.use('/my/article', articleRouter)

// 定义错误级别中间件
app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) {//判断错误是否为joi的实例对象，是否为验证失败导致的错误
        return res.cc('Err:' + err)
    }
    // 捕获身份验证失败的错误
    if (err.name === 'UnauthorizedError') { return res.cc('身份验证失败！' + err) }
    res.send(err)//不是表单验证错误返回其他的错误
})

app.listen(3007, () => {//监听服务器请求
    console.log('Express server running at http://127.0.0.1:3007');
})