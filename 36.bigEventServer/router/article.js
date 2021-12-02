const express = require('express')
const router = express.Router()
const expressJWT = require('@escook/express-joi')
article_handler = require('../router_handler/article')

router.post('/add', (req, res) => {
    res.send('ok')
})//article_handler.addArticle

module.exports = router//向外共享路由