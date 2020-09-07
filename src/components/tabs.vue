<template>
  <div>
    <Tabs>
      <Tab title="标签一">内容一</Tab>
      <Tab title="标签二">内容二</Tab>
    </Tabs>
  </div>
</template>
<script lang='ts'>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
  components:{
    Tabs, Tab
  }
}
</script>