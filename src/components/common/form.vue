<template>
  <Row>
    <Col span="24">

    <Form ref="formValidate" :model="thisFormValidate" :rules="thisRuleValidate" :label-width="100" style="max-width:900px;">
    <Row>
      <Col v-for="(item,key) in thisParameter" :span="getSpan(item)">
      <Form-item  :label="item.title" :prop="item.key">
        <Alert v-if="item.type == 'formGroupTitle'" style="margin-left:-100px;">{{item.value}}</Alert>
        <p v-if="item.type == 'kong'" style="display:block;height:33px;"></p>
        <Input v-if="item.type == 'input'" v-model="thisFormValidate[item.key]" :placeholder="'请输入'+item.title"></Input>
        <Input v-if="item.type == 'textarea'"  v-model="thisFormValidate[item.key]" type="textarea" :autosize="{minRows: 2,maxRows: 5}" :placeholder="'请输入'+item.title"></Input>
        <Select v-if="item.type == 'select'" v-model="thisFormValidate[item.key]":placeholder="'请选择'+item.title" :placement="item.hasOwnProperty('placement') ? item.placement :'bottom'">
          <Option v-for="(option,key) in item.value" :value="option.key">{{option.value}}</Option>
        </Select>
        <Radio-group v-if="item.type == 'radio'" v-model="thisFormValidate[item.key]">
          <Radio v-for="(radio,key) in item.value" :label="radio.key">{{radio.value}}</Radio>
        </Radio-group>
        <Checkbox-group v-if="item.type == 'checkbox'" v-model="thisFormValidate[item.key]">
          <Checkbox v-for="(checkbox,key) in item.value" :label="checkbox.value"></Checkbox>
        </Checkbox-group>
        <DatePicker  v-if="item.type == 'date-time-range'" type="datetimerange" :placeholder="'请选择'+item.title" v-model="thisFormValidate[item.key]" style="width: 300px"></DatePicker>
        <Row v-if="item.type == 'date-time'">
          <Col span="11">
          <Form-item :prop="item.key">
            <Date-picker type="date" :placeholder="'请选择'+item.title" v-model="thisFormValidate[item.key]"></Date-picker>
          </Form-item>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
          <Form-item :prop="item.value">
            <Time-picker type="time" :placeholder="'请选择'+item.title" v-model="thisFormValidate[item.key]"></Time-picker>
          </Form-item>
          </Col>
        </Row>
        <i-switch size="large" v-model="thisFormValidate[item.key]" v-if="item.type == 'switch'">
          <span slot="open">开启</span>
          <span slot="close">关闭</span>
        </i-switch>
        <Cascader  v-if="item.type == 'cascader'" v-model="thisFormValidate[item.key]" :data="item.value" trigger="hover"></Cascader>
        <UploadImg v-if="item.type == 'upload-img'" :default-list="thisFormValidate[item.key]" :component-key="item.key" v-on:updateImgList="setUploadImg"></UploadImg>
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
        <!--动态组件传递-->
        <component v-if="item.type == 'component'" :is="otherComponent[item.key]"></component>
      </Form-item>
      </Col>
      <Col span="24">
      <Form-item>
        <Button type="primary" @click="handleSubmit('thisFormValidate')">提交</Button>
        <Button type="ghost" @click="handleReset('thisFormValidate')" style="margin-left: 8px">重置</Button>
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
  import aaaa from "../ma/component/availableTime"
  export default {
    data () {
      return {
        api:{},
        formModel:'',
        thisGridSpan:'',
        fid:'',
        thisParameter:{},
        thisFormValidate:{},
        thisRuleValidate:{},
        otherComponent:{}
      }
    },
    props: {
          model: {
              default: function () {
                  return null
              }
          },id: {
              default: function () {
                  return null
              }
          },parameter: {
              default: function () {
                  return {}
              }
          },formValidate: {
              default: function () {
                  return {}
              }
          },gridSpan: {
              default: function () {
                  return 13
              }
          }},
    mounted:function(){
      this.init();
    },
    activated: function () {
      this.init();
      console.log(this);
    },
    deactivated: function () {

    },
    methods: {
      init(){
        if(this.$props.model == null){
          this.formModel = {};
          this.formModel.parameter     = this.$props.parameter;
          this.formModel.formValidate  = this.$props.formValidate;
          this.formModel.gridSpan      = this.$props.gridSpan;
        }else{
            this.formModel = this.$props.model;
        }
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
        const componentConfig = model;
        this.thisParameter        = componentConfig.parameter;
        this.thisFormValidate     = componentConfig.formValidate;
        this.thisGridSpan         = componentConfig.gridSpan;
        this.getRule();
      },
      getRule:function(){
        for(const key in this.thisParameter){
          if(this.thisParameter[key].hasOwnProperty('rule')){
            this.thisRuleValidate[key] = this.thisParameter[key].rule;
          }
          //寻找自定义组件
          const otherComponentIndex = 0;
          if(this.thisParameter[key].type == "component"){
            this.otherComponent[this.thisParameter[key].key] = this.thisParameter[key].component;
          }
        }
      },
      setUploadImg(imgList){
        this.thisFormValidate[imgList.key] = imgList.data;
      },
      getSpan(item){
        var thisSpan;
        if(item.hasOwnProperty('gridSpan')){
          return item.gridSpan;
        }else{
          if(item.type == 'formGroupTitle' || item.type == 'upload-img'){
            return 24;
          }else{
            return this.thisGridSpan;
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
