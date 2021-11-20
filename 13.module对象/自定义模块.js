const username = '张三'

module.exports = {
    username: "zs",
    method: function () {
        console.log('1.hello' + username);
    }
}
//最终以module.exports为准
exports.name = '小黄'
module.exports = {
    nickname: '小黑',
    age: '1',
    weight: '20kg'
}


