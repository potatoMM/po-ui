<template>
  <div class="po-tabs">
    <div class="po-tabs-nav" ref="container">
      <div 
        class="po-tabs-nav-item" 
        @click="select(t)" 
        :class="{selected: t=== selected}" 
        v-for="(t, index) in titles" :key="index"
        :ref="el => {if (t===selected) selectedItem = el}"
        >
        {{ t }}
      </div>
      <div class="po-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="po-tabs-content">
      <component
        class="po-tabs-content-item"
        v-for="(c, index) in defaults"
        :is="c"
        :key="index"
        :class="{selected:c.props.title === selected}"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, onUpdated, reactive, ref } from 'vue';
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const selectedItem = ref < HTMLDivElement > (null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const changeIndicator = () => {
      const width = selectedItem.value.getBoundingClientRect().width
      indicator.value.style.width = width + 'px'
      const { left:containerLeft } = container.value.getBoundingClientRect()
      const {left:resultLeft} = selectedItem.value.getBoundingClientRect()
      
      const left = resultLeft - containerLeft
      indicator.value.style.left = left + 'px'
    }
    // 只在第一次渲染执行
    onMounted(changeIndicator)
    onUpdated(changeIndicator)
    
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tab子标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const select = (title:string) => {
      context.emit('update:selected', title)
    }
    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
      changeIndicator
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.po-tabs {
  &-nav {
    position: relative;
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item{
      display: none;
      &.selected{
        display: block;
      }
    }
  }
}
</style>
