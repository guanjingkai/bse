<template>
  <Tabs value="name0" :animated="false">
    <Tab-pane label="初始化" name="name0">
      <CommonForm :model="createMaterialInit"></CommonForm>
    </Tab-pane>
    <Tab-pane label="基本数据" name="name1">
      <CommonForm :model="createMaterialBasic"></CommonForm>
    </Tab-pane>
    <Tab-pane label="分类" name="name2">分类</Tab-pane>
    <Tab-pane label="销售/分销" name="name3">销售/分销</Tab-pane>
    <Tab-pane label="采购" name="name4">
      <CommonForm :model="createMaterialPurchase"></CommonForm>
    </Tab-pane>
    <Tab-pane label="需求计划" name="name5">需求计划</Tab-pane>
    <Tab-pane label="存储数据" name="name6">
       <CommonForm :model="createMaterialPlant"></CommonForm>
    </Tab-pane>
    <Tab-pane label="预测数据" name="name7">预测数据</Tab-pane>
    <Tab-pane label="会计财务" name="name8">
      <Tabs type="card">
        <TabPane label="本期数据">
          <CommonForm :model="createMaterialPlant"></CommonForm>
        </TabPane>
        <TabPane label="1709期">标签二的内容</TabPane>
        <TabPane label="1708期">标签三的内容</TabPane>
    </Tabs>
    </Tab-pane>
  </Tabs>
</template>
<script>
  import Form from '../common/form'
  import createMaterialInit from './mapper/createMaterial_init'
  import createMaterialBasic from './mapper/createMaterial_basic'
  import createMaterialPlant from './mapper/createMaterial_plant'
  import createMaterialPurchase from './mapper/createMaterial_purchase'
  export default {
    data(){
      return{
        createMaterialInit:createMaterialInit,
        createMaterialBasic:createMaterialBasic,
        createMaterialPlant:createMaterialPlant,
        createMaterialPurchase:createMaterialPurchase
      }
    },
    components:{
      "CommonForm":Form
    }
  }
</script>
