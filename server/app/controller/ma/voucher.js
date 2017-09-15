'use strict';

module.exports = app => {
    class VoucherController extends app.Controller {
      * getVoucher() {
            // 调用 Service 进行业务处理
            const res = yield this.service.ma.voucher.find(1);
            this.ctx.body = res;
        }
        * getSellerVoucherList(){
          const res = yield this.service.ma.voucher.selectAll(1);
          this.ctx.set('Access-Control-Allow-Origin', '*');
          this.ctx.body = app.restData(res);
        }
    }
    return VoucherController;
};
