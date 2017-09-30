<template>
  <Modal
    v-model="modalShow"
    title="选择图片"
    @on-ok="ok"
    @on-cancel="cancel"
    width="734">
   <Row class="upload-box" type="flex">
     <Col class="image-group-list">
     <Menu active-name="1" width="150"  style="height: 100%">
         <MenuItem name="1">
           全部图片
         </MenuItem>
         <MenuItem name="2">
           未分组
         </MenuItem>
         <MenuItem name="3">
           物料图片
         </MenuItem>
         <MenuItem name="4">
           订单图片
         </MenuItem>
     </Menu>
     </Col>
     <Col class="image-list">
       <Row class="upload-image">
         <Upload action="//jsonplaceholder.typicode.com/posts/" :show-upload-list="showUploadList">
           <Button type="success" icon="ios-cloud-upload-outline">上传图片</Button>
         </Upload>
       </Row>
       <Row>
          <div class="image-box" v-for="item in imageAll"  @click="selectImage(item)">
            <img :src="item.url">
            <div class="image-select" v-if="isSelect(item.key)">
              <Icon type="checkmark"></Icon>
            </div>
            <div class="image-name">
              {{item.name}}
            </div>
          </div>
       </Row>
     </Col>
   </Row>
  </Modal>
</template>
<script>
  export default{
      data(){
          return{
              showUploadList:false,
              selectImages:{},
              imageList:{
                  group1:{
                      title:"全部图片",
                      data:[{
                        key:"asdfsdfdfff",
                        name:"图片名称",
                        url:"https://img13.360buyimg.com/n7/jfs/t5587/251/8844661235/226850/a1b175d0/597ebf53N51a2d872.jpg"
                      },{
                        key:"gsrdfgtrhbsa",
                        name:"图片名称",
                        url:"https://img13.360buyimg.com/n7/jfs/t5587/251/8844661235/226850/a1b175d0/597ebf53N51a2d872.jpg"
                      },{
                        key:"ryuycvbxvcb",
                        name:"图片名称",
                        url:"https://img13.360buyimg.com/n7/jfs/t5587/251/8844661235/226850/a1b175d0/597ebf53N51a2d872.jpg"
                      },{
                        key:"cvbmettywrt",
                        name:"图片名称",
                        url:"https://img13.360buyimg.com/n7/jfs/t5587/251/8844661235/226850/a1b175d0/597ebf53N51a2d872.jpg"
                      },{
                        key:"qwrytkmbnmv",
                        name:"图片名称",
                        url:"https://img13.360buyimg.com/n7/jfs/t5587/251/8844661235/226850/a1b175d0/597ebf53N51a2d872.jpg"
                      },{
                        key:"zcvnbmurynmn",
                        name:"图片名称",
                        url:"https://img13.360buyimg.com/n7/jfs/t5587/251/8844661235/226850/a1b175d0/597ebf53N51a2d872.jpg"
                      },{
                        key:"poiywtyhvbnn",
                        name:"图片名称",
                        url:"https://img13.360buyimg.com/n7/jfs/t5587/251/8844661235/226850/a1b175d0/597ebf53N51a2d872.jpg"
                      }]
                  }
              },
              imageAll:[]
          }
      },
    props:{
      modalShow: {
        default: function () {
          return false
        }
      }
    },
    mounted:function () {
      this.setImageAll();
    },
    methods:{
      ok () {
        this.$emit('upload-image-show',false);
        this.$Message.info('点击了确定');
      },
      cancel () {
        this.$emit('upload-image-show',false);
        this.$Message.info('点击了取消');
      },
      setImageAll(){
          var _self = this;
          var group;
          for(group in _self.imageList){
              for(var i=0;i<_self.imageList[group].data.length;i++){
                  this.imageAll.push(_self.imageList[group].data[i]);
              }
          }
      },
      selectImage(imageInfo){
          console.log(1);
          if(this.isSelect(imageInfo.key)){
              //取消选中
              delete this.selectImages[imageInfo.key];
          }else{
              //增加选中图片
             this.selectImages[imageInfo.key] = imageInfo.url;
          }
      },
      isSelect(key){
          var thisSelectState = false;
          for(var item in this.selectImages){
              if(this.selectImages[item].key == key){
                thisSelectState = true
              }
          }
          return thisSelectState;
      }
    },
    watch:{
      modalShow:function (val, oldVal) {
        console.log(val)
        console.log(oldVal)

      }
    }
  }
</script>
<style>
  .ivu-modal-body{
    margin: 0px;
    padding: 0px;
  }
  .upload-box{
    height: 400px;
  }
  .image-group-list{
    width: 150px;
    height: 100%;
  }
  .image-list{
    width: calc(100% - 150px);
  }
  .image-box{
    position: relative;
    width: 130px;
    height: 154px;
    border: 1px solid #e7e7eb;
    margin: 8px;
    float: left;
  }
  .image-box img{
    width: 128px;
    height: 128px;
    float: left;
  }
  .image-box .image-select{
    position: absolute;
    top:0;
    left:0;
    width: 128px;
    height: 128px;
    line-height: 148px;
    background: rgba(0,0,0,0.5);
    text-align: center;
  }
  .image-box .image-select .ivu-icon{
    font-size: 48px;
    color: #ffffff;
  }
  .image-box .image-name{
    height: 24px;
    line-height: 24px;
    width: 100%;
    font-size: 14px;
    color: #777777;
    text-align: center;
    float: left;
  }
  .upload-image{
    height: 49px;
    border-bottom: 1px solid #e7e7eb;
  }
  .upload-image .ivu-upload {
    float: right;
  }
  .upload-image .ivu-upload-select{
    margin: 8px;
  }
</style>
