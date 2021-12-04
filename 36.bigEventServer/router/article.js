const express = require('express')
const router = express.Router()

const expressJWT = require('@escook/express-joi')//使用验证规则的包

article_handler = require('../router_handler/article')//路由处理函数

const { add_article_schema } = require('../scheam/artcate')//导入自定义验证规则

//配置moulter解析formdata格式数据
const multer = require('multer')
const path = require('path')//处理路径的核心模块
const { post } = require('./user')
const upload = multer({ dest: path.join(__dirname, '../uploads') })//dest属性配置将文件存放到哪的路径

// upload.single('保存的文件名')方法会将文件数据解析并关在到，req.file,文本数据挂载到req.body
router.post('/add', upload.single('cover_img'), expressJWT(add_article_schema), article_handler.addArticle)//article_handler.addArticle

//获取文章列表
router.get('/get', article_handler.getArticle)

module.exports = router//向外共享路由