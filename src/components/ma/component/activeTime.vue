<template>
  <Row>
    <RadioGroup v-model="active_type" @on-change="setActiveState">
      <Row style="margin-bottom: 8px;">
        <Radio label="0">
          <span>固定日期</span>
        </Radio>
        <DatePicker :disabled="state_0" :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-start" placeholder="选择日期" style="width: 200px"></DatePicker>
      </Row>
      <Row>
        <Radio label="1">
          <span>自领取后</span>
        </Radio>
        <Select :disabled="state_1"  v-model="active_time_start" size="large" style="width:100px">
          <Option :value="0" :key="0">当天</Option>
          <Option v-for="item in days" :value="item" :key="item">{{ item }}天</Option>
        </Select>
        <span>生效，有效天数</span>
        <Select :disabled="state_1"  v-model="active_time_end" size="large" style="width:100px">
          <Option v-for="item in days" :value="item" :key="item">{{ item }}天</Option>
        </Select>
      </Row>
    </RadioGroup>
  </Row>
</template>
<script>
  export default{
      data(){
          return{
            days:[],
            active_type:'',
            active_time_start:'',
            active_time_end:'',
            state_0:false,
            state_1:false
          }
      },
    mounted:function () {
      this.setDays();
    },
    methods:{
      setDays(){
          for(var i = 1 ; i<91; i++){
              this.days.push(i);
          }
      },
      setActiveState(state){
          if(state == 0){
            this.state_0=false;
            this.state_1=true;
          }else{
            this.state_0=true;
            this.state_1=false;
          }
      }
    }
  }
</script>
<style>

</style>
