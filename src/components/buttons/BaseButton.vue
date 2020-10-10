<demo>
 基础按钮用法
</demo>
<template>
  <Button>默认按钮</Button>
  <Button level="main">主要按钮</Button>
  <Button level="danger">危险按钮</Button>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>