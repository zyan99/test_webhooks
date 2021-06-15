module.exports = {
  path: "/demo/test-webhooks",
  async handle(ctx, next) {
    // 拿到请求输入
    let params = ctx.request.body;
    const data = {
      testResult: "成功",
    };

    // 业务逻辑处理
    console.log(new Date().toLocaleString(), "Body: ", params);
    console.log(new Date().toLocaleString(), "Response: ", data);

    // 返回前端数据
    ctx.body = { res: "SUCCESS", data, code: 200 };
  },
};
