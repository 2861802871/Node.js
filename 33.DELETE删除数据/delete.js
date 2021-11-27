const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'xiaobing@123',
    database: 'my_db_01'
})

//推荐根据id删除;删除id为3的用户（真正删除数据无法恢复）
const sqlStr = 'delete from users where id=?'

db.query(sqlStr, 3, (err, results) => {
    if (err) { console.log(err.message); }
    if (results.affectedRows === 1) { console.log('删除成功！'); }
})

//标记删除,status为1时表示该用户已删除(不是真正的删除数据，可恢复标记)
const sqlStr1 = 'update users set status=? where id=?'
db.query(sqlStr1, [1, 2], (err, results) => {
    if (err) { console.log(err.message); }
    if (results.affectedRows === 1) {
        console.log('标记删除成功！');
    }
})