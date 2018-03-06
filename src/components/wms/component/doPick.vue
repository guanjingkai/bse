<template>
    <div>
        <Row  type="flex" style="height:240px;">
            <Col style="width:180px;padding:10px;">
                <img style="height:160px;width:160px;margin:40px 10px;" src="static/images/goods_kele.jpg">
            </Col>
            <Col style="width:calc(100% - 200px);margin-top:10px;">
                <Row><span style="display:block;height:33px;line-height:33px;font-size:14px;">可口可乐300ml 国际条码：69812221941 SKU:10101112311</span></Row>
                <CommonTable :api="api" :tableColumns="tableColumns" :tableData="tableData" autoHeight="184" :tableBottom="false" :searchBar="false"></CommonTable>
  
            </Col>
        </Row>
        
        <Row style="margin-top:15px;">
            <Input v-model="value" disabled placeholder="分拣箱编码:FJX10001" style="width: 150px;margin-left:15px;"></Input>
            <Button type="primary">重新绑定</Button>

            <Button type="primary" icon="filing" style="float:right">加入当前分拣箱</Button>
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