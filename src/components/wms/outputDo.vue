<template>
  <Row>
    <Col span="6" style="padding-right:15px;">
      <CommonForm :parameter="parameter" :formValidate="formValidate" :formAction="formAction" :gridSpan="gridSpan">
        <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateWave(true)">查询</Button>
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateWave(true)">出库</Button>
        </div>
      </CommonForm>
    </Col>
    <Col span="18">
      <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData"></CommonTable>
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
        strategy_name: {
            key: "strategy_name",
            title: "分拣箱编号",
            type: "input",
            rule: [{required: true, message: '分拣箱编号不能为空', trigger: 'blur'}]
        },
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
          }, {
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
