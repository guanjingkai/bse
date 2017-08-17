<template>
  <Tabs value="name1">
    <Tab-pane label="基本数据" name="name1">
      <CommonForm model="createMaterialBasic"></CommonForm>
    </Tab-pane>
    <Tab-pane label="分类" name="name2">分类</Tab-pane>
    <Tab-pane label="销售/分销" name="name3">销售/分销</Tab-pane>
    <Tab-pane label="采购" name="name4">采购</Tab-pane>
    <Tab-pane label="需求计划" name="name5">需求计划</Tab-pane>
    <Tab-pane label="存储数据" name="name6">存储数据</Tab-pane>
    <Tab-pane label="预测数据" name="name7">预测数据</Tab-pane>
    <Tab-pane label="会计财务" name="name8">预测数据</Tab-pane>
  </Tabs>
</template>
<script>
  import Form from '../common/form.vue'
  export default {
    data(){
      return{

      }
    },
    components:{
      "CommonForm":Form
    }
  }
</script>
