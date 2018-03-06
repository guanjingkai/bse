<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <Row type="flex">
        <i-col class-name="main-left" style="overflow:hidden">
          <div class="layout-logo" @click="backMain()">
            <!--<img src="static/images/logo2.png">-->
            <span class="bse-title">豹便利管理系统</span>
          </div>
        </i-col>
        <i-col class-name="header-center">
          <div class="layout-nav">
            <!-- <Menu-item name="1">
              <Icon type="ios-keypad"></Icon>
              WMS仓储管理
            </Menu-item>
            <Menu-item name="2">
              <Icon type="ios-navigate"></Icon>
              TMS物流配送
            </Menu-item>
            <Menu-item name="3">
              <Icon type="arrow-graph-up-right"></Icon>
              FI&CO财务利润
            </Menu-item>
            <Menu-item name="4">
              <Icon type="ios-analytics"></Icon>
              MM物料管理
            </Menu-item>
            <Menu-item name="5">
                <Icon type="ios-paper"></Icon>
                OMS订单管理
            </Menu-item>
            <Menu-item name="6">
                <Icon type="pull-request"></Icon>
                SCM供应链管理
            </Menu-item> -->
          </div>
        </i-col>
        <i-col class-name="header-right">

          <div class="user-info" style="margin-top:2px">
            <!--<Icon type="ios-telephone-outline"></Icon>
            <Icon type="ios-bell-outline"></Icon>
            <Icon type="ios-help-outline"></Icon>-->
            <Badge count="1">
              <Avatar icon="ios-telephone-outline" />
            </Badge>
            <Badge count="19">
              <Avatar icon="ios-bell-outline" />
            </Badge>
            <Badge>
              <Avatar icon="ios-help-outline" />
            </Badge>
          </div>
          <div class="user-info">
            <span class="user-name">
              雷丘
            </span>
          </div>
          <Avatar class="user-avatar" src="https://cn.vuejs.org/images/logo.png" />
        </i-col>
      </Row>
    </Menu>
    <Menu mode="horizontal">
      <Row type="flex" class-name="main-tab">
        <i-col class-name="main-left" style="height:60px;padding-right:10px;">
          <Input size="large" style="margin-top:10px;">
          <Select v-model="shortcutAction" slot="prepend" style="width: 70px">
            <Option value="command">命令码</Option>
            <Option value="search">搜索</Option>
          </Select>
          <Button type="info" slot="append" icon="arrow-right-c"></Button>
          </Input>
        </i-col>
        <i-col span="19">
          <div class="layout-assistant">
            <li :class="tab.pageId == thisPage.id ? 'ivu-menu-item ivu-menu-item-active ivu-menu-item-selected':'ivu-menu-item' " v-for="tab in tabInfo"
              @click="clickTab(tab.pageId)">
              <!--<Icon type="ios-paper"></Icon>-->
              {{tab.title}}
            </li>
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
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
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
    data() {
      return {
        thisPage: this.$store.state.tab.thisPage,
        tabInfo: this.$store.state.tab.openComponentsList,
        shortcutAction: "command"
      }
    },
    components: {
      'sidebar': Hello
    },
    mounted: function () {
      this.init();
      console.log(this.$route);
    },
    methods: {
      aaa() {
        //console.log(TabPage);
      },
      init() {
        const _self = this;
        this.$store.state.client.browser = navigator.appCodeName;
        this.$store.state.client.version = navigator.appVersion;
        this.$store.state.client.cookieEnabled = navigator.cookieEnabled;
        this.$store.state.client.platform = navigator.platform;
        this.$store.state.client.ua = navigator.userAgent;
        this.$store.state.client.language = navigator.language;
        this.$store.state.client.width = document.documentElement.clientWidth;
        this.$store.state.client.height = document.documentElement.clientHeight;
        document.getElementsByTagName('body')[0].style.height = this.$store.state.client.height + 'px';
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        document.getElementById('layout-main').style.height = (this.$store.state.client.height - 150) + 'px';
        window.onresize = function () {
          _self.$store.state.client.width = document.documentElement.clientWidth;
          _self.$store.state.client.height = document.documentElement.clientHeight;
          document.getElementsByTagName('body')[0].style.height = _self.$store.state.client.height + 'px';
          document.getElementById('layout-main').style.height = (_self.$store.state.client.height - 150) + 'px';
        };
        console.log()
        console.log()
      },
      clickTab(item) {
        if (item == null || item == '') {
          item = this.$route.path;
        }
        this.openPage(this.tabInfo[item].title, this.tabInfo[item].key, this.tabInfo[item].pageId);
      },
      backMain() {
        this.router.push({ path: "/" });
      }
    }
  }
</script>

<style>
  ::-webkit-scrollbar-track-piece {
    background-color: #fff;
    -webkit-border-radius: 0;
  }

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #999;
    -webkit-border-radius: 0px;
    outline: 0px solid #fff;
    outline-offset: -0px;
    border: 0px solid #fff;
  }

  ::-webkit-scrollbar-thumb:hover {
    height: 50px;
    background-color: #9f9f9f;
    -webkit-border-radius: 4px;
  }

  .bse-title {
    color: #fff;
    font-size: 18px;
  }

  .layout {
    background: #f5f7f9;
  }

  .layout-logo {
    width: 180px;
    margin-top: 0px;
    margin-left: 30px;
    height: 60px;
    float: left;
    position: relative;
  }

  .layout-logo img {
    height: 48px;
    margin-top: 6px;
    display: inline-block;
    float: left;
  }

  .layout-nav {
    width: auto;
    margin: 0;
  }

  .layout-assistant {
    width: 100%;
    margin: 0;
    height: inherit;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .main-left {
    width: 200px;
    height: 100%;
    overflow-y: auto;
  }

  .header-right {
    width: 300px;
  }

  .header-center {
    width: calc(100% - 500px);
    height: 100%;
  }

  .user-info {
    width: auto;
    height: 60px;
    line-height: 60px;
    color: #ffffff;
    float: right;
    margin-right: 16px;
  }

  .user-name {
    display: inline;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
  }

  .user-name .ivu-icon {
    font-size: 14px;
  }

  .header-right .user-avatar {
    margin: 13px;
    float: right;
    background: none;
  }

  .header-right .ivu-badge {
    margin: 4px;
    top: -4px;
  }

  .header-right .ivu-avatar {
    float: right;
    background: none;
  }

  .user-info i {
    font-size: 26px;
  }

  .main-right {
    width: calc(100% - 200px);
    height: 100%;
    overflow-y: auto;
  }

  .main-tab {
    margin: 0 15px;
  }

  .layout-content-main {
    height: 100%;
  }
</style>