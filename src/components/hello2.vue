<template>
	<div>		
		<h2>hello，一起学习Vue</h2>
		<p>{{n}}</p>
		<p>{{m}}</p>
		<button @click="changeCount">改变状态</button>
	</div>
</template>

<script>
export default {
	// data只能在本组件被改变
  data () {
    return {
      n: this.$store.state.count //n的初始值从vuex的state中拿
    }
  },
  computed:{
  	m(){
  		return this.$store.state.count
  	}
  },
  methods:{
  	changeCount(){
  		// 改变vuex中状态
  		this.$store.commit('updateCount',{
  			add:30
  		});
  	}
  }
  
}
</script>

<style scoped>

</style>