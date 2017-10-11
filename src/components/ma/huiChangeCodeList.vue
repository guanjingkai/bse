<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig">
      <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateHuiChangeCode()">生成惠币兑换码</Button>     
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
        url: "ma/voucher/changeCodeList"
      },
      searchConfig:{
        change_code_name:{
          title:'兑换码名称',
          key:'change_code_name',
          type:'input',
          width:150,
          value:''
        },change_code_prefix:{
          title:'批次/前缀',
          key:'change_code_prefix',
          type:'input',
          width:150,
          value:''
        },
        payTools:{
          title:'状态',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "正常" }, { key: "ertong", value: "即将用尽" }, { key: "ertong3", value: "用尽" }],
          width:100,
          value:''
        }
      },
      tableData: [],
      tableColumns: [
        {
          title: '兑换码名称',
          key: 'change_code_name',
          width: 200
        }, {
          title: '前缀/批次',
          key: 'change_code_prefix',
        }, {
          title: '生成数量',
          key: 'generate_num',
        }, {
          title: '已使用',
          key: 'use_num',
        }, {
          title: '有效期',
          key: 'validity_time',
        }, {
          title: '兑换惠币数量',
          key: 'change_hui_num',
        }, {
          title: '状态',
          key: 'change_code_type',
        },  {
          title: '备注',
          key: 'remark',
        }, {
          title: '操作',
          key: 'voucher_title',
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
        },

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
      console.log(_self.serverUrl)
      this.$http.get(_self.api.url).then(response => {
        // success callback
        _self.tableData = response.data.data;
        console.log(response.data.data);
      }, response => {
        // error callback
      })
    },
    openCreateHuiChangeCode(){
      console.log("根据组件名称直接打开界面");
      this.openComponent("maCreateHuiChangeCode")
    },
    testFunction(){
      this.Tab.create();
      alert(123)
    }
  }
}
</script>
