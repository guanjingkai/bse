<template>
<div>
<Row>
    <Col span='6'>
      <ModelItem iconfont="MM" font="物料管理"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="SD" font="分销管理"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="AM" font="资产管理"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="CRM" font="客户管理"></ModelItem>
    </Col>
</Row>
<Row>
    <Col span='6'>
      <ModelItem iconfont="FICO" font="财务管理"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="FW" font="工作流"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="DSP" font="客户管理"></ModelItem>
    </Col>
    <Col span='6'>
      <ModelItem iconfont="BASIC" font="基础设置"></ModelItem>
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
  }
}
</script>