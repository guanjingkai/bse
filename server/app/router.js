'use strict';

module.exports = app => {
    app.get('/ma/voucher/:voucherId', app.controller.ma.voucher.getVoucher);
    app.get('/ma/voucher/seller/:sellerId', app.controller.ma.voucher.getSellerVoucherList);
    app.get('/crm/user/login/wxxcx', app.controller.crm.user.getOpenId);
};
