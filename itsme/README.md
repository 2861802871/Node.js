##安装
```
npm install itsme
```

##导入
```js
const itsme =require('itsme)
```

##格式化时间：
```js
//调用dataFormat对时间进行格式化
const dt = new Date()
const newdate = itsme.dateFormat(dt)
console.log('格式化时间:' + newdate);
//结果：格式化时间:2021-11-20 18:29:50
```

##转义HTML
```js
//调用htmlEscape对HTML进行转义
const htmlStr = '<h1>测试</h1>'
const newStr1 = itsme.htmlEscape(htmlStr)
console.log('转义HTML:' + newStr1);
//结果：转义HTML:&lth1&gt测试&lt/h1&gt
```

##还原HTML
```js
//调用htmlUnEscape对HTML进行还原
const newStr2 = itsme.htmlUnEscape(newStr1)
console.log('还原HTML:' + newStr2);
//结果：还原HTML:<h1>测试</h1>
```

##开源协议
ISC