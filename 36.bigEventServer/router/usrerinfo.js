// 用户中心接口
const express = require('express')
const { updata_userinfor } = require('../scheam/user')//导入定义的验证规则
const router = express.Router()//用户信息router

const expressJoi = require('@escook/express-joi')//使用定义的验证规则的包

const serinfo_handler = require('../router_handler/userinfo')

// 获取用户登录信息的路由
router.get('/userinfo', serinfo_handler.getUserinfo)

//修改(更新)用户信息的路由
router.post('/userinfo', expressJoi(updata_userinfor), serinfo_handler.updataUserinfo)

//修改密码


module.exports = router//向外共享路由