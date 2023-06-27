//引入fs模块，这里需要先安装node才能引入fs模块
const fs = require("fs");
// import fs from "fs";

console.log(__dirname);
//Promise封装
const p = new Promise(function (resolve, reject) {
  fs.readFile(__dirname + "/1.txt", (err, data) => {
    //判断如果失败
    if (err) reject(err);
    //如果成功
    resolve(data);
  });
});

p.then(
  function (data) {
    console.log(data.toString()); //结果是buffer类型，使用toStringjin'xing
  },
  function (reason) {
    console.log("读取失败");
  }
);
