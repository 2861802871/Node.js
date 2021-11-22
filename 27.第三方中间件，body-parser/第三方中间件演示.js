const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
    // console.log(req.body);
    res.send(req.body)
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})