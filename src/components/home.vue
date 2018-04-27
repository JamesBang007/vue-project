<template>
	<div>		
		<h2>后台主页</h2>
		<!--
			一个『路径参数』使用冒号 : 标记。
			当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。
		-->
		<p>{{hello}},{{ $route.params.user }}</p>
		<button @click="login">登录</button>
	</div>
</template>

<script>
export default {
  // data只能在本组件被改变
  data () {
    return {
      hello: '欢迎访问！'
    }
  },
  computed:{
  	
  },
  methods:{
  	login(){
  		console.log("登录...")
  	}
  },
  mounted() {
  	console.log("el 被新创建的 vm.$el 替换，并挂载到实例上");  	
	console.log(this.$route.params)
  }
  
}
</script>

<style scoped>
*{
	height: 30px; line-height: 30px; font-size: 16px;
	list-style: none;
}
</style>