//用户信息系处理函数
const db = require('../db/index')
// 获取用户登录信息

exports.getUserinfo = (req, res) => {
    const sql = 'select id,username,nickname,email,user_pic from event_user where id=?'

    db.query(sql, req.user.id, (err, results) => {
        if (err) { return res.cc(err) }
        if (results.lenght < 1) { return res.cc('获取用户信息失败') }
        res.send({ status: 0, msg: '获取用户信息成功！', data: results[0] })
    })
}

//修改用户信息
exports.updataUserinfo = (req, res) => {

    // 在接口处验证
    const user = req.body
    // 验证通过后写入数据库
    const sql = 'update event_user set ? where id=?'
    db.query(sql, [user, user.id], (err, results) => {
        if (err) { return res.cc('错误：' + err) }
        if (results.affectedRows !== 1) { return res.cc('修改用户基本信息失败') }
        res.send({
            status: 0,
            msg: '修改用户基本信息成功！'
        })

    })

}

//修改密码
exports.updatepwd = (req, res) => {
    res.send('ok')
}