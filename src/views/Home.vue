<template>
<div>
  <div class="topnav-and-banner">
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
  <div class="features">
    <svg class="icon" >
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon" >
        <use xlink:href="#icon-typescript"></use>
      </svg>
      <svg class="icon" >
        <use xlink:href="#icon-deng"></use>
      </svg>
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
$green:#02bcb0;
.topnav-and-banner{
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}
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
       background: $green;
       display: inline-block;
       border-radius: 4px;
       padding: 8px 24px;
       border: 1px solid $green;
       color: #fff;
       &:hover{
         color: #fff;
         background-color: $color;
         text-decoration: none;
       }
     }
   }
 }
</style>