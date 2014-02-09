<template>
  <div>
    <Row style="height:40px;">
      <Checkbox v-model="range" @on-change="setRange">&nbsp</Checkbox>
      最低消费满
      <InputNumber :disabled="rangeShow" :max="1000000" :min="1" v-model="value1"></InputNumber>
      元可用
    </Row>
    <Row style="height:40px;">
      <Checkbox v-model="consumption"  @on-change="setConsumption">&nbsp</Checkbox>
      适用范围（至少填写一项）
    </Row>
    <Row type="flex"  style="height:40px;">
      <Col style="width: 34px;">
        
      </Col>
      <Col style="width: 70px;">
        适用商品
      </Col>
      <Col>
        <Input v-model="value" :disabled="consumptionShow" placeholder="请输入..." style="width: 300px"></Input>
      </Col>
    </Row>
    <Row type="flex" style="height:40px;">
    <Col style="width: 34px;">
        
      </Col>
      <Col style="width: 70px;">
        不适用商品
      </Col>
      <Col>
        <Input v-model="value" :disabled="consumptionShow" placeholder="请输入..." style="width: 300px"></Input>
      </Col>
    </Row>
    <Row type="flex" style="height:40px;">
    <Col style="width: 60px;">
      优惠共享
      </Col>
      <Col>
      <Select v-model="model6" style="width:200px">
        <Option value="beijing">不与其它优惠共享</Option>
        <Option value="shanghai">与其他优惠共享</Option>
      </Select>
       </Col>
    </Row>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            rangeShow:true,
            consumptionShow:true,
            range:false,
            consumption:false
          }
      },
    methods:{
      setRange(state){
          if(state == 1){
            this.rangeShow = false;
          }else{
            this.rangeShow = true;
          }
      },
      setConsumption(state){
          if(state == 1){
            this.consumptionShow = false;
          }else{
            this.consumptionShow = true;
          }
      }
    }
  }
</script>
<style>
  .available-time-box{
    margin-bottom: 8px;
  }
</style>
