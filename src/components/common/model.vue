<template>
<Row>
    <div class="model">
      <div>{{iconfont}}</div>
      <div>物料管理</div>
    </div>
</Row>
</template>

<script>
export default {
  name: 'main',
  props:{
    iconfont: {
                type: String
    },
    font: {
                type: String
    }
  },
  data () {
    return {
      iconfont:this.$props.iconfont,
      font:this.$props.font
    }
  }
}
</script>