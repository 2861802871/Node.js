const db = require('../db/index')

// 获取文章分类列表处理函数
exports.getArticleCates = (req, res) => {
    // 查询未被删除的数据，并按id从小到大排序
    const sql = `select * from event_article_cate where is_delete = 0 order by id asc`
    db.query(sql, (err, results) => {
        if (err) { return res.cc('Err:' + err) }
        res.send({ status: 0, data: results })
    })
}

// 添加文章分类
exports.AddArticleCates = (req, res) => {
    const sql = `select * from event_article_cate where name=? or alias=?`
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) { return res.cc(err) }
        if (results.length === 2) { return res.cc('分类名称与别名均已被占用') }
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) { return res.cc('分类名称与别名均已被占用') }
        if (results.length === 1 && results[0].name === req.body.name) { return res.cc('分类名称已存在，请换其他再试！') }
        if (results.length === 1 && results[0].alias === req.body.alias) { return res.cc('分类别名已存在，请换其他再试！') }

        // 检查通过分类名称和分类别名均没有被占用将信息写入数据库
        const sql = `insert into event_article_cate set ?`
        db.query(sql, req.body, (err, results) => {
            if (err) { return res.cc(err) }
            if (results.affectedRows !== 1) { return res.cc('服务器繁忙添加分类失败！请稍后再试！') }
            res.cc('添加图书分类成功！', 0)
        })
    })
}
// 根据id删除图书分类
exports.deleteCateById = (req, res) => {
    //验证通过在数据库中标记删除
    const sql = `update event_article_cate set is_delete =1 where id =?`
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('服务器繁忙，删除失败！')
        res.cc('删除成功！', 0)
    })
}

//根据id获取文章分类
exports.getArticleById = (req, res) => {
    // id合法性验证通过后
    // 查询文章分类
    const sql = `select * from event_article_cate where id=?`
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取文章分类数据失败！')
        res.send({ status: 0, msg: '获取文章分类成功！', data: results[0] })
    })
}
//根据id更新文章分类
exports.updateCateById = (req, res) => {
    // 查询数据库中名称和别名是否被占用
    const sql = `select * from event_article_cate where name =?||alias=?`
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        //查询名称和别名是否存在
        if (err) return res.cc(err)
        if (results.length === 2) return res.cc('名称和别名均已存在')
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('名称和别名均已存在')
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('名称已被占用')
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('别名已被占用')
        //修改数据库信息
        const sql = `update event_article_cate set ? where id= ?`
        db.query(sql, [req.body, req.body.id], (err, results) => {
            if (err) return res.cc(err)
            if (results.affectRows < 1) res.cc('服务器繁忙，修改失败！')
            res.cc('修改成功', 0)
        })
    })
}
