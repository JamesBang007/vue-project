import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


//使用组件三部曲：引入组件、注册组件、使用组件
import HelloWorld from '@/components/HelloWorld'
import login from '../components/login'
import home from '../components/home'


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
    }
    
    
    
  ]  
})
