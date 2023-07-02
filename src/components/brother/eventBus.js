//兄弟组件之间实现数据共享的方案是 EventBus。可以借助于第三方的包 mitt 来创建 eventBus 对象，从而实
// 现兄弟组件之间的数据共享。

//导入mitt包
import mitt from "mitt";
//创建EventBus实例对象
const bus = mitt();
//将EventBus的实例对象共享出去
export default bus;
