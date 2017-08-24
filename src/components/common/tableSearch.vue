<template>
  <Row type="flex" class-name="table-search">
    <Col class-name="table-col"><Input v-model="value" placeholder="请输入..." style="width: 150px"></Input></Col>
    <Col class-name="table-col"><Date-picker type="daterange" :options="options2" placeholder="选择日期和时间" style="width: 150px"></Date-picker></Col>
    <Col class-name="table-col">
    <Select v-model="model1" style="width:150px">
      <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
    </Select>
    </Col>
  </Row>
</template>
<style>

</style>
<script>
  export default {
    data () {
      return {
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        model1: '',
        options2: {
          shortcuts: [
            {
              text: '最近一周',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              }
            },
            {
              text: '最近一个月',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
              }
            },
            {
              text: '最近三个月',
              value () {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
              }
            }
          ]
        }
      }
    }
  }
</script>