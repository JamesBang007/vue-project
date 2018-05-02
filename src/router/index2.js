import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

import miaov from '../components/miaov.vue'
/*
//图片预览插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

import preview from '../views/VuePreview.vue'
*/

const routes = [
	{
	  path: '/',
	  name: 'miaov',
	  component: miaov
  }

]

export default new Router({
	routes
	/*
	routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
	*/
  
})
