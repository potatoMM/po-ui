<demo>
 不同尺寸的按钮
</demo>
<template>
  <div>
    <Button size="small">小尺寸按钮</Button>
    <Button>普通尺寸按钮</Button>
    <Button size="big">大尺寸按钮</Button>
  </div>
  <div style="margin-top:20px">
    <Button size="small" level="main">小尺寸按钮</Button>
    <Button level="main">普通尺寸按钮</Button>
    <Button size="big" level="main">大尺寸按钮</Button>
  </div>
  <div style="margin-top:20px">
    <Button size="small" level="danger">小尺寸按钮</Button>
    <Button level="danger" >普通尺寸按钮</Button>
    <Button size="big" level="danger">大尺寸按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>