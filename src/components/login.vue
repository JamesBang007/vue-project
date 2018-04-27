<template>
	<div>		
		<h2>登录页</h2>
		<ul>
			<li>用户名：<input type="text" v-model="uname"/></li>
			<li>密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" v-model="password"/></li>
		</ul>
		<button @click="login">登录</button>
	</div>
</template>

<script>
export default {
  // data只能在本组件被改变
  data () {
    return {
    	uname: '',
    	password: '',
        n: 0
    }
  },
  computed:{
  	
  },
  methods:{
  	login(){
  		console.log("登录...")
  		var that = this;
  		setTimeout(function(){  			
  			that.$router.push({ path: '/home/'+that.uname });
  		},1500);
  	}
  },
  mounted() {
  	console.log("el 被新创建的 vm.$el 替换，并挂载到实例上");  	
	console.log(this.$route)
  }
  
}
</script>

<style scoped>
li{
	height: 30px; line-height: 30px; font-size: 16px;
	list-style: none;
}
</style>