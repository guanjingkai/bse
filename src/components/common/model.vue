<template>
<Row>
    <div class="model" @click="goModel()">
      <div class="iconfont">{{iconfont}}</div>
      <div class="font">{{font}}</div>
    </div>
</Row>
</template>
<style>
.model{
  margin: 0px 10px 40px 10px;
}
.iconfont{
  height: 80px;
  width: 100%;
  line-height: 80px;
  text-align: center;
  font-size: 26px;

}
.model .font{
  height: 20px;
  width: 100%;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
}
</style>

<script>
import mainMenuConfig from '../../config/main_menu.js'
export default {
  name: 'main',
  props:{
    iconfont: {
      type: String
    },
    font: {
      type: String
    },
    modelName: {
      type: String,
    }
  },
  data () {
    return {
      
    }
  },
  methods:{
    goModel(){
      this.openPage(mainMenuConfig[this.$props.modelName].title,mainMenuConfig[this.$props.modelName].key,mainMenuConfig[this.$props.modelName].path);
    }
  }
}
</script>