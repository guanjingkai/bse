<template>
    <Row>
        <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
        <span>-</span>
        <InputNumber :max="10" :min="1" v-model="value2"></InputNumber>
    </Row>
</template>
<script>
    export default{
        data(){
            return{
            }
        },
        mounted:function(){

        },
        methods:{
            
        }
    }
</script>