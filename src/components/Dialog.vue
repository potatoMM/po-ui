<template>
  <div>
    <Button @click="toggleVisible">toggle</Button>
    <Dialog 
      v-model:visible="dialogVisible" 
      :closeOnClickOverLay="maskClick"
      :ok = "okFn"
      :cancel = 'cancelFn'
      />
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
export default {
  components:{Dialog, Button},
  setup() {
    const dialogVisible = ref(false)
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
      dialogVisible,
      maskClick,
      toggleVisible,
      okFn,
      cancelFn
    }
  }
}
</script>