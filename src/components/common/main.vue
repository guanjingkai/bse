<template>
<div>
<Row>
  <Col>
    <ModelItem iconfont="豹便利管理系统" font="Business Service Expert"></ModelItem>
  </Col>
</Row>
<Row>
    <Col span='6'>
      <ModelItem iconfont="MM 物料管理" font="Materials Management" modelName="mmcreateMaterial"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="WMS 仓储管理" font="Warehouse Management"  modelName="wmsSetList"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="OMS 订单管理" font="Order Management"></ModelItem>
    </Col>

    <Col span='6'>
      <ModelItem iconfont="SCM 供应链管理" font="Supply Chain Management"></ModelItem>
    </Col>
</Row>
<Row>
    <Col span='6'>
      <ModelItem iconfont="SD 分销销售" font="Sales and Distribution"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="MA 营销活动" font="marketing activity"  modelName="maVoucherList"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="TMS 运输配送" font="Transport Management"  modelName="tmsFileCarrier"></ModelItem>
    </Col>

    <Col span='6'>
      <ModelItem iconfont="PP 生产计划" font="Production Planning"></ModelItem>
    </Col>
</Row>
<Row>
    <Col span='6'>
      <ModelItem iconfont="FI&CO 财务利润" font="Finance&Controlling"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="AM 固定资产" font="Asset Management"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="HR 人力资源" font="Human Resource"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="CRM 客户会员" font="Customer Relationship Management"></ModelItem>
    </Col>
</Row>
<Row>
    <Col span='6'>
      <ModelItem iconfont="FW&TD 流程调度" font="Work Flow&Task Dispatch"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="APS 数据分析" font="Analytic Platform Service"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="API 系统对接" font="Application Programming Interface"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="BASIC 基础设置" font="Company Basic Date Set"></ModelItem>
    </Col>
</Row>
</div>
</template>

<script>
import ModelItem from './model'
export default {
  name: 'main',
  components:{
    'ModelItem':ModelItem
  },
  mounted: function () {
    //this.openPage("承运商档案","tmsFileCarrier","/tms/file_carrier");
  },
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>