const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'xiaobing@123',
    database: 'my_db_01'
})
// 定义更新的数据
const user = { id: 1, username: 'xiaobing', password: '888888' }
// 定义sql语句
const sqlStr = 'update users set username =?,password =? WHERE id =?'
// 更新数据
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if (err) { return console.log(err.message); }
    if (results.affectedRows === 1) { console.log('更新成功！'); }
})

// 更新数据便捷方式
const user1 = { id: 2, username: 'xiaoai', password: '666666' }
const sqlStr1 = 'update users set ? where id=?'
db.query(sqlStr1, [user1, user1.id], (err, results) => {
    if (err) { console.log(err.message); }
    if (results.affectedRows === 1) { console.log('更新成功！'); }
})