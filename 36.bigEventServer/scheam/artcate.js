const { string } = require('joi')
const joi = require('joi')//定义验证规则的模块

const name = joi.string().max(50).required()
const alias = joi.string().max(50).alphanum().required()

// 添加图书列表验证规则
exports.add_cate_schema = {
    body: {
        name,
        alias,
    }
}

//根据id删除图书分类和获取图书分类验证规则
const id = joi.number().integer().min(1).required()
exports.delete_cate_shema = {
    params: {
        id
    }
}
//根据id修改图书分类
exports.update_cate_shema = {
    body: {
        id,
        name,
        alias,
    },

}

//添加文章数据验证
const title = joi.string().required()
const cate_id = joi.number().integer().min(1).required()
const content = joi.string().required().allow('')//必填项允许为空字符串
const state = joi.string().valid('已发布', '草稿').required()//必填项和法值是已发布和草稿

exports.add_article_schema = {
    body: {
        title,
        cate_id,
        content,
        state,
    }
}
