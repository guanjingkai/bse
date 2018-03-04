<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig">
      <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateWave(true)">新建物流发货单</Button>  
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
        url: "/tms/order/list"
      },
      searchConfig:{
        orderId:{
          title:'配送单ID',
          key:'orderId',
          type:'input',
          width:150,
          value:''
        },
        nameaaa:{
          title:'点位信息',
          key:'nameaaa',
          type:'input',
          width:150,
          value:''
        },
        payTools:{
          title:'承运商',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "云鸟" }, { key: "ertong", value: "达达" }, { key: "ertong1", value: "宅急送" }],
          width:100,
          value:''
        }
      },
      tableData: [],
      tableColumns: [
        {
          title: '配送单ID',
          key: 'id',
        }, {
          title: '点位信息',
          key: 'poiName',
        }, {
          title: '承运商',
          key: 'carrierName'
        }, {
          title: '运输箱',
          key: 'packageNumber',
        }, {
          title: '货物数量',
          key: 'addNumber',
        },{
          title: '下单时间',
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
                  }, '代配送')
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
