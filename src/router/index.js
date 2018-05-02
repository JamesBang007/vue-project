import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//图片预览插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)


//使用组件三部曲：引入组件、注册组件、使用组件
import HelloWorld from '@/components/HelloWorld'
import login from '../components/login'
import home from '../components/home'
 //图片预览插件
import preview from '../components/VuePreview.vue'
import preview2 from '../components/VuePreview2.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: '登录',
      component: login
    },
    {    	
    	// 动态路径参数 以冒号开头
      path: '/home/:user',
      name: '主页',
      component: home
    },
    {
      path: '/preview',
      name: '图片预览插件',
      component: preview
    },
    {
      path: '/preview2',
      name: '图片预览插件',
      component: preview2
    },
    
    
    
  ]  
})
