<template>
    <Row>
        
        <RadioGroup v-model="carrier" @on-change="setCarrier">
            <Radio label="0">                
                <span>相同承运商</span>
            </Radio>
            <Radio label="1">
                <span>指定承运商</span>
            </Radio>
            <Select v-model="model12" filterable multiple style="width: 250px" :disabled="disabled">
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
                        label: '云鸟'
                    },
                    {
                        value: 'London',
                        label: '宅急送'
                    },
                    {
                        value: 'Sydney',
                        label: '达达'
                    },
                    {
                        value: 'Ottawa',
                        label: '58速运'
                    },
                    {
                        value: 'Paris',
                        label: '自由物流'
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