<template>
  <button class="po-button" :class="classes">
    <slot />
  </button>
</template>
<script>
/***
 * Vue3属性绑定
 * 1. 默认所有属性都绑定到根元素
 * 2. 使用inheritAttrs: false可以取消默认邦迪
 * 3. 使用$attrs或context.attrs获取所有属性
 * 4. 使用v-bind="$attrs"批量绑定属性
 * 5. 使用const {size, ...rest} = context.attrs将属性分开
 */
/***
 * props 与 attrs 的区别
 * props要先声明才能取值，attrs不用先声明
 * props不包含事件 attrs包含
 * props支持string以外的类型 attrs只有string类型
 * props没有声明的属性，会跑到attrs里
 */
import { computed } from "vue";
export default {
  // 不继承
  // inheritAttrs: false
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
  },

  setup(props) {
    const { theme, size, level, type } = props;
    const classes = computed(() => {
      return {
        [`po-theme-${theme}`]: theme,
        [`po-size-${size}`]: size,
        [`po-level-${level}`]: level,
      };
    });
    return {
      classes,
    };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$white: #fff;
.po-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.po-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.po-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.po-theme-button {
    &.po-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }
    &.po-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
    &.po-theme-button {
      &.po-level-main {
        background: $blue;
        color: white;
        border-color: $blue;
        &:hover,
        &:focus {
          background: darken($blue, 10%);
          border-color: darken($blue, 10%);
        }
      }
      &.po-level-danger {
        background: $red;
        border-color: $red;
        color: white;
        &:hover,
        &:focus {
          background: darken($red, 10%);
          border-color: darken($red, 10%);
        }
      }
    }
    &.po-theme-link {
      &.po-level-danger {
        color: $red;
        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }
    }
    &.po-theme-text {
      &.po-level-main {
        color: $blue;
        &:hover,
        &:focus {
          color: darken($blue, 10%);
        }
      }
      &.po-level-danger {
        color: $red;
        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }
    }
  }
  &:disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
</style>