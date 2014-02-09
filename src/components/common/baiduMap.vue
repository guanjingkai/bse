<template>
<div id="allmap" class="baidu-map"></div>
</template>
<script>
export default {
data() {
  return {
    cid:'map-'+Math.floor(Math.random () * 10000 + 1)
}
},
  props: ['componentKey'],
  methods: {

},
mounted() {
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(116.404, 39.915);
  map.centerAndZoom(point, 15);
}
}
</script>
<style>
.baidu-map{
  height: 200px;
  width: 100%;
}
</style>
