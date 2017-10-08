<template>
  <div class="voucher-page">
    <div class="voucher-title">
      星巴克拿铁咖啡兑换券
    </div>
    <div class="qrcode">
      <img src="static/images/vued-qrcode.png">
      <span class='qrcode-num'>1223 2415</span>
    </div>
    <div class="card-line">
      <div class="line-l"></div>
      <div class="line"></div>
      <div class="line-r"></div>
    </div>
    <div class="voucher-box">
      <div class='voucher-info'>
        <span class='voucher-info-title'>适用门店</span>
        <span class='voucher-info-value'>全国通用</span>
      </div>
      <div class='voucher-info'>
        <span class='voucher-info-title'>兑换限制</span>
        <span class='voucher-info-value'>每个用户限兑换1张</span>
      </div>
      <div class='voucher-info'>
        <span class='voucher-info-title'>有效期</span>
        <span class='voucher-info-value'>2017.09.06-2017.10.20</span>
      </div>
      <div class='voucher-info'>
        <span class='voucher-info-title'>可用时段</span>
        <span class='voucher-info-value'>周一至周日 全天</span>
      </div>
    </div>
    <div class="voucher-box">
      <div class='voucher-info'>
        <span class='voucher-info-title'>北京市朝阳区三里屯路19号</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style>
.voucher-page{
  width: 320px;
  padding: 20px;
  background: #ABCFFF;
}
  .voucher-title{
    width: 100%;
    height: 52px;
    line-height: 52px;
    font-size: 18px;
    text-align: center;
    background: #FFFFFF;
  }
.qrcode{
  width: 100%;
  height: 190px;
  background: #fff;
  text-align: center;
}
.qrcode img{
  height: 150px;
  width: 150px;
  margin: 0px auto;
}
.qrcode-num{
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: #777;
}
.card-line{
  height: 20px;
  background: #fff;
  display: flex;
}
.line-l{
  height: 20px;
  width: 20px;
  background: #ABCFFF;
  border-radius: 10px;
  margin-left: -10px;
}
.line{
  width: 100%;
  height: 10px;
  border-bottom: 1px dashed #ccc;
}
.line-r{
  height: 20px;
  width: 20px;
  background: #ABCFFF;
  border-radius: 10px;
  margin-right: -10px;
}
  .voucher-box{
    background: #ffffff;
    border-bottom:1px dashed #ccc;
    padding: 0px 16px;
  }
  .voucher-info{
    height: 32px;
    line-height: 32px;
    font-size: 14px;
  }
</style>
