<template>
  <div>
    <Button @click="toggleVisible">toggle</Button>
    <Button @click="showDialog">show</Button>
    <Dialog 
      v-model:visible="dialogVisible" 
      :closeOnClickOverLay="maskClick"
      :ok = "okFn"
      :cancel = 'cancelFn'>
      <template v-slot:title>
        this is title
      </template>
      <template v-slot:content>
        this is content
      </template>
    </Dialog>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { openDialog } from '../lib/openDialog'
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
    const showDialog = () => {
      openDialog({
        title:'标题',
        content:'内容',
        ok() {
          console.log("一句话打开dialog的ok方法");
        },
        cancel() {
          console.log("一句话打开dialog的cancel方法");
        }
      })
    }
    return {
      dialogVisible,
      maskClick,
      toggleVisible,
      showDialog,
      okFn,
      cancelFn
    }
  }
}
</script>