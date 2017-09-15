'use strict';

module.exports = app => {
    class UserController extends app.Controller {
      * getOpenId() {
          const query = this.ctx.query;
            // 调用 Service 进行业务处理
            const result = yield this.ctx.curl('https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=19920109', {
              // 必须指定 method
              method: 'POST',
              // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
              contentType: 'json',
              data: {
                appid: 'wxed4cc36fb4f0b1a4',
                secret: 'e3b486b6b03acdf5aae5820a8482ba89',
                js_code:query.code,
                grant_type:'19920109'
              },
              // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
              dataType: 'json',
            });
            this.ctx.body = result.data;
        }
    }
    return UserController;
};
