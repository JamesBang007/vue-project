import Vue from 'vue'
import Vuex from 'vuex'

//把Vuex做为Vue的插件
Vue.use(Vuex);

//定义 store 容器

let store = new Vuex.Store({
	state:{
		count: 110 //定义一个状态
	},
	mutations:{
		updateCount: function(state,payload){
			state.count += payload.add;
		}
	}
});

//把实例报出去
export default store