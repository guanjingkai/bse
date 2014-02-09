module.exports = app => {
    class Voucher extends app.Service {
        * find(voucherId) {
            const voucher = yield this.app.mysql.query(`select * from ma_voucher where voucher_id = ${voucherId}`);
            return voucher;
        }
        * selectAll(){
            const voucherList = yield this.app.mysql.select('ma_voucher');
            return voucherList;
        }
    }
    return Voucher;
};
