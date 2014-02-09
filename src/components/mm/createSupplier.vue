<template>
<Row>
    <Row type="flex" style="margin:15px 0;">
      <Col style="width:200px;">
        <img width="120px" src="https://cn.vuejs.org/images/logo.png">
      </Col>
      <Col style="width:calc(100% - 200px)">
        <Row>
          <Col span="6">
            <span class="brand-title">供应商:来跑吧水吧</span>
          </Col>
          <Col span="6">
            <span class="brand-title">供应商编码:ABK1001</span>
          </Col>
          <Col span="6">
          <span class="brand-title">联系人：张三</span>
          </Col>
          <Col span="6">
          <span class="brand-title">联系电话:18888888888</span>
          </Col>
        </Row>
        <Row>
          <Col span="6">
          <span class="brand-title">主营类目:零售-便利</span>
          </Col>
          <Col span="6">
          <span class="brand-title">物料数量:15</span>
          </Col>
          <Col span="6">
          <span class="brand-title">合作方式:联营</span>
          </Col>
          <Col span="6">
          <span class="brand-title">采购组:华南采购组</span>
          </Col>
        </Row>
        <Row>
          <Col span="6">
          <span class="brand-title">最后供货时间:2017-05-11</span>
          </Col>
          <Col span="6">
          <span class="brand-title">状态:正常</span>
          </Col>
          <Col span="6">
          <span class="brand-title">所在地:黑龙江-哈尔滨</span>
          </Col>
          <Col span="6">
          <span class="brand-title">邮箱:leiq@gomate.com</span>
          </Col>
        </Row>
      </Col>
    </Row>
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
  </Row>
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
<style>
.brand-title{
  font-size:14px;
  display:block;
  height:40px;
  line-height:40px;
}
</style>