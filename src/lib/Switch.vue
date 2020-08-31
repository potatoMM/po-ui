<template>
  <button :class="{ checked: value }" @click="togglecheckedStatus" :style="{'backgroundColor':inactiveColor}">
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: {
      type:Boolean,
      required: true,
    },
    inactiveColor:{
      type:String,
      required: false,
      default:'#dcdfe6'
    },
  },
  setup(props, context) {
    const checked = ref(false);
    const togglecheckedStatus = () => {
      context.emit("update:value", !props.value);
    };
    return {
      checked,
      togglecheckedStatus,
    };
  },
};
</script>
<style lang="scss" scoped>
$h: 20px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: #dcdfe6;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 0.25s;
  }
  &.checked {
    background-color: #409eff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus{
    outline: none;
  }
}
</style>
