<template>
  <div style="width:100%;height:100%;">
    <Row style="width:100%;height:40px;">    
      <Col span=6 style="margin-right:10px;">
        <al-cascader v-model="resArr" level="3"/>
      </Col>
      <Button type="primary">定位</Button>
    </Row>
    <Row style="width:100%;height:calc(100% - 80px);">
      <div id="mymap" style="width:100%;height:100%;"></div>
    </Row>
    <Row style="width:100%;height:40px;padding-top:10px;">
      <Input v-model="value" disabled placeholder="蜂窝ID:F1013" style="width: 100px"></Input>
      <Input v-model="value" placeholder="蜂窝名称" style="width: 150px"></Input>
      <Input v-model="value" disabled placeholder="覆盖点位:131" style="width: 100px"></Input>
      <Select v-model="model8" placeholder="发货仓库" style="width:100px" placement="top">       
            <Option value="海淀仓">中关村仓</Option>
            <Option value="朝阳仓">朝阳仓</Option>
      </Select>
      <Select v-model="model7" placeholder="承运商" style="width:100px" placement="top">
        <OptionGroup label="落地配">
            <Option value="宅急送">宅急送</Option>
            <Option value="达达">达达</Option>
        </OptionGroup>
        <OptionGroup label="平台">
            <Option value="云鸟">云鸟</Option>
            <Option value="58速运">58速运</Option>
            <Option value="自营">自营</Option>
        </OptionGroup>
      </Select>
      <Button type="primary">保存</Button>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  components: {
   
  },
  mounted() {
    var map = new BMap.Map('mymap');
    var poi = new BMap.Point(116.307852,40.043319);
    map.centerAndZoom(poi, 15);
    map.enableScrollWheelZoom();  
    var overlays = [];
	  var overlaycomplete = function(e){
        overlays.push(e.overlay);
        console.log(overlays);
    };
    var styleOptions = {
        strokeColor:"green",    //边线颜色。
        fillColor:"green",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.6,	   //边线透明度，取值范围0 - 1。
        fillOpacity: 0.3,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
    }
    //实例化鼠标绘制工具
    var drawingManager = new BMapLib.DrawingManager(map, {
        isOpen: false, //是否开启绘制模式
        enableDrawingTool: true, //是否显示工具栏
        drawingToolOptions: {
            anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
            offset: new BMap.Size(5, 5), //偏离值
        },
        circleOptions: styleOptions, //圆的样式
        polylineOptions: styleOptions, //线的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
    });  
	 //添加鼠标绘制工具监听事件，用于获取绘制结果
    drawingManager.addEventListener('overlaycomplete', overlaycomplete);
    function clearAll() {
		for(var i = 0; i < overlays.length; i++){
            map.removeOverlay(overlays[i]);
        }
        overlays.length = 0   
    }
    var MAX = 500;
    var markers = [];
    var pt = null;
    var i = 0;
    for (; i < MAX; i++) {
      pt = new BMap.Point(Math.random() * 0.1 + 116.25, Math.random() * 0.1 + 40.0);
      markers.push(new BMap.Marker(pt));
    }
    //最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
    var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
    var polygon = new BMap.Polygon([
      new BMap.Point(116.274327,40.044328),
      new BMap.Point(116.278639,40.044881),
      new BMap.Point(116.27792,40.047808),
      new BMap.Point(116.292868,40.049851),
      new BMap.Point(116.293587,40.046758),
      new BMap.Point(116.303504,40.048471),
      new BMap.Point(116.308247,40.050514),
      new BMap.Point(116.314787,40.052337),
      new BMap.Point(116.317877,40.047587),
      new BMap.Point(116.321542,40.043113),
      new BMap.Point(116.32801,40.036319),
      new BMap.Point(116.319746,40.035214),
      new BMap.Point(116.320033,40.03212),
      new BMap.Point(116.307888,40.031236),
      new BMap.Point(116.304798,40.04013),
      new BMap.Point(116.294306,40.04013),
      new BMap.Point(116.288413,40.04002),
      new BMap.Point(116.283526,40.039412),
      new BMap.Point(116.279789,40.038473),
      new BMap.Point(116.274327,40.044328)
    ], {strokeColor:"blue",fillColor:"blue", strokeWeight:3, strokeOpacity:0.5,fillOpacity:0.3});
    map.addOverlay(polygon); 
  },
  methods: {
    
    testFunction(){
      this.openPage('home1','sdifk1');
      alert(123)
    }
  }
}
</script>
