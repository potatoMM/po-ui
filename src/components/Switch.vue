<template>
  <div>
    <h1>Switch 开关 </h1>
    <h4>表示两种相互对立的状态间的切换，多用于触发「开/关」。</h4>
    <div class="demo">
      <h2>基本用法：</h2>
       <div class="demo-component">
        <component :is="SwitchDemo"/>
       </div>
       <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
       <pre class="language-html" v-html="Prism.highlight(SwitchDemo.__sourceCode,Prism.languages.html,'html')"/>
      </div>
    </div>
    <div class="demo">
      <h2>自定义颜色：</h2>
       <div class="demo-component">
         <component :is="SwitchInactiveColorDemo"/>
       </div>
       <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
       <pre class="language-html" v-html="Prism.highlight(SwitchInactiveColorDemo.__sourceCode,Prism.languages.html,'html')"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
import { ref } from "vue";
import Button from "../lib/Button.vue";
import SwitchDemo from '../components/SwitchDemo.vue'
import SwitchInactiveColorDemo from '../components/SwitchInactiveColorDemo.vue'
export default {
  components: {Button},
  setup () {
    return {
      SwitchDemo,
      SwitchInactiveColorDemo,
      Prism
    }
  }
};
</script>
<style lang="scss" scoped>
 $border-color: #d9d9d9;

 .demo {
   border: 1px solid $border-color;
   margin: 16px 0 32px;

   >h2 {
     font-size: 20px;
     padding: 8px 16px;
     border-bottom: 1px solid $border-color;
   }

   &-component {
     padding: 16px;
   }

   &-actions {
     padding: 8px 16px;
     border-top: 1px dashed $border-color;
   }

   &-code {
     padding: 8px 16px;
     border-top: 1px dashed $border-color;

     >pre {
       line-height: 1.1;
       //font-family: Consolas, 'Courier New', Courier, monospace;
       margin: 0;
     }
   }
 }

 </style>