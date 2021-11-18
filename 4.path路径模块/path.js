// 导入路径模块
const path = require('path')
// 拼接路径片段 ../将会抵消上一层路径
const path1 = path.join('/a/a/s', '../', '/ewe/fwfwe/fef/w')
console.log(path1);

// 获取路径中的文件名包含后缀名,得到出1.txt
const name0 = path.basename('a/s/df/1.txt')
console.log(name0);

// 获取路径中的文件名不包含后缀名,得到出1
const name1 = path.basename('a/s/df/1.txt', '.txt')
console.log(name1);

// 获取路径中文件扩展名
const path2 = path.extname('a/s/ad/ads/1.txt')
console.log(path2);