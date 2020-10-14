<demo>
基础用法
</demo>
<template>
  <Tabs v-model:selected="currentTitle">
    <Tab title="用户管理">用户管理</Tab>
    <Tab title="配置管理">配置管理</Tab>
  </Tabs>
</template>
<script lang="ts">
import { ref } from 'vue'
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
export default {
  components: {
    Tabs, Tab
  },
  setup () {
    const currentTitle = ref('配置管理')
    return {
      currentTitle
    }
    return {
      currentTitle
    }
  }
};
</script>
