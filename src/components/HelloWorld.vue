<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <div>
        <router-link to="/" >首页</router-link>
        <router-link to="/a" >A页面</router-link>
        <router-link to="/b" >B页面</router-link>
        <button @click="show('a')">A页面</button>
        <button @click="show('b')">B页面</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    methods: {
      show(index) {
        if(index == 'a') {
            this.$router.push('/a')
        }
        if(index == 'b') {
            this.$router.push('/b')
        }
      }
    }
  }
  </script>
  