<template>
<div>
<Row>
  <Col>
    <ModelItem iconfont="BSE 商业服务专家" font="Business Service Expert"></ModelItem>
  </Col>
</Row>
<Row>
    <Col span='6'>
      <ModelItem iconfont="MM 物料仓储" font="Materials Management" modelName="createMaterial"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="SD 分销销售" font="Sales and Distribution"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="AM 固定资产" font="Asset Management"></ModelItem>
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
      <ModelItem iconfont="FW 业务流程" font="Work Flow"></ModelItem>
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
      <ModelItem iconfont="SCP 云销售" font="Sales Cloud Platform"></ModelItem>
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
  data () {
    return {
      
    }
  },
  methods:{
    goModel(item){
      this.router.push({path:mainMenuConfig[item].path});
    }
  }
}
</script>