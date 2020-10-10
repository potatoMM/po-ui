<template>
  <div>
    <h1>Button 按钮</h1>
    <h5>常用的操作按钮。</h5>
    <Demo :component="BaseButton"/>
    <Demo :component="SizeButton"/>
    <Demo :component="TextButton"/>
    <Demo :component="LinkButton"/>
  </div>
</template>
<script lang="ts">
import Demo from '../components/Demo.vue'
import BaseButton from '../components/buttons/BaseButton.vue'
import SizeButton from '../components/buttons/SizeButton.vue'
import TextButton from '../components/buttons/TextButton.vue'
import LinkButton from '../components/buttons/LinkButton.vue'
export default {
  components: { Demo },
  setup() {
    return {
      BaseButton,
      SizeButton,
      TextButton,
      LinkButton
    }
  },
};
</script>
