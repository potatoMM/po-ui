<demo>
 支持自定义颜色
</demo>
<template>
  <Switch v-model:value="bool" inactiveColor="#ff4949" />
</template>

 <script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const colorValue = ref(true);
    const bool = ref(false);
    return {
      bool,
      colorValue
    };
  },
};
</script>