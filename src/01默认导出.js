//定义模块私有成员n1
let n1 = 10;
//定义模块私有成员n2,(外界访问不到n2,因为没有被共享出去)
let n2 = 20;
//定义模块私有方法 show
function show() {}

//默认导出的语法： export default 默认导出的成员,向外共享n1和show两个成员
export default {
  n1,
  show,
};

//每个模块中，只允许使用唯一的一次 export default，否则会报错！
