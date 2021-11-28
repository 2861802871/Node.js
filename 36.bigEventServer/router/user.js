const express = require('express')
const router = express.Router()//创建路由模块

const userHandler = require('../router_handler/user')//注册用户和登录处理函数

const expressJoi = require('@escook/express-joi')//使用定义的验证规则的包
const { reg_login_schema } = require('../scheam/user')//导入定义的验证规则

/*------------------注册新用户------------------*/
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)

/*------------------用户登录------------------*/
router.post('/login', expressJoi(reg_login_schema), userHandler.login)//(地址，验证合法性，处理函数)

/*------------------共享路由------------------*/
module.exports = router

