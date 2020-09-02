<template>
  <div class="layout">
    <top-nav class="nav"/>
    <div class="content">
      <aside v-if="asideVisible">
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
           <!--<li>
             <router-link to="/doc/tabs">Tabs 组件</router-link>
           </li> -->
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
    flex-shrink: 0;
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
  > ol {
    > li {
      padding: 10px 0;
      text-align: center;
    }
  }
}
main {
  overflow: auto;
}
 </style>