const express = require('express')//导入express
const router = express.Router()//创建路由对象
// 挂载路由
router.get('/user/list', (req, res) => {
    res.send('Get user list')
})

router.post('/user/add', (req, res) => {
    res.send('Add new user')
})

module.exports = router