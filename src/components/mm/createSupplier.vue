<template>
  <Tabs value="name0" :animated="false">
    <Tab-pane label="初始化" name="name0">
      <CommonForm :model="createSupplierInit"></CommonForm>
    </Tab-pane>
    <Tab-pane label="基本数据" name="name1">
      <CommonForm :model="createSupplierBasic"></CommonForm>
    </Tab-pane>
    <Tab-pane label="联系方式" name="name2">
      <CommonTable :model="createSupplierContact"></CommonTable>
    </Tab-pane>
    <Tab-pane label="采购数据" name="name3">预测数据</Tab-pane>
    <Tab-pane label="物料清单" name="name4">
      <CommonTable :model="createSupplierMaterial"></CommonTable>
    </Tab-pane>
    <Tab-pane label="采购记录" name="name5">采购记录</Tab-pane>
  </Tabs>
</template>
<script>
  import Form from '../common/form'
  import CommonTable from '../common/table'
  import createSupplierInit from './mapper/createSupplier_init'
  import createSupplierBasic from './mapper/createSupplier_basic'
  import createSupplierContact from './mapper/createSupplier_contact'
  import createSupplierMaterial from './mapper/createSupplier_material'
  export default {
    data(){
      return{
        createSupplierInit:createSupplierInit,
        createSupplierBasic:createSupplierBasic,
        createSupplierContact:createSupplierContact,
        createSupplierMaterial:createSupplierMaterial
      }
    },
    components:{
      "CommonForm":Form,
      "CommonTable":CommonTable
    }
  }
</script>