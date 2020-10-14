<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" >
        <use xlink:href="#icon-tudou"></use>
      </svg>
      Po UI
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggle-aside" @click="toggleAsideVisible">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref} from 'vue'
export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default:false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible")
    const toggleAsideVisible = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      asideVisible,
      toggleAsideVisible
    }
  }
}
</script>
<style lang="scss" scoped>
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid #eaecef;
  background: #fff;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
    svg{
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  .toggle-aside{
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu{
      display: none;
    }
    > .logo{
      margin: 0 auto;
    }
    > .toggle-aside{
      display: inline-block;
    }
  }
}
</style>