<template>
    <HelloWorld :msg="msg"/>
    <router-view></router-view>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

    export default{
        name: 'App',
        data(){
            return {
                message: 'xxxx',
                msg: 'Welcome to Your Vue.js App',
            }
        },
        components:{HelloWorld}
    }
</script>

<style>
#app{
    background-color: blue;
}
</style>