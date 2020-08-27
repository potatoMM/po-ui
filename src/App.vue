<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide } from 'vue'
import Test from './components/Test.vue'
export default {
  name: 'App',
  setup(){
    const asideVisible = ref(false)
    provide("asideVisible", asideVisible)
  }
}
</script>
