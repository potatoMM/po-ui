<template>
  <div>
    <h1>Tabs 标签页</h1>
    <h5>分隔内容上有关联但属于不同类别的数据集合。</h5>
    <Demo :component="BaseTabs"/>
  </div>
</template>
<script lang='ts'>
import Demo from '../components/Demo.vue'
import BaseTabs from '../components/tabs/BaseTabs.vue'
export default {
  components:{
    Demo
  },
  setup () {
    return {
      BaseTabs
    }
  }
}
</script>