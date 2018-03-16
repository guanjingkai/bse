<template>
  <Row>
    <Col span="6" style="padding-right:15px;">
      <CommonForm :parameter="parameter" :formValidate="formValidate" :formAction="formAction" :gridSpan="gridSpan">
        <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateWave(true)">开始分拣</Button>
          <Button type="success" icon="ios-refresh-empty" @click="openCreateWave(true)">完成分拣</Button>
        </div>
      </CommonForm>
      <CommonForm :parameter="parameter3" :formValidate="formValidate" :formAction="formAction" :gridSpan="gridSpan" :isAction="false">
        
      </CommonForm>
      <Alert>分拣单信息</Alert>
      <div style="padding:0px 10px;">
        <Row><span style="font-size:14px;height:28px;line-height:28px;">分拣单:FJD170306010129</span></Row>
        <Row><span style="font-size:14px;height:28px;line-height:28px;">外部订单:BHD170306010129</span></Row>
        <Row><span style="font-size:14px;height:28px;line-height:28px;">创建时间:2017-03-06 15:33:11</span></Row>
        <Row><span style="font-size:14px;height:28px;line-height:28px;">分拣仓库:北京仓</span></Row>
        <Row><span style="font-size:14px;height:28px;line-height:28px;">预计分拣箱数量:2</span></Row>
      </div>
    </Col>
    <Col span="18">
      <Tabs type="card" :animated="false">
        <TabPane :label="tabsLabel">
          <DoPick></DoPick>
          <CommonTable :api="api" :tableColumns="tableColumns2" :tableData="tableData"></CommonTable>
        </TabPane>
        <TabPane v-for="tab in tabs" :key="tab" :label="tab + '号分捡箱 FJX1000' + tab">
          <Row style="margin-top:15px;">
            <Input v-model="value" disabled placeholder="分拣箱编码:FJX10001" style="width: 150px;margin-left:15px;"></Input>
            <Button type="primary">重新绑定</Button>
        </Row>
          <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData"></CommonTable>
        </TabPane>
        
        
        
        <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra">增加分捡箱</Button>
    </Tabs>
    </Col>
  </Row>
</template>
<script>
import Table from '../common/table';
import Form from '../common/form';
import DoPick from './component/doPick';
export default {
  data() {
    return {
      self: this,
      formAction:false,
      tabs:2,
      tabsLabel: (h) => {
          return h('div', [
              h('span', '未分拣'),
              h('Badge', {
                  props: {
                      count: 13
                  }
              })
          ])
      },
      parameter: {
        group1: {
            key: "group1",
            title: "",
            type: "formGroupTitle",
            value: "开始分拣"
        },
        strategy_name: {
            key: "strategy_name",
            title: "分拣单编号",
            type: "input",
            rule: [{required: true, message: '分拣单编号不能为空', trigger: 'blur'}]
        },
      },
      parameter3: {
        group1: {
            key: "group1",
            title: "",
            type: "formGroupTitle",
            value: "扫码商品(自动识别国际条码)"
        },
        sku619: {
            key: "sku619",
            title: "容器ID",
            type: "input",
            rule: [{required: true, message: '容器ID不能为空', trigger: 'blur'}]
        },
        sku69: {
            key: "sku69",
            title: "商品编码/SKU",
            type: "input",
            rule: [{required: true, message: '商品编码不能为空', trigger: 'blur'}]
        }
      },
    
      api: {
          url: "/wms/goods/list"
      },
      tableData: [],
      tableColumns: [
          {
          title: 'SKU',
          key: 'sku',
          }, {
          title: '商品名称',
          key: 'goodsName',
          width:140
          },{
          title: '批次编号',
          key: 'number',
          }, {
          title: '生产日期',
          key: 'createTime',
          width:160
          }, {
          title: '供应商',
          key: 'supplierName',
          },{
          title: '拣货数量',
          key: 'waitNumber',
          },{
          title: '操作',
          key: 'brandStatus',
          width: 120,
          render: (h, params) => {
              return h('div', [
              h('Button', {
                props: {
                  size: 'small'
                }
              }, '编辑'),
              h('span', {}, ' '),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                }
              }, '删除')
              ]);
          }

          }
      ],
      tableColumns2: [
          {
          title: 'SKU',
          key: 'sku',
          }, {
          title: '商品名称',
          key: 'goodsName'
          }, {
          title: '容器',
          key: 'rongqi',
          render: (h, params) => {
              return h('div', [
              h('span', {}, '01-J1-A2-01')
              ]);
          }
          },{
          title: '已经分拣数量',
          key: 'waitNumber',
          width: 120,
          render: (h, params) => {
              return h('div', [
              h('span', {}, '1(6)')
              ]);
          }
          },{
          title: '待分拣数量',
          key: 'waitNumber',
          width: 120

          }
      ]                 
    }
  },
  components: {
    "CommonTable": Table,
    "CommonForm":Form,
    "DoPick":DoPick
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
    handleTabsAdd () {
      this.tabs ++;
    },
    testFunction(){
      this.openPage('home1','sdifk1');
      alert(123)
    }
  }
}
</script>
