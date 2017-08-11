<template>
  <Menu active-name="1-2" width="auto" :open-names="['index','platformSetting','brandManage','financialManage','userManage']"  @on-select="createTab">
    <Submenu name="index">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        主控台
      </template>
      <Menu-item name="index">首页</Menu-item>
    </Submenu>
    <Submenu name="platformSetting">
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        平台设置
      </template>
      <Menu-item name="basicSetting">基础设置</Menu-item>
      <Menu-item name="ndustrySetting">行业设置</Menu-item>
      <Menu-item name="commoditySetting">商品分类</Menu-item>
      <Menu-item name="propertySetting">属性设置</Menu-item>
      <Menu-item name="notificationSetting">通知模板</Menu-item>
    </Submenu>
    <Submenu name="brandManage">
      <template slot="title">
        <Icon type="ios-analytics"></Icon>
        品牌管理
      </template>
      <Menu-item name="brandList">品牌列表</Menu-item>
      <Menu-item name="brandUnaudited">待审核品牌</Menu-item>
    </Submenu>
    <Submenu name="financialManage">
      <template slot="title">
        <Icon type="ios-analytics"></Icon>
        财务管理
      </template>
      <Menu-item name="settlement">结算中心</Menu-item>
      <Menu-item name="9-4">异常订单</Menu-item>
      <Menu-item name="9-5">支付设置</Menu-item>
    </Submenu>
    <Submenu name="userManage">
      <template slot="title">
        <Icon type="ios-analytics"></Icon>
        用户管理
      </template>
      <Menu-item name="userList">用户列表</Menu-item>
      <Menu-item name="userGroup">用户组</Menu-item>
      <Menu-item name="role">角色</Menu-item>
      <Menu-item name="power">节点</Menu-item>
    </Submenu>
  </Menu>
</template>
<style>

</style>
<script>
    export default {
      data () {
            return {
                theme2: 'light'
            }
      },
      methods:{
        getMenu(){

        },
        createTab(name){
          const _self = this;
          console.log(_self.$store.state.model.menu[name].path);
          this.router.push({ path: _self.$store.state.model.menu[name].path })
        }
      }
    }
</script>
