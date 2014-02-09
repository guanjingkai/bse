<template>
  <div>
    <Row type="flex" class-name="ware-info">
      <span class="ware-name">当前仓库:北京仓</span>
    </Row>
    <Row type="flex" class-name="ware-detail">
      <Col class-name="area-list">
        <Menu :theme="theme2" :open-names="['1','3','2']">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper"></Icon>
                    复核包装区
                </template>
                <MenuItem name="1-1">小件包装区</MenuItem>
                <MenuItem name="1-2">调拨包装区</MenuItem>
                <MenuItem name="1-3">首铺包装区</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people"></Icon>
                    拣选区
                </template>
                <MenuItem name="2-1">电子数码</MenuItem>
                <MenuItem name="2-2">食品饮品</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    存储区
                </template>
                    <MenuItem name="3-1">大润发专用</MenuItem>
                    <MenuItem name="3-2">冷藏区</MenuItem>
                    <MenuItem name="3-3">常温区</MenuItem>
                
            </Submenu>
        </Menu>
      </Col>
      <Col class-name="location-list">
      <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" :searchConfig="searchConfig">
          <div slot="customAciton">
              <Button type="primary" icon="ios-refresh-empty" @click="openCreateVoucher()">新建</Button>  
              <Button type="primary" icon="ios-refresh-empty" @click="openCreateVoucher()">批量新建</Button>     
          </div>
      </CommonTable>
      </Col>
    </Row>
  </div>
</template>
<style>
  .ware-info{
    height: 44px;
    border-bottom: 1px solid #e9eaec;
  }.ware-name{
    font-size: 14px;
    height: 44px;
    line-height: 40px;
  }
  .area-list {
    width: 160px;
    margin-right: 16px;
    height: 100%;
    overflow-x:hidden;
}
.location-list {
    width: calc(100% - 176px);
    height: 100%;
    overflow-y: auto;
}
</style>
<script>
  import Table from '../common/table';
  export default {
    data() {
      return {
        self: this,
        api: {
          url: "/wms/area/list"
        },
        searchConfig: {
          orderId: {
            title: '库位名称',
            key: 'orderId',
            type: 'input',
            width: 150,
            value: ''
          },
          nameaaa: {
            title: '库区编码',
            key: 'nameaaa',
            type: 'input',
            width: 150,
            value: ''
          },
          payTools: {
            title: '库位类型',
            key: 'payType',
            type: 'select',
            data: [{ key: "canyin", value: "北京采购组" }, { key: "ertong", value: "华南采购组" }, { key: "ertong1", value: "上海采购组" }],
            width: 100,
            value: ''
          },
          payTools1: {
            title: '库位模板',
            key: 'payType1',
            type: 'select',
            data: [{ key: "canyin", value: "购销" }, { key: "ertong", value: "联营" }, { key: "ertongq", value: "代销" }],
            width: 100,
            value: ''
          },
        },
        tableData: [],
        tableColumns: [
          {
            title: '库位名称',
            key: 'locationName',
          }, {
            title: '通道',
            width: 60,
            key: 'pass',
          }, {
            title: '库位编码',
            key: 'locationNumber'
          }, {
            title: '库区类型',
            width: 90,
            key: 'locationType',
          }, {
            title: '库区模板',
            key: 'locationTemplate',
          }, {
            title: '长*宽*深(cm)',
            width: 140,
            key: 'width'
          },  {
            title: '容积(㎡)',
            sortable: true,
            key: 'volume'
          }, {
            title: '当前用量',
            sortable: true,
            key: 'nowVolume',
            width: 200,
            render: (h, params) => {
              let status;
              if(params.row.nowVolume>=0 && params.row.nowVolume < 60){
                status = 'success';
              }else if(params.row.nowVolume>=60 && params.row.nowVolume < 85){
                status = 'active';
              }else{
                status = 'wrong';
              }
              return h('div', [
                h('Progress', {
                  props: {
                    percent: params.row.nowVolume,
                    status: status
                  },
                  on: {
                    click: () => {
                      
                    }
                  }
                }, params.row.nowVolume+"%")
              ]);
            }
          },{
            title: '最大承重(kg)',
            sortable: true,
            key: 'maxBear'
          }, {
            title: '当前负载',
            sortable: true,
            key: 'nowBear',
            width: 200,
            render: (h, params) => {
              let status;
              if(params.row.nowBear>=0 && params.row.nowBear < 60){
                status = 'success';
              }else if(params.row.nowBear>=60 && params.row.nowBear < 85){
                status = 'active';
              }else{
                status = 'wrong';
              }
              return h('div', [
                h('Progress', {
                  props: {
                    percent: params.row.nowBear,
                    status: status
                  },
                  on: {
                    click: () => {
                      
                    }
                  }
                }, params.row.nowBear+"%")
              ]);
            }
          }, {
            title: '操作',
            key: 'brandStatus',
            width: 180,
            fixed: 'right',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.testFunction()
                    }
                  }
                }, '优先商品设置'),
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
      testFunction() {
        this.openPage('home1', 'sdifk1');
        alert(123)
      }
    }
  }
</script>