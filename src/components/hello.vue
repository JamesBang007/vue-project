<template>
	<div>		
		<h2>hello，一起学习Vue</h2>
		<p>{{n}}</p>
	</div>
</template>

<script>
export default {
  data () {
    return {
      n: this.$store.state.count //n的初始值从vuex的state中拿
    }
  }
}
</script>

<style scoped>

</style>