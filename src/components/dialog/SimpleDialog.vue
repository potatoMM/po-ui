<demo>
动态挂载Dialog
</demo>
<template>
  <Button @click="showDialog">一句话打开Dialog</Button>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
import { openDialog } from '../../lib/openDialog'
export default {
  components: {
    Button
  },
  setup () {
    const showDialog = () => {
      openDialog({
        title:'标题',
        content:'内容',
        closeOnClickOverLay:true,
        ok() {
          console.log("一句话打开dialog的ok方法");
        },
        cancel() {
          console.log("一句话打开dialog的cancel方法");
        }
      })
    }
    return {
      showDialog
    }
  }
};
</script>
