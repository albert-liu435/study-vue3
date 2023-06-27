import fs from "fs";

//1、方法的名称为getFile
//2、方法接收一个形参fpath,表示要读取文件的路径
function getFile(fpath) {
  //3、方法的返回值为Promise的实例对象
  return new Promise(function (resolve, reject) {
    //4、下面这行代码，表示一个具体的、读文件的异步操作
    fs.readFile(fpath, "utf8", (err, dataStr) => {
      //如果读取失败，则调用"失败的回调函数"
      if (err) return reject(err);
      //如果读取成功，则调用"成功的回调函数"
      resolve(dataStr);
    });
  });
}

getFile("./files/1.txt")
  .then((r1) => {
    console.log(r1);
  })
  .catch((err) => console.log(err.message));
