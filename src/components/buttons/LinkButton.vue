<demo>
 链接按钮用法
</demo>
<template>
  <Button theme="link" >文字按钮</Button>
  <Button theme="link" disabled>禁用的链接按钮</Button>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>