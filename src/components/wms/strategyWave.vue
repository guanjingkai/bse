<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig">
      <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateWave(true)">新建波次策略(预配)</Button>  
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateVoucher()">新建波次策略(普通)</Button>     
      </div>
    </CommonTable>
    
    <newWaveStrategy :modalShow="newWaveStrategyShow" @new-wave-show="openCreateWave"></newWaveStrategy>
  </div>
</template>
<script>
import Table from '../common/table';
import newWaveStrategy from './component/newWaveStrategy.vue';
export default {
  data() {
    return {
      self: this,
      api: {
        url: "/wms/strategy/wave"
      },
      searchConfig:{
        orderId:{
          title:'策略编码',
          key:'orderId',
          type:'input',
          width:150,
          value:''
        },
        payTools:{
          title:'策略类型',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "普通" }, { key: "ertong", value: "预配" }],
          width:100,
          value:''
        },
        payTools1:{
          title:'优先级',
          key:'payType',
          type:'select',
          data:[{ key: "canyin", value: "1" }, { key: "ertong", value: "2" }, { key: "ertong1", value: "3" }, { key: "33", value: "4" }],
          width:100,
          value:''
        }
      },
      tableData: [],
      tableColumns: [
        {
          title: '策略编码',
          key: 'strategyNumber',
        },{
          title: '策略名称',
          key: 'strategyName',
        },{
          title: '策略类型',
          key: 'strategyType',
        }, {
          title: '优先级',
          key: 'level'
        }, {
          title: '窗口类型',
          key: 'windowType',
        }, {
          title: '时间类型',
          key: 'timeType',
        },{
          title: '开始时间',
          key: 'startTime',
          width: 160,
          sortable: true,
        }, {
          title: '结束时间',
          key: 'endTime',
          width: 160,
          sortable: true,
        }, {
          title: '最后生效',
          key: 'lastTime',
          width: 160,
          sortable: true,
        },{
          title: '创建人',
          key: 'createUser'
        }, {
          title: '操作',
          key: 'brandStatus',
          width: 100,
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
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '删除')
            ]);
          }

        }
      ],
      newWaveStrategyShow:false
    }
  },
  components: {
    "CommonTable": Table,
    "newWaveStrategy":newWaveStrategy
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
    openCreateWave(isShow){
      this.newWaveStrategyShow = isShow;
    }
  }
}
</script>
