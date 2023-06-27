//使用原生Ajax向一个url发送请求
//接口地址：http://api.apiopen.top/getJoke

const p = new Promise((resolve, reject) => {
  //1.创建对象
  const xhr = new XMLHttpRequest();
  //2.初始化
  xhr.open("GET", "http://api.apiopen.top/getJoke");
  //3.发送
  xhr.send();
  //4.绑定事件，处理响应结果
  xhr.onreadystatechange = function () {
    //判断
    if (xhr.readyState === 4) {
      //判断响应状态码 200-299 成功
      if (xhr.status >= 200 && xhr.state < 300) {
        //表示成功
        resolve(xhr.response);
      } else {
        //失败
        reject(xhr.status);
      }
    }
  };
});
//指定回调，将回调单拎出来
p.then(
  function (value) {
    console.log(value);
  },
  function (reason) {
    console.error(reason);
  }
);
