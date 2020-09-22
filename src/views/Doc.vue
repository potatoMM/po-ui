<template>
  <div class="layout">
    <top-nav class="nav" toggleMenuButtonVisible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
            <li><router-link to="/doc/intro">介绍</router-link></li>
            <li><router-link to="/doc/install">安装</router-link></li>
            <li><router-link to="/doc/get-started">开始使用</router-link></li>
        </ol>
         <ol>
           <li>
             <router-link to="/doc/switch">Switch 组件</router-link>
           </li>
           <li>
             <router-link to="/doc/button">Button 组件</router-link>
           </li>
            <li>
             <router-link to="/doc/dialog">Dialog 组件</router-link>
           </li>
           <li>
             <router-link to="/doc/tabs">Tabs 组件</router-link>
           </li>
         </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref} from 'vue'
import TopNav from '../components/TopNav.vue'

export default {
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible")
    return {
      asideVisible
    }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 150px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    h2{
      text-align: center;
    }
    flex-shrink: 0;
    z-index: 100;
  }
  > main {
    flex-grow: 1;
    padding: 20px;
  }
}
aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
  padding-top: 60px;
  background-color: #fff;
  border: 1px solid #eaecef;
  background-color: fff;
  > ol {
    > li {
      >a{
        display: block;
        padding: 10px 0;
        text-decoration: none;
        text-align: center;
      }
      .router-link-active{
        background: rgb(64, 169, 255);;
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
main {
  overflow: auto;
}
 </style>