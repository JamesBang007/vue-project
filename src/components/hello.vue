<template>
	<div>		
		<div>hello，一起学习Vue</div>
		<p>{{msg}}</p>
		<p>0</p>
	</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
	div{ font-size: 30px;}
</style>