<template>
  <Row>
    <Col span="6" style="padding-right:15px;">
      <CommonForm :parameter="parameter" :formValidate="formValidate" :formAction="formAction" :gridSpan="gridSpan">
        <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateWave(true)">确认</Button>
        </div>
      </CommonForm>
      <CommonForm :parameter="parameter2" :formValidate="formValidate" :formAction="formAction" :gridSpan="gridSpan">
      </CommonForm>
    </Col>
    <Col span="18">
      <Tabs type="card" :animated="false">
        <TabPane v-for="tab in tabs" :key="tab" :label="'分捡箱' + tab">
          
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
            value: "分拣单信息"
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
            value: "扫码商品"
        },
        sku69: {
            key: "sku69",
            title: "商品编码/SKU",
            type: "input",
            rule: [{required: true, message: '商品编码不能为空', trigger: 'blur'}]
        }
      },
      parameter2: {
        group1: {
            key: "group1",
            title: "",
            type: "formGroupTitle",
            value: "分捡箱绑定"
        },
        strategy_name: {
            key: "strategy_name",
            title: "1号分捡箱",
            type: "input",
            rule: [{required: true, message: '分拣单编号不能为空', trigger: 'blur'}]
        },
        sku69: {
            key: "sku69",
            title: "2号分捡箱",
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
          }, {
          title: '批次编号',
          key: 'number',
          }, {
          title: '批次编号',
          key: 'number',
          }, {
          title: '生产日期',
          key: 'createTime',
          width:180
          },{
          title: '分拣数量',
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
