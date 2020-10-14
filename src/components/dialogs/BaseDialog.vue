<demo>
 基本用法（点击遮罩层不关闭）
</demo>
<template>
  <Button @click="toggleVisible">点击打开Dialog</Button>
  <Dialog
    v-model:visible="dialogVisible"
    :closeOnClickOverLay="maskClick"
    :ok="okFn"
    :cancel="cancelFn"
  >
    <template v-slot:title> this is title </template>
    <template v-slot:content> this is content </template>
  </Dialog>

  <p style="margin-top:20px">需要设置visible属性，它接收Boolean，当为true时显示 Dialog。</p>
  <p>需要设置closeOnClickOverLay属性，它接受Boolean，当为true时，点击遮罩层可以关闭Dialog。</p>
</template>
<script lang="ts">
import { ref } from 'vue';
import Button from "../../lib/Button.vue";
import Dialog from "../../lib/Dialog.vue";
export default {
  components: {
    Button,Dialog
  },
  setup () {
    const dialogVisible = ref(false)
    // 点击遮罩层是否关闭
    const maskClick = ref(false)
    const toggleVisible = () => {
      dialogVisible.value = !dialogVisible.value
    }
    const okFn = () => {
      console.log("this is ok");
      // return false 阻止关闭
    }
    const cancelFn = () => {
      console.log("this is cancel");
    }
    return {
      maskClick,
      dialogVisible,
      toggleVisible,
      cancelFn,
      okFn
    }
  }
};
</script>
