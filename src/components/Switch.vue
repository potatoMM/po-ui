<template>
  <div>
    <div>
      基本用法：<br />
      <Switch v-model:value="value" />
    </div>
    <div>
      自定义颜色：<br />
      <Switch v-model:value="colorValue" inactiveColor="#ff4949" />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },
  setup() {
    const value = ref(false);
    const colorValue = ref(true);
    return {
      value,
      colorValue,
    };
  },
};
</script>
