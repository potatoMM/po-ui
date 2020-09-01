<template>
  <div>
    <top-nav/>
    <div class="banner">
      <h1>Po UI</h1>
      <h2>一个基于 Vue 3 的 UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <router-link to="/doc">起步</router-link>
      </p>
    </div>
  </div>
</template>
<script lang='ts'>
import TopNav from '../components/TopNav.vue'
export default {
  components: {
    TopNav
  }
}
</script>
<style lang="scss" scoped>
$h: 30px;
$color: #42b983;
.banner {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 100px 0;
   margin-top: 60px;
   > .actions{
     padding: 20px 0;
     a {
       margin:0 8px;
       background: #fff;
       display: inline-block;
       line-height: $h + 2;
       border-radius: $h + 4 / 2;
       padding: 2px 16px;
       border: 1px solid $color;
       &:last-child{
         color: #fff;
         background-color: $color;
       }
       &:hover{
         color: #fff;
         background-color: $color;
       }
     }
   }
 }
</style>