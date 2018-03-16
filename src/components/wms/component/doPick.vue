<template>
    <div>
        <Row  type="flex" style="height:240px;">
            <Col style="width:180px;padding:10px;">
                <img style="height:160px;width:160px;margin:40px 10px;" src="static/images/goods_kele.jpg">
            </Col>
            <Col style="width:calc(100% - 200px);margin-top:10px;">
                <Row>
                <span style="display:block;height:33px;line-height:33px;font-size:14px;float:left;">可口可乐300ml SKU:10101112311</span>
                <span style="display:block;height:33px;line-height:33px;font-size:14px;float:right;">已分拣数:8 待分拣数：15</span></Row>
                <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" autoHeight="184" :tableBottom="false" :searchBar="false"></CommonTable>
  
            </Col>
        </Row>
        
        <Row style="margin-top:15px;">

            <Button type="primary" icon="filing" style="float:right">加入当前分拣箱(1)</Button>
        </Row>
    </div>
</template>
<script>
    import Table from '../../common/table';
    export default{
        data(){
            return{
                self: this,
                api: {
                    url: "/wms/goodspici/list"
                },
                tableData: [],
                tableColumns: [
                    {
                    title: '批次编号',
                    key: 'number',
                    }, {
                    title: '生产日期',
                    key: 'createTime',
                    }, {
                    title: '供应商',
                    key: 'supplierName',
                    },{
                        title: '容器',
                        key: 'rongqi',
                        render: (h, params) => {
                            return h('div', [
                            h('span', {}, '01-J1-A2-01')
                            ]);
                        }
                    }, {
                    title: '可用库存',
                    key: 'kucun',
                    },{
                    title: '拣货数量',
                    key: 'brandStatus',
                    width: 120,
                    render: (h, params) => {
                        return h('div', [
                        h('InputNumber', {
                            props: {
                            max: '8',
                            min: '0'
                            }
                
                        
                        }, '查看')
                        ]);
                    }

                    }
                ]
            }
        },
        mounted:function(){

        },
        components: {
            "CommonTable": Table
        },
        methods:{
            setCarrier:function(state){
                if(state == 0){
                    this.disabled=true;
                }else{
                    this.disabled=false;
                }
            }
        }
    }
</script>