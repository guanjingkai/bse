<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  mounted:function () {
    this.init();
  },
  methods:{
    init(){
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
      document.getElementById('layout-main').style.height = (this.$store.state.client.height - 150) + 'px';
      window.onresize=function(){
        _self.$store.state.client.width = document.documentElement.clientWidth;
        _self.$store.state.client.height = document.documentElement.clientHeight;
        document.getElementsByTagName('body')[0].style.height = _self.$store.state.client.height + 'px';
        document.getElementById('layout-main').style.height = (_self.$store.state.client.height - 150) + 'px';
      };
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
