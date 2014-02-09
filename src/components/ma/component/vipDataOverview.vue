<template>
    <div>
        <Row type="flex">
        <Overview></Overview>
        <Overview></Overview>
        <Overview></Overview>
        <Overview></Overview>
        </Row>
    </div>
</template>
<script>
import Overview from '../../common/display/overview'

export default {
    data(){
        return{

        }
    },
    props:{

    },
    mounted:function(){
            
    },
    methods:{
        
    },
    components:{
        "Overview":Overview
    }
};
</script>
