<demo>
 文字按钮用法
</demo>
<template>
  <Button theme="text" >文字按钮</Button>
  <Button theme="text" disabled>禁用的文字按钮</Button>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>