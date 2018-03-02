<template>
  <div>
    <Row type="flex">
    <div  id="table-top" style="margin-bottom: 10px; overflow: hidden;">
      <Col span="24">
        <Row type="flex" class-name="table-search">
          <Col class-name="table-col" v-for="(item, key) in thisSearchConfig">
            <Input v-if="item.type == 'input'" v-model="item.value" :placeholder="item.title" :style="{'width':item.hasOwnProperty('width')?item.width>0?item.width+'px':'150px':'150px'}"></Input>
            <Select v-if="item.type == 'select'" v-model="item.value":placeholder="item.title" :style="{'width':item.hasOwnProperty('width')?item.width>0?item.width+'px':'150px':'150px'}">
              <Option v-for="(option, key) in item.data" :value="option.key">{{option.value}}</Option>
            </Select>
            <Date-picker v-if="item.type == 'date-time'" type="daterange" :options="item.option" :placement="item.hasOwnProperty('placement')?item.width != ''?item.placement:'bottom-start':'bottom-start'" :placeholder="item.title" :style="{'width':item.hasOwnProperty('width')?item.width>0?item.width+'px':'150px':'150px'}"></Date-picker>
            <i-switch size="large" v-model="item.value" v-if="item.type == 'switch'">
              <span slot="open">开启</span>
              <span slot="close">关闭</span>
            </i-switch>
            <Cascader  v-if="item.type == 'cascader'" v-model="item.value"  :placeholder="'请选择'+item.title" :data="item.data" trigger="hover" :style="{'width':item.hasOwnProperty('width')?item.width>0?item.width+'px':'150px':'150px'}"></Cascader>
          </Col>
          <Col class-name="table-col" v-if="thisSearchConfig.toString() != arrayNull.toString()">
            <Button type="primary" icon="ios-search">查询</Button>
            <Button type="primary" icon="ios-refresh-empty">重置</Button>
          </Col>
        </Row>
      </Col>    
      <Col span="24">
        <div style="float:left;">
          <slot name="customAciton"></slot>
        </div>
      </Col>
      </div>
    </Row>
    <Table highlight-row :height="tableHeigth" :context="self" :data="thisTableData" :columns="thisTableColumns" stripe></Table>
    <div style="margin-top: 10px;overflow: hidden"  id="table-bottom">
      <div style="float: left;">
        <Button type="primary" size="large" v-for="(action, key) in batchAction" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> {{action.title}}</Button>
        <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</Button>
      </div>
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
    <!--<Spin size="large" fix v-if="spinShow"></Spin>-->
  </div>
</template>
<style>
.table-search {
  margin-bottom: 10px;
}

.table-col {
  margin-right: 10px;
}
</style>
<script>
import TableSearch from './TableSearch';
export default {
  data() {
    return {
      self: this,
      tableHeigth:this.$store.state.client.height,
      thisApi:'',
      spinShow: true,
      thisModel: '',
      thisSearchConfig:[],
      thisBatchAction:[],
      thisTableData: [],
      thisTableColumns: [],
      arrayNull:[]
    }
  },
  props: {
        model: {
            default: function () {
                return []
            }
        },id: {
            default: function () {
                return []
            }
        },api: {
            default: function () {
                return []
            }
        },searchConfig: {
            default: function () {
                return []
            }
        },tableColumns: {
            default: function () {
                return []
            }
        },tableData: {
            default: function () {
                return []
            }
        },batchAction: {
            default: function () {
                return []
            }
        }},
  create:function(){
    console.log("create")
  },
  activated: function () {
    console.log("activated")
  },
  mounted: function () {
    console.log("mounted")
    this.init();
  },
  methods: {
    init() {
      var thisData = "";
      this.spinShow = true;
      //this.model = this.$props.model == null ? this.$route.params.model : this.$props.model;
      //console.log(this.model);
      //Mapper
      if(this.$props.model.toString() == [].toString()){
        this.thisApi          = this.$props.api;//this.$store.state.model[this.model].api;
        this.thisTableColumns = this.$props.tableColumns;//this.$store.state.model[this.model].tableColumns;
        this.thisSearchConfig = this.$props.searchConfig;//this.$store.state.model[this.model].searchConfig;
        this.thisBatchAction  = this.$props.batchAction;//this.$store.state.model[this.model].batchAction;     
        thisData              = this.$props.tableData;
      }else{
        this.thisApi          = this.$props.model.api;//this.$store.state.model[this.model].api;
        this.thisTableColumns = this.$props.model.tableColumns;//this.$store.state.model[this.model].tableColumns;
        this.thisSearchConfig = this.$props.model.searchConfig;//this.$store.state.model[this.model].searchConfig;
        this.thisBatchAction  = this.$props.model.batchAction;//this.$store.state.model[this.model].batchAction;     
        thisData              = this.$props.model.tableData;
      }
      if(thisData.toString() == [].toString()){
        this.getData();
      }else{
        this.thisTableData    = thisData;
      }
      setTimeout(() => {
          this.setTableHeigth();
       }, 10);
    },
    setTableHeigth(){
      var topHeigth = document.getElementById('table-top').offsetHeight;
      var bottomHeigth = document.getElementById('table-bottom').offsetHeight;
      this.tableHeigth = this.$store.state.client.height - 180 - topHeigth - bottomHeigth;
      window.onresize = function () {
        this.tableHeigth = this.$store.state.client.height - 180 - topHeigth - bottomHeigth;
      };

    },
    getData() {
      var _self = this;
      //this.Tab.create();
      //this.Tab.close();
      //   this.Http.get(_self.api.url, function (jsonData) {
      //     _self.thisTableData = jsonData.list;
      //     console.log(jsonData.list);
      //     _self.spinShow = false;
      //   });
      // this.$http.get(_self.thisApi.url).then(response => {
      //   // success callback
      //   _self.thisTableData = response.data;
      //   console.log('请求成功');
      //   console.log(response);
      //   }, response => {
      //     // error callback
      //     console.log('请求失败');
      //   })
      this.$http.post(_self.serverUrl+_self.thisApi.url).then(response => {
        // success callback
        _self.thisTableData = response.data.data.list;
      }, response => {
        // error callback
      })
      //_self.tableData = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
    },
    testData() {
      return 1;
    },
    changePage() {
      // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
      this.tableData1 = this.mockTableData1();
    },
    exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '原始数据'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: '排序和过滤后的数据',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: '自定义数据',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            }
  },
  watch: {
    '$route'(to, from) {
      //this.init();
    },
    tableData(curVal,oldVal){
        console.log('tableData更新')
        this.thisTableData = curVal;
    }
  },
  components: {
    'search': TableSearch
  }
}
</script>
