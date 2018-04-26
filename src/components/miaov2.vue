<template>
	<div>
		<h2>我是miaov组件</h2>
		<p>{{$store.state.count}}</p>
		<button @click="changeCount">改变count</button>
	</div>	
</template>

<script type="text/javascript">
export default {
  methods:{
  	changeCount(){
  		// 改变vuex中状态
		this.$store.commit('updateCount',{
			add:10
		});
  	}
  }
}
</script>
