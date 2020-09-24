<template>
  <div>
    <h1>Switch 开关 </h1>
    <h5>表示两种相互对立的状态间的切换，多用于触发「开/关」。</h5>
    <Demo :component="SwitchDemo"/>
    <Demo :component="SwitchInactiveColorDemo"/>
    <!-- <div class="demo">
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
    </div> -->
  </div>
</template>
<script lang="ts">
import Demo from '../components/Demo.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import SwitchInactiveColorDemo from '../components/SwitchInactiveColorDemo.vue'
export default {
  components: {Demo},
  setup () {
    return {
      Demo,
      SwitchDemo,
      SwitchInactiveColorDemo,
    }
  }
};
</script>
