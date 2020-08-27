<template>
  <div class="nav">导航栏｜  <router-link to="/helloword">helloword</router-link> | <router-link to="/">Test</router-link></div>
  <hr/>
  <router-view></router-view>
</template>

<script>
import Test from './components/Test.vue'
export default {
  name: 'App',
}
</script>
