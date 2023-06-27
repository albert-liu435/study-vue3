//使用ES6的默认导入语法
import express from "express";

//1、使用默认导入语法，导入路由对象
import userRouter from "./router/user_router.js";

const app = express();

//2、挂载用户路由模块
app.use("/api", userRouter);

const port = 80;

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
