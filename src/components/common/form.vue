<template>
  <Row>
    <Col span="24">
    
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" style="max-width:900px;">
    <Row>
      <Col v-for="(item,key) in parameter" :span="getSpan(item)">
      <Form-item  :label="item.title" :prop="item.key">
        <Alert v-if="item.type == 'formGroupTitle'" style="margin-left:-100px;">{{item.value}}</Alert>  
        <p v-if="item.type == 'kong'" style="display:block;height:33px;"></p>    
        <Input v-if="item.type == 'input'" v-model="formValidate[item.key]" :placeholder="'请输入'+item.title"></Input>
        <Input v-if="item.type == 'textarea'"  v-model="formValidate[item.key]" type="textarea" :autosize="{minRows: 2,maxRows: 5}" :placeholder="'请输入'+item.title"></Input>
        <Select v-if="item.type == 'select'" v-model="formValidate[item.key]":placeholder="'请选择'+item.title" :placement="item.hasOwnProperty('placement') ? item.placement :'bottom'">
          <Option v-for="(option,key) in item.value" :value="option.key">{{option.value}}</Option>
        </Select>
        <Radio-group v-if="item.type == 'radio'" v-model="formValidate[item.key]">
          <Radio v-for="(radio,key) in item.value" :label="radio.key">{{radio.value}}</Radio>
        </Radio-group>
        <Checkbox-group v-if="item.type == 'checkbox'" v-model="formValidate[item.key]">
          <Checkbox v-for="(checkbox,key) in item.value" :label="checkbox.value"></Checkbox>
        </Checkbox-group>
        <Row v-if="item.type == 'date-time'">
          <Col span="11">
          <Form-item :prop="item.key">
            <Date-picker type="date" :placeholder="'请选择'+item.title" v-model="formValidate[item.key]"></Date-picker>
          </Form-item>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
          <Form-item :prop="item.value">
            <Time-picker type="time" :placeholder="'请选择'+item.title" v-model="formValidate[item.key]"></Time-picker>
          </Form-item>
          </Col>
        </Row>
        <i-switch size="large" v-model="formValidate[item.key]" v-if="item.type == 'switch'">
          <span slot="open">开启</span>
          <span slot="close">关闭</span>
        </i-switch>
        <Cascader  v-if="item.type == 'cascader'" v-model="formValidate[item.key]" :data="item.value" trigger="hover"></Cascader>
        <UploadImg v-if="item.type == 'upload-img'" :default-list="formValidate[item.key]" :component-key="item.key" v-on:updateImgList="setUploadImg"></UploadImg>
        <Upload v-if="item.type == 'upload-files'"
                multiple
                action="//jsonplaceholder.typicode.com/posts/">
          <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
        </Upload>
        <Upload  v-if="item.type == 'upload-file'" action="//jsonplaceholder.typicode.com/posts/">
          <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
        </Upload>
        <BaiduMap v-if="item.type == 'bmap-edit'" :component-key="item.key"></BaiduMap>
        <MdEditor v-if="item.type == 'md-edit'"></MdEditor>
      
      </Form-item>
      </Col>
      <Col span="24">
      <Form-item>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </Form-item>
      </Col>
    </Row>  
    </Form>
    
    
    </Col>
  </Row>
</template>
<script>
  import UploadImg from "./uploadImg";
  import BaiduMap from "./baiduMap";
  export default {
    data () {
      return {
        api:{},
        formModel:'',
        gridSpan:'',
        fid:'',
        parameter:{},
        formValidate:{},
        ruleValidate:{}
      }
    },
    props: ['model','id'],
    mounted:function(){
      this.init();
    },
    activated: function () {
      this.init();
    },
    deactivated: function () {

    },
    methods: {
      init(){
        console.log(this.$props.model);
        console.log(this.$route.params.model);
        this.formModel = this.$props.model == null ? this.$route.params.model : this.$props.model;
        this.getState(this.formModel);
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      getState(model){
        console.log('获取状态完毕');
        const componentConfig = this.$store.state.model[model];
        this.parameter        = componentConfig.parameter;
        this.formValidate     = componentConfig.formValidate;
        this.gridSpan         = componentConfig.gridSpan;
        this.getRule();
        console.log(this.ruleValidate);
      },
      getRule:function(){
        for(const key in this.parameter){
          console.log(key);
          if(this.parameter[key].hasOwnProperty('rule')){
            this.ruleValidate[key] = this.parameter[key].rule;
          }
        }
      },
      setUploadImg(imgList){
        console.log(imgList);
        this.formValidate[imgList.key] = imgList.data;
      },
      getSpan(item){
        var thisSpan;
        if(item.hasOwnProperty('gridSpan')){
          return item.gridSpan;
        }else{
          if(item.type == 'formGroupTitle' || item.type == 'upload-img'){
            return 24;
          }else{
            return this.gridSpan;
          }
        }
        
      }
    },
    watch: {
      '$route' (to, from) {
        this.getState(this.$route.params.model);
      }
    },
    components:{
      'UploadImg':UploadImg,
      'BaiduMap':BaiduMap
    }
  }
</script>
<style>
.ued-form-item-content{

}
</style>