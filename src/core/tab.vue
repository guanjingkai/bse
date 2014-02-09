<script>
import mainMenuConfig from '../config/main_menu.js'
export default {
    install: function(Vue, options) {
        // 添加的内容写在这个函数里面
        Vue.prototype.openPage = function(componentName, componentKey, pageId) {
            /*
            组件名称
            页面ID
            */
            //判断组件是否已经打开
            if (this.$store.state.tab.openComponentsList.hasOwnProperty(pageId)) {
                this.$store.commit('setThisPageId', {
                    pageId: pageId
                })
                this.router.push({ path: pageId });
                console.log('组件已经打开');
            } else {
                this.$store.commit('createTab', {
                    pageId: pageId,
                    key: componentKey,
                    title: componentName,
                })
                this.$store.commit('setThisPageId', {
                    pageId: pageId
                })
                this.router.push({ path: pageId });
                console.log('组件首次渲染');
            }
            console.log('创建Tab页');
        }
        Vue.prototype.openComponent = function(item){
            console.log("根据组件名称直接打开界面1");
            const componentName = mainMenuConfig[item].title;
            const componentKey  = mainMenuConfig[item].key;
            const pageId        = mainMenuConfig[item].path;
            if (this.$store.state.tab.openComponentsList.hasOwnProperty(pageId)) {
                this.$store.commit('setThisPageId', {
                    pageId: pageId
                })
                this.router.push({ path: pageId });
                console.log('组件已经打开');
            } else {
                this.$store.commit('createTab', {
                    pageId: pageId,
                    key: componentKey,
                    title: componentName,
                })
                this.$store.commit('setThisPageId', {
                    pageId: pageId
                })
                this.router.push({ path: pageId });
                console.log('组件首次渲染');
            }
            console.log('创建Tab页');
        }
    }
};
</script>