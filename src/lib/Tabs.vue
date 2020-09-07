<template>
  <div>this is tabs </div>
</template>
<script lang='ts'>
import Tab from './Tab.vue'
export default {
  setup (props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tab子标签必须是Tab')
      }
    })
    return {
      defaults
    }
  }
}
</script>