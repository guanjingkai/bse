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
        url: "http://brand.api.hanyun.com/brand/brand/info?pageNo=1&pageSize=10"
      },
      searchConfig:{
        orderId:{
          title:'物料ID',
          key:'orderId',
          type:'input',
          width:150,
          value:''
        },
        nameaaa:{
          title:'物料名称',
          key:'nameaaa',
          type:'input',
          width:150,
          value:''
        },
        payTools:{
          title:'物料类型',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "微信" }, { key: "ertong", value: "支付宝" }, { key: "ertong1", value: "POS刷卡" }, { key: "ertong2", value: "现金" }, { key: "ertong3", value: "预存" }],
          width:100,
          value:''
        },
      },
      tableData: [],
      tableColumns: [
        {
          title: '品牌ID',
          key: 'id',
          width: 100
        }, {
          title: '品牌名称',
          key: 'brandName',
        }, {
          title: '公司名称',
          key: 'companyName',
          width: 200
        }, {
          title: '结算方式',
          key: 'brandStatus',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
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
        }, {
          title: '地区',
          key: 'province',
        }, {
          title: '行业',
          key: 'industryName',
        }, {
          title: '入驻时间',
          key: 'createTime',
          sortable: true,
        }, {
          title: '更新时间',
          key: 'updateTime',
          sortable: true,
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
