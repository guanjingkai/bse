<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig">
      <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateWave(true)">打入零拣</Button>  
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateVoucher()">手动截单</Button>  
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateVoucher()">加入手工波次</Button>  
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateVoucher()">手工波次列队</Button>     
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
        url: "/wms/waitpick/list"
      },
      searchConfig:{
        orderId:{
          title:'外部单号',
          key:'orderId',
          type:'input',
          width:150,
          value:''
        },
        nameaaa:{
          title:'供应商名称',
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
        },
        payTools1:{
          title:'承运商类型',
          key:'payType1',
          type:'select',
          data:[{ key: "canyin", value: "购销" }, { key: "ertong", value: "联营" }, { key: "ertongq", value: "代销" }],
          width:100,
          value:''
        },
        payTools2:{
          title:'商品',
          key:'payType1',
          type:'select',
          data:[{ key: "canyin", value: "购销" }, { key: "ertong", value: "联营" }, { key: "ertongq", value: "代销" }],
          width:100,
          value:''
        },
      },
      tableData: [],
      tableColumns: [
        {
            type: 'selection',
            width: 60,
            align: 'center'
        },
        {
          title: '订单提醒',
          key: 'icon',
          width: 140,
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
                                }, '票'),
                                h('Button', {
                                    props: {
                                        type: 'warning',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            
                                        }
                                    }
                                }, '超'),
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            
                                        }
                                    }
                                }, '备')
                            ]);
                        }
        },  {
          title: '仓库',
          key: 'wavehouse',
          width: 80,
        }, {
          title: '承运商',
          key: 'company',
          width: 80,
        }, {
          title: '收货地址',
          key: 'local',
          width: 220,
        },{
          title: '数量',
          key: 'number',
          width: 80,
        },{
          title: '容量',
          key: 'volume',
          width: 80,
        }, {
          title: '重量',
          key: 'weight',
          width: 80,
        },{
          title: '分拣单号',
          key: 'pickNumber',
          width: 120,
        },{
          title: '外部单号',
          key: 'replenishNumber',
          width: 120,
        } ,{
          title: '创建时间',
          key: 'createTime',
          width: 120,
        },{
          title: '更新时间',
          key: 'updateTime',
          width: 120,
        },{
          title: '状态',
          key: 'state',
          width: 80,
        }, {
          title: '操作',
          key: 'brandStatus',
          width: 220,
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
              }, '零拣'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '加入手动波次')
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
