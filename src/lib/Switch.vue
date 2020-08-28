<template>
  <button :class="{checked}" @click="togglecheckedStatus"><span></span></button>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  setup(){
    const checked = ref(false)
    const togglecheckedStatus = () => {
      checked.value = !checked.value
    }
    return {
      checked,
      togglecheckedStatus
    }
  }
}
</script>
<style lang="scss" scoped>
   $h: 20px;
   $h2: $h - 4px;
   button{
     height: $h;
     width: $h*2;
     border: none;
     background-color: #dcdfe6;
     border-radius: $h/2;
     position: relative;
   }
   span{
     position: absolute;
     top: 2px;
     left: 2px;
     height: $h2;
     width: $h2;
     background:white;
     border-radius: $h2 / 2;
     transition: left .25s;
   }
   button.checked{
     background-color: #409eff;
   }
   button.checked > span{
     outline: none;
    left: calc(100% - #{$h2} - 2px);
   }
   button:focus{
     outline: none;
   }
 </style> 