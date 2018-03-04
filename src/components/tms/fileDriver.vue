<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig">
      <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateWave(true)">新建司机</Button>  
      </div>
    </CommonTable>
  </div>
</template>
<script>
import Table from '../common/table';
export default {
  data() {
    return {
      self: this,
      api: {
        url: "/tms/driver/list"
      },
      searchConfig:{
        orderId:{
          title:'司机ID',
          key:'orderId',
          type:'input',
          width:150,
          value:''
        },
        nameaaa:{
          title:'司机名称',
          key:'nameaaa',
          type:'input',
          width:150,
          value:''
        },
        payTools:{
          title:'承运商',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "北京采购组" }, { key: "ertong", value: "华南采购组" }, { key: "ertong1", value: "上海采购组" }],
          width:100,
          value:''
        }
      },
      tableData: [],
      tableColumns: [
        {
          title: '司机ID',
          key: 'driverId',
        }, {
          title: '司机名称',
          key: 'name',
        }, {
          title: '所属承运商',
          key: 'carrierName'
        }, {
          title: '登录用户名',
          key: 'userName',
        }, {
          title: '手机号',
          key: 'tel',
        }, {
          title: '绑定车辆',
          key: 'car',
        }, {
          title: '最后运输',
          key: 'lastTime'
        }, {
          title: '状态',
          key: 'state',
          render: (h, params) => {
              return h('div', [
                  h('Button', {
                      props: {
                          type: 'primary',
                          size: 'small'
                      },
                      style: {
                          marginRight: '5px'
                      },
                      on: {
                          click: () => {
                              
                          }
                      }
                  }, '可用')
              ]);
          }
        }, {
          title: '操作',
          key: 'brandStatus',
          width: 120,
          fixed: 'right',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                on:{
                  click:()=>{
                    this.testFunction()
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '编辑')
            ]);
          }

        }
      ]
    }
  },
  components: {
    "CommonTable": Table
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var _self = this;
      this.$http.get(_self.api.url).then(response => {
        // success callback
        _self.tableData = response.data.data.list;
      }, response => {
        // error callback
      })
    },
    testFunction(){
      this.openPage('home1','sdifk1');
      alert(123)
    }
  }
}
</script>
