<template>
  <div>
    <div>
      <Button>this is button</Button>
      <Button theme="button">this is button</Button>
      <Button theme="link">this is button</Button>
      <Button theme="text">this is button</Button>
    </div>
    <div>
      <Button size="big"> big button</Button>
      <Button>normal</Button>
      <Button size="small">small button</Button>
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
