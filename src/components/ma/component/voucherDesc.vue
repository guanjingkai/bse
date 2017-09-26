<template>
  <div class="voucher-desc">
    <div class="desc-box">
      <div class="select-image" @click="openUploadImage(true)">
        <Icon type="image"></Icon>
      </div>
      <div class="image-description">
        <textarea></textarea>
        <span class="textarea-append">0/5000</span>
      </div>
      <div class="desc-article">
        <Button type="success">确认</Button>
        <Button type="ghost">取消</Button>f
      </div>
    </div>
    <div>

    </div>
    <UploadImage :modalShow="uploadImageShow" @upload-image-show="openUploadImage"></UploadImage>
  </div>
</template>
<script>
  import UploadImage from '../../common/uploadImage'
  export default {
      data(){
          return{
            uploadImageShow:false
          }
      },
    components:{
          "UploadImage":UploadImage
    },
    methods:{
      openUploadImage(isShow){
          this.uploadImageShow = isShow;
      }
    }
  }
</script>
<style>
  .voucher-desc{
    padding: 8px;
    border: 1px solid #e7e7eb;
    overflow: hidden;
  }
  .desc-box{
    overflow: hidden;
  }
  .select-image{
    height: 66px;
    width: 100%;
    background:#F4F5F9;
    text-align: center;
    margin-bottom: 10px;
    float: left;
  }
  .select-image .ivu-icon {
    font-size: 36px;
    line-height: 66px;
    color: #cccccc;
  }
  .image-description{
    border: 1px solid #e7e7eb;
    padding: 0px 8px;
    height: 120px;
    margin-bottom: 10px;
    width: 100%;
    float: left;
  }
  .image-description textarea{
    resize: none;
    border: none;
    width: 100%;
    height: 100px;
    display: block;
    overflow-y: auto;
    outline:0;
  }
  .image-description .textarea-append{
    height: 20px;
    line-height: 20px;
    text-align: right;
    width: 100%;
    color:#cccccc;
    display: block;
  }
  .desc-article{
    float: right;
  }
</style>
