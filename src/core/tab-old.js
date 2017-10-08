export default {
  create:function (componentName,pageId) {
    /*
    组件名称
    页面ID
    */
    //判断组件是否已经打开
    if(this.$store.state.tab.openComponentsList.hasOwnProperty(componentName)){
      console.log('组件已经打开');
    }else{
      console.log('组件首次渲染');
    }
    console.log('创建Tab页');
  },
  close:function(){
    console.log('关闭ab页');
  }
}
