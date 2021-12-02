const express = require('express')
const router = express.Router()

// 导入文章相关处理函数路由
const artcate_handler = require('../router_handler/artate')
const expressJWT = require('@escook/express-joi')//数据验证包
const { add_cate_schema, delete_cate_shema, update_cate_shema } = require('../scheam/artcate')

// 获取文章分类列表路由
router.get('/cates', artcate_handler.getArticleCates)

// 添加文章分类列表
router.post('/addcates', expressJWT(add_cate_schema), artcate_handler.AddArticleCates)

// 根据id删除图书分类
router.get('/deletecate/:id', expressJWT(delete_cate_shema), artcate_handler.deleteCateById)

//根据id获取图书分类
router.get('/cates/:id', expressJWT(delete_cate_shema), artcate_handler.getArticleById)

//根据id更新文章分类
router.post('/updatecate/', expressJWT(update_cate_shema), artcate_handler.updateCateById)

module.exports = router//向外共享路由