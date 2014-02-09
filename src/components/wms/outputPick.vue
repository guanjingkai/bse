<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig">
      <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateVoucher()">分拣验货</Button>
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
        url: "/wms/pick/1"
      },
      searchConfig:{
        orderId:{
          title:'分检单号',
          key:'orderId',
          type:'input',
          width:150,
          value:''
        },
        nameaaa:{
          title:'补货单号',
          key:'nameaaa',
          type:'input',
          width:150,
          value:''
        },
        nameaaa1:{
          title:'波次号',
          key:'nameaaa1',
          type:'input',
          width:150,
          value:''
        },
        payTools:{
          title:'状态',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "待拣货" }, { key: "ertong", value: "已验货" }],
          width:100,
          value:''
        }
      },
      tableData: [],
      tableColumns: [
        {
          title: '分拣单号',
          key: 'pickNumber',
        },{
          title: '状态',
          key: 'pickNumber',
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
                                }, '待拣货')
                            ]);
                        }
        },{
          title: '波次号',
          key: 'waveNumber',
        }, {
          title: '仓库',
          key: 'wavehose'
        }, {
          title: '补货单号',
          key: 'replenishNumber',
        }, {
          title: '商品数量',
          key: 'goodsNumber',
        },{
          title: '生成时间',
          key: 'createTime',
          width: 200,
          sortable: true,
        }, {
          title: '操作',
          key: 'brandStatus',
          width: 180,
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
              }, '打印分拣单'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '查看')
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
