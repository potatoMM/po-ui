<template>
  <div>
    <div>
      <Button>按钮</Button>
      <Button theme="button">按钮</Button>
      <Button theme="link">链接按钮</Button>
      <Button theme="text">文本按钮</Button>
    </div>
    <div class="mr20">
      <Button size="big">大尺寸按钮</Button>
      <Button>普通尺寸按钮</Button>
      <Button size="small">小尺寸按钮</Button>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {},
};
</script>
<style lang="scss" scoped>
.mr20{
  margin-top:20px;
}
</style>
