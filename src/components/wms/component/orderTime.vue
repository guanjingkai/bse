<template>
    <Row>
        
        <RadioGroup v-model="carrier" @on-change="setCarrier">
            
            <Select :disabled="state_1"  v-model="active_time_start" size="large" style="width:80px">
                <Option :value="0" :key="0">当天</Option>
                <Option :value="1" :key="1">昨天</Option>
                <Option :value="2" :key="2">前天</Option>
            </Select>
            <TimePicker format="HH:mm" placeholder="Select time" style="width: 70px"></TimePicker>
            <span>前</span>
        </RadioGroup>
        
    </Row>
</template>
<script>
    export default{
        data(){
            return{}
        },
        mounted:function(){

        },
        methods:{
            
        }
    }
</script>