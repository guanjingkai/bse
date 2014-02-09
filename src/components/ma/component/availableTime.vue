<template>
  <div>
    <Row>
      <RadioGroup v-model="available_type" @on-change="setTimeState">
        <Radio label="0">
          <span>全部时间</span>
        </Radio>
        <Radio label="1">
          <span>部分时间</span>
        </Radio>
      </RadioGroup>
    </Row>
    <Row type="flex">
      <Col style="width: 40px;">
      日期
      </Col>
      <Col>
      <CheckboxGroup v-model="available_day">
        <Checkbox label="周一" :disabled="time_state"></Checkbox>
        <Checkbox label="周二" :disabled="time_state"></Checkbox>
        <Checkbox label="周三" :disabled="time_state"></Checkbox>
        <Checkbox label="周四" :disabled="time_state"></Checkbox>
        <Checkbox label="周五" :disabled="time_state"></Checkbox>
        <Checkbox label="周六" :disabled="time_state"></Checkbox>
        <Checkbox label="周天" :disabled="time_state"></Checkbox>
      </CheckboxGroup>
      </Col>

    </Row>
    <Row  type="flex">
      <Col style="width: 40px;">
        时段
      </Col>
      <Col>
        <div class="available-time-box" v-for="(item,index) in available_time">
          <TimePicker :value="item" @on-change="setAvailableTime($event,index)"  :disabled="time_state" confirm type="timerange" placement="bottom-start" format="HH:mm" placeholder="选择时间" style="width: 168px"></TimePicker>
          <Button type="text" @click="delAvailableTime(index)"  :disabled="time_state">删除</Button>
        </div>
      <Button v-if="available_time.length<5" :disabled="time_state" type="text" @click="addAvailableTime">+增加时间段</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            available_type:null,
            available_day:[],
            available_time:[],
            time_state:false
          }
      },
    methods:{
      addAvailableTime(){
          this.available_time.push('');
      },
      delAvailableTime(index){
        this.available_time.splice(index, 1);
      },
      setAvailableTime(event,index){
        this.available_time[index] = event;
      },
      setTimeState(state){
          if(state == 1){
            this.time_state = false;
          }else{
            this.time_state = true;
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
