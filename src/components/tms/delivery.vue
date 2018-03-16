<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig"></CommonTable>
  </div>
</template>
<script>
import Table from '../common/table';
export default {
  data() {
    return {
      self: this,
      api: {
        url: "/tms/delivery/list"
      },
      searchConfig:{
        orderId:{
          title:'运输单ID',
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
        },
        payTools:{
          title:'状态',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "未配送" }, { key: "ertong", value: "配送中" }, { key: "ertong1", value: "已完成" }],
          width:100,
          value:''
        }
      },
      tableData: [],
      tableColumns: [
        {
          title: '运输单ID',
          key: 'id',
          fixed: 'left',
           width:100,
        }, {
          title: '承运商',
          key: 'carrierName',
           width:100,
        }, {
          title: '运输箱',
          key: 'packageNumber',
           width:100,
        }, {
          title: '下单时间',
          key: 'lastTime',
          width: 180,
        }, {
          title: '发车时间',
          key: 'pullTime',
          width: 180,
        }, {
          title: '进度',
          key: 'nowBear',
          width:180,
          render: (h, params) => {
              let status;
              if(params.row.nowBear>=0 && params.row.nowBear < 60){
                status = 'success';
              }else if(params.row.nowBear>=60 && params.row.nowBear < 85){
                status = 'active';
              }else{
                status = 'wrong';
              }
              return h('div', [
                h('Button', {
                  props: {
                    percent: params.row.nowBear,
                    status: status
                  },
                  on: {
                    click: () => {
                      
                    }
                  }
                }, params.row.nowBear+"/100")
              ]);
            }
        },{
          title: '状态',
          key: 'state',
          width:100,
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
                  }, '配送中')
              ]);
          }
        }, {
          title: '操作',
          key: 'brandStatus',
          width: 140,
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
                    this.$Message.success('确认成功');
                  }
                }
              }, '确认发车'),
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
