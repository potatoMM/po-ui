<template>
  <div>
    <div class="topnav">
      <div class="logo">Po UI</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
      <span class="toggle-aside" @click="toggleAsideVisible"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref} from 'vue'
export default {
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
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaecef;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
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
    background: red;
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