<template>
  <div>
    <Button>this is button</button>
    <Button theme="button">this is button</button>
    <Button theme="link">this is button</button>
    <Button theme="text">this is button</button>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
  },
};
</script>
