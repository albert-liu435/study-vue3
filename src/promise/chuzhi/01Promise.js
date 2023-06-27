
//https://www.cnblogs.com/chuzhi/p/16969763.html

//函数有两个形参resolve和reject
const p = new Promise(function (resolve, reject) {
  //函数内部封装一个异步操作
  setTimeout(function () {
    //获取数据
    let data = "数据库中的用户数据";
    //得到数据后，可以调用 resolve 和 reject 函数来改变promise对象的状态
    //resolve
    resolve(data); //Promise对象状态改变：成功

    let err = "数据读取失败";
    reject(err); //Promise对象状态改变：失败
  }, 1000);
});

//调用promise对象的then方法
//then接收两个参数，俩参数都是函数类型的值
p.then(
  function (value) {
    //成功
    console.log(value);
  },
  function (reason) {
    //失败
    console.log(reason);
  }
);
