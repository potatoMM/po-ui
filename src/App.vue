<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import Test from './components/Test.vue'
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width <= 500 ? false : true)
    provide("asideVisible", asideVisible)
  }
}
</script>
