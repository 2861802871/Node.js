// 用户中心接口
const express = require('express')
const { updata_userinfor, update_pwd, update_avatar } = require('../scheam/user')//导入定义的验证规则
const router = express.Router()//用户信息router

const expressJoi = require('@escook/express-joi')//使用定义的验证规则的包

const userinfo_handler = require('../router_handler/userinfo')

// 获取用户登录信息的路由
router.get('/userinfo', userinfo_handler.getUserinfo)

//修改(更新)用户信息的路由
router.post('/userinfo', expressJoi(updata_userinfor), userinfo_handler.updataUserinfo)

//修改密码路由
router.post('/updatepwd', expressJoi(update_pwd), userinfo_handler.updatepwd)

//更换头像
router.post('/update/avatar', expressJoi(update_avatar), userinfo_handler.updateAvatar)

module.exports = router//向外共享路由 