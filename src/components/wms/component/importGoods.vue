<template>
    <Row>
        
        <RadioGroup v-model="carrier" @on-change="setCarrier">
            <Radio label="0">                
                <span>不限</span>
            </Radio>
            <Radio label="1">
                <span>或</span>
            </Radio>
            <Radio label="2">
                <span>且</span>
            </Radio>
            <Select v-model="model12" filterable multiple style="width: 285px" :disabled="disabled">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </RadioGroup>
        
    </Row>
</template>
<script>
    export default{
        data(){
            return{
                carrier:"0",
                disabled:true,
                cityList: [
                    {
                        value: 'New York',
                        label: '双汇火腿肠'
                    },
                    {
                        value: 'London',
                        label: '零度330ml'
                    },
                    {
                        value: 'Sydney',
                        label: '红牛300ml'
                    }
                ],
                model11: '',
                model12: []
            }
        },
        mounted:function(){

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