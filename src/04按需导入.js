import info, { s1, s2 as str2, say } from "./03按需导出.js";

console.log(s1);
console.log(str2);
console.log(say);

console.log(info);

// 5.2 按需导出与按需导入的注意事项
// ① 每个模块中可以使用多次按需导出
// ② 按需导入的成员名称必须和按需导出的名称保持一致
// ③ 按需导入时，可以使用 as 关键字进行重命名
// ④ 按需导入可以和默认导入一起使用
