const express = require('express')
const app = express()
const mv1 = (req, res, next) => {
    req.data1 = '多个局部生效的中间件'
    console.log('局部生效的中间件1');
    next()
}
const mv2 = (req, res, next) => {
    console.log('局部生效的中间件2');
    next()
}
app.get('/', mv1, mv2, (req, res) => {
    console.log(req.data1);
    res.send(req.data1)
})
app.get('/user', (req, res) => {
    console.log('user page');
    res.send('user page')
})
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})