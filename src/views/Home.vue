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
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-deng"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
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
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 100px 0;
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
 .features{
   margin: 64px auto;
    width: 400px;
    @media (min-width: 800px) {
      width: 800px;
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }
    >ul {
      display: flex;
      flex-wrap: wrap;
      >li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
          "icon title"
          "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        >svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }
        >h3 {
          grid-area: title;
          font-size: 28px;
        }
        >p {
          grid-area: text
        }
      }
    }
 }
</style>