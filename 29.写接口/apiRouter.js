const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
    // 获取客户端的数据
    const query = req.query
    console.log('get');
    // 返回客户端数据
    res.send({
        status: 0,
        msg: 'GET请求成功！',
        data: query
    })
})

router.post('/post', (req, res) => {
    // 获取客户端的数据
    const body = req.body
    console.log('post');
    // 返回客户端数据
    res.send({
        status: 0,
        msg: 'POST请求成功！',
        data: body
    })
})

router.delete('/delete', (req, res) => {
    // 获取客户端的数据
    const body = req.body
    console.log('delete');
    // 返回客户端数据
    res.send({
        status: 0,
        msg: 'DELETE请求成功！',
        data: body
    })
})
module.exports = router