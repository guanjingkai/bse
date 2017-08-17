<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <Row type="flex">
        <i-col class-name="main-left" style="overflow:hidden">
          <div class="layout-logo">
            <img src="/static/images/logo.png">
          </div>
        </i-col>;
        <i-col span="19">
          <div class="layout-nav">
            <Menu-item name="1">
              <Icon type="ios-navigate"></Icon>
              控制台
            </Menu-item>
            <Menu-item name="2">
              <Icon type="ios-keypad"></Icon>
              BI数据可视化
            </Menu-item>
            <Menu-item name="3">
              <Icon type="ios-analytics"></Icon>
              工作流
            </Menu-item>
            <Menu-item name="4">
              <Icon type="ios-paper"></Icon>
              运营中心
            </Menu-item>
          </div>
        </i-col>
      </Row>
    </Menu>
    <Menu mode="horizontal" active-name="1">
      <Row type="flex" class-name="main-tab">
        <i-col class-name="main-left" style="overflow:hidden">
          <div class="layout-logo"></div>
        </i-col>
        <i-col span="19">
          <div class="layout-assistant">
            <Menu-item name="1">
              <Icon type="ios-paper"></Icon>
              Tab-todo
            </Menu-item>
          </div>
        </i-col>
      </Row>
    </Menu>
    <div class="layout-content" id="layout-main" style="height: auto;">
      <Row type="flex" style="height: 100%">
        <i-col class-name="main-left">
          <sidebar></sidebar>
        </i-col>
        <i-col class-name="main-right">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
  import Hello from './sidebar';
  //import TabPage from './common/TabPage';
  export default {
    name: 'app',
    components: {
      'sidebar':Hello
    },
    methods:{
      aaa() {
        //console.log(TabPage);
      }
    }
  }
</script>

<style>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
  }
  .layout-logo{
    width: 180px;
    margin-top: 4px;
    margin-left:30px;
    height: 60px;
    float: left;
    position: relative;
  }
  .layout-logo img{
    height: 36px;
    margin-top: 8px;
    display: inline-block;
    float: left;
  }
  .layout-nav{
    width: auto;
    margin: 0;
  }
  .layout-assistant{
    width: 300px;
    margin: 0;
    height: inherit;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .main-left{
    width:200px;
    height: 100%;
    overflow-y: scroll;
  }
  .main-right{
    width: calc(100% - 200px);
    height: 100%;
    overflow-y: scroll;
  }
  .main-tab{
    margin:0 15px;
  }
  .layout-content-main{
    height: 100%;
  }
</style>
