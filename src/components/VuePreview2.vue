<template>
  <!--
  <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
  -->
  <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)"> 
</template>

<script>
export default {
    data () {
      return {
        list: [
	        {
		        src: 'https://placekitten.com/600/400',
		        w: 600,
		        h: 400
	        },
	        {
		        src: 'https://placekitten.com/1200/900',
		        w: 1200,
		        h: 900
	        }
        ]
      }
    },
    methods: {
      handleClose () {
        console.log('close event')
      }
    }
  }
</script> 

<style>
</style>