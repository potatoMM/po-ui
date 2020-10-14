<template>
  <div>
    <h1>Dialog 对话框</h1>
    <h5>在保留当前页面状态的情况下，告知用户并承载相关操作。</h5>
    <Demo :component="ToggleDemo"/>
    <Demo :component="showDemo"/>
  </div>
</template>
<script lang="ts">
import ToggleDemo from '../components/dialogs/BaseDialog.vue'
import showDemo from '../components/dialogs/SimpleDialog.vue'
import Demo from '../components/Demo.vue'
export default {
  components:{Demo},
  setup() {
    return {
      ToggleDemo,
      showDemo
    }
  }
}
</script>