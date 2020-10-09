<template>
  <button class="po-switch" :class="{ 'po-checked': value }" @click="togglecheckedStatus" :style="{'backgroundColor':inactiveStyle}">
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref, computed } from "vue";
export default {
  props: {
    value: {
      type:Boolean,
      required: true,
    },
    // 选中颜色
    inactiveColor:{
      type:String,
      required: false,
    },
    // 默认颜色
    activeColor:{
      type:String,
      required: false
    },
    diasbled:{
      type:Boolean,
      required: false
    }
  },
  
  setup(props, context) {
    const checked = ref(false);
    const togglecheckedStatus = () => {
      context.emit("update:value", !props.value);
    };
    const inactiveStyle = computed(() => props.value? props.inactiveColor:props.activeColor)
    return {
      checked,
      togglecheckedStatus,
      inactiveStyle
    };
  },
};
</script>
<style lang="scss">
$h: 20px;
$h2: $h - 4px;
.po-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: #dcdfe6;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
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
  &.po-checked {
    background-color: #409eff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus{
    outline: none;
  }
  &:disabled{
    filter: grayscale(70%);
    cursor: not-allowed;
  }
}
</style>
