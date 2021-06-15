const Koa = require("koa");
const koaBody = require("koa-body");
const static = require("koa-static");
const path = require('path');

// 引入router创建好的
let router = require("./router.js");

const app = new Koa();

// 解析post请求体
app.use(koaBody());

// 设置跨域 用不用插件都可
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  return next();
});

// 路由挂载
app.use(router.routes());

// 静态文件处理
app.use(static(path.join(__dirname)));

// 监听3001端口
app.listen(3001, () => {
  console.log("server run on http://127.0.0.1:3001");
});
