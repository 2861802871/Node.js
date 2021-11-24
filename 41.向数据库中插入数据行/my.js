const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// 插入数据
const user = { username: 'dahuang', password: '123456' }
const sqlStr = 'insert into users (username,password) values(?,?)'//?表示占位符，等待填充
// 用数组的形式填充？占位符
db.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) { return err.message }
    if (results.affectedRows === 1) { console.log('插入成功！'); }

})
// 快捷插入数据
const user1 = { username: 'xiaohei', password: '123456' }
const sqlStr1 = 'insert into users set ?'
db.query(sqlStr1, user1, (err, results) => {
    if (err) {
        return console.log(err.message)
    }
    if (results.affectedRows === 1) { console.log('插入成功！'); }
})
// 查询数据
db.query('select * from users', (err, results) => {
    if (err) { return console.log(err.message); }
    console.log(results);
})