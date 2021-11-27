const express = require('express')
const router = express.Router()//创建路由模块

const userHandler = require('../router_handler/user')

/*------------------注册新用户------------------*/
router.post('/reguser', userHandler.regUser)

/*------------------用户登录------------------*/
router.post('/login', userHandler.login)

/*------------------共享路由------------------*/
module.exports = router

