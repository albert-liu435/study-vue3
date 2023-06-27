import mysql from "mysql2";

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  database: "db",
  user: "root",
  password: "root",
});

//默认导出一个支持Promise API的pool
export default pool.promise();
