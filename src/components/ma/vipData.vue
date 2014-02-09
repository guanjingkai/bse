<template>
  <Tabs value="name0" :animated="false">
    <Tab-pane label="概览数据" name="name0">
      <VipDataOverview></VipDataOverview>
    </Tab-pane>
    <Tab-pane label="消费数据" name="name1">
    </Tab-pane>
    <Tab-pane label="退款数据" name="name2">分类</Tab-pane>
    <Tab-pane label="充值数据" name="name3">SD模块相关设置</Tab-pane>
    <Tab-pane label="积分数据" name="name4">
    </Tab-pane>
  </Tabs>
</template>
<script>
  import Form from '../common/form'
  import VipDataOverview from './component/vipDataOverview'
  export default {
    data(){
      return{
      }
    },
    components:{
      "CommonForm":Form,
      "VipDataOverview":VipDataOverview
    }
  }
</script>
