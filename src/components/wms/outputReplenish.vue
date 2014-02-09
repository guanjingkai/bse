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
        url: "/wms/replenish/list"
      },
      searchConfig:{
        orderId:{
          title:'供应商编码',
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
          title:'采购组',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "北京采购组" }, { key: "ertong", value: "华南采购组" }, { key: "ertong1", value: "上海采购组" }],
          width:100,
          value:''
        },
        payTools1:{
          title:'合作类型',
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
          title: '补货单号',
          key: 'replenishNumber',
        }, {
          title: '仓库',
          key: 'wavehouse'
        }, {
          title: '公司名称',
          key: 'company',
        }, {
          title: '位置',
          key: 'local',
        }, {
          title: '点位ID',
          key: 'dianweiId',
        }, {
          title: '应补商品数量',
          key: 'shouldGoodsNumber'
        }, {
          title: '实际商品数量',
          key: 'shouldGoodsNumber'
        }, {
          title: '分拣箱数量',
          key: 'packNumber'
        },{
          title: '创建时间',
          key: 'createTime'
        },{
          title: '更新时间',
          key: 'updateTime'
        },{
          title: '状态',
          key: 'state',
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
              }, '打印拣货单'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '打印物流单')
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
