<template>
    <Row>
        
        <RadioGroup v-model="carrier" @on-change="setCarrier">
            <Radio label="0">                
                <span>不限</span>
            </Radio>
            <Radio label="1">
                <span>相同品牌</span>
            </Radio>
            <Radio label="2">
                <span>指定</span>
            </Radio>
            <Radio label="3">
                <span>排除</span>
            </Radio>
            <Select v-model="model12" filterable multiple style="width: 175px" :disabled="disabled">
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
                        label: '双汇'
                    },
                    {
                        value: 'London',
                        label: '康师傅'
                    },
                    {
                        value: 'Sydney',
                        label: '红牛'
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