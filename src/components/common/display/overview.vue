<template>
<Col>
    <div class="overview-box">
        <div class="overview-num"> 10,515 </div> 
    </div>
    <div class="overview-name">
        <Tooltip content="从集成TalkingDataApp Analytics SDK开始，截止某日统计到的设备总量">
            累计设备
        </Tooltip>
    </div>
</Col>
</template>
<script>
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

    }
};
</script>
<style>
.overview-box {
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
}
.overview-num {
    float: left;
    font-size: 32px;
    color: #464c5b;
    line-height: 48px;
    padding-right: 12px;
}
.overview-name {
    min-width: 48px;
    font-size: 12px;
    color: #657180;
    line-height: 16px;
}
</style>
