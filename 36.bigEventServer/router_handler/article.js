const db = require('../db/index')
const path = require('path')//路径处理核心模块
const { userInfo } = require('os')
// 新增文章处理函数
exports.addArticle = (req, res) => {
    // 文件数据验证通过后验证文件
    if (!req.file || req.file.fieldname !== 'cover_img') return res.cc('文章封面为必选参数')

    //文件验证通过后整理文章信息准备写入数据库
    const articleInfo = {
        ...req.body,//文本数据
        cover_img: path.join('/uploads', req.file.filename),//文件保存的路径
        pub_date: new Date(),
        author_id: req.user.id,
    }
    //数据信息整理完成写入数据库
    const sql = `insert into event_articles set ? `
    db.query(sql, articleInfo, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows < 1) return res.cc('发布文章失败！')
        res.cc('发布文章成功！', 0)
    })
}
//获取文章列表
exports.getArticle = (req, res) => {
    console.log('ok');

}