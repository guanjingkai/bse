<template>
  <Row>
    <Col span="6" style="padding-right:15px;">
      <CommonForm :parameter="parameter" :formValidate="formValidate" :formAction="formAction" :gridSpan="gridSpan">
        <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateWave(true)">确认</Button>
        </div>
      </CommonForm>
      <CommonForm :parameter="parameter2" :formValidate="formValidate" :formAction="formAction" :gridSpan="gridSpan">
        <div slot="customAciton">
          <Button type="primary" icon="ios-refresh-empty" @click="openCreateWave(true)">绑定</Button>
        </div>
      </CommonForm>
    </Col>
    <Col span="18">、
      <Tabs type="card" :animated="false">
        <TabPane label="分拣">标签
        </TabPane>
        <TabPane :label="tabsLabel">标签
        </TabPane>
        <TabPane v-for="tab in tabs" :key="tab" :label="'分捡箱' + tab">标签{{ tab }}</TabPane>
        
        <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra">增加分捡箱</Button>
    </Tabs>
    </Col>
  </Row>
</template>
<script>
import Table from '../common/table';
import Form from '../common/form';
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
      }                 
    }
  },
  components: {
    "CommonTable": Table,
    "CommonForm":Form
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
