<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <Row type="flex">
        <i-col class-name="main-left" style="overflow:hidden">
          <div class="layout-logo">
            <img src="static/images/logo.png">
          </div>
        </i-col>;
        <i-col span="19">
          <div class="layout-nav">
            <Menu-item name="1">
              <Icon type="ios-navigate"></Icon>
              MM物料仓储
            </Menu-item>
            <Menu-item name="2">
              <Icon type="ios-keypad"></Icon>
              APS数据分析
            </Menu-item>
            <Menu-item name="3">
              <Icon type="arrow-graph-up-right"></Icon>
              FI&CO财务利润
            </Menu-item>
            <Menu-item name="4">
              <Icon type="ios-analytics"></Icon>
              FW流程管理
            </Menu-item>
            <Menu-item name="5">
              <Icon type="ios-paper"></Icon>
              MA营销活动
            </Menu-item>
          </div>
        </i-col>
      </Row>
    </Menu>
    <Menu mode="horizontal">
      <Row type="flex" class-name="main-tab">
        <i-col class-name="main-left" style="height:60px;padding-right:10px;">
          <Input size="large" style="margin-top:10px;">
          <Select v-model="select3" slot="prepend" style="width: 70px">
            <Option value="day">命令码</Option>
            <Option value="month">搜索</Option>
          </Select>
          <Button  type="info" slot="append" icon="arrow-right-c"></Button>
          </Input>
        </i-col>
        <i-col span="19">
          <div class="layout-assistant">
            <li :class="tab.pageId == thisPage.id ? 'ivu-menu-item ivu-menu-item-active ivu-menu-item-selected':'ivu-menu-item' " v-for="tab in tabInfo" @click="clickTab(tab.pageId)">
              <Icon type="ios-paper"></Icon>
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
      tabInfo: this.$store.state.tab.openComponentsList
    }
  },
  components: {
    'sidebar': Hello
  },
  mounted: function() {
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
      window.onresize = function() {
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
    }
  }
}
</script>

<style>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}

.layout-logo {
  width: 180px;
  margin-top: 4px;
  margin-left: 30px;
  height: 60px;
  float: left;
  position: relative;
}

.layout-logo img {
  height: 36px;
  margin-top: 8px;
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
  overflow-y: scroll;
}

.main-right {
  width: calc(100% - 200px);
  height: 100%;
  overflow-y: scroll;
}

.main-tab {
  margin: 0 15px;
}

.layout-content-main {
  height: 100%;
}
</style>
