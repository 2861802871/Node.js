const express = require('express')
const mybodyporser = require('./bodyparser')
const app = express()

app.use(mybodyporser)

app.post('/book', (req, res) => {
    // console.log(123);
    console.log(req.body);
    res.send(req.body)
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})