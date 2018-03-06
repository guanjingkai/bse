<template>
  <div>
    <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig">
      <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="addDelivery()">手动加入运输单</Button> 
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateDelivery(true)">手动运输单列队</Button>   
      </div>
    </CommonTable>
    <CreateDelivery :modalShow="openCreateDeliveryShow" @create-delivery-show="openCreateDelivery"></CreateDelivery>
  </div>
</template>
<script>
import Table from '../common/table';
import CreateDelivery from './component/createDelivery';
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
          width:100,
          value:''
        },
        nameaaa:{
          title:'点位信息',
          key:'nameaaa',
          type:'input',
          width:100,
          value:''
        },
        area:{
          title:'城市',
          key:'area',
          type:'area-cascader',
          level:1,
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
        createOrder:{
          title:'下单时间',
          key:'createOrder',
          type:'date-time',
          width:180,
          value:''
        }
      },
      tableData: [],
      tableColumns: [
        {
            type: 'selection',
            width: 60,
            align: 'center'
        },
        {
          title: '配送单ID',
          key: 'id',
        }, {
          title: '点位信息',
          key: 'poiName',
          width:200,
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
          width: 80,
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
                    this.createLookPack()
                  }
                }
              }, '查看')
            ]);
          }

        }
      ],
      openCreateDeliveryShow:false
    }
  },
  components: {
    "CommonTable": Table,
    "CreateDelivery":CreateDelivery
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
    },
    openCreateDelivery(isShow){
      this.openCreateDeliveryShow = isShow;
    },
    addDelivery(){
      this.$Message.success('您选择的配送等你以加入手工物流列队中。');
    },
    createLookPack(){
      const _self = this;
      _self.openPage("分拣单详情","wmsOutputPack","/wms/output_pack");
      //console.log(_self.$store.state.model.menu[name].path);
      //this.router.push({ path: _self.$store.state.model.menu[name].path })
      console.log(item);
      
    },
  }
}
</script>
