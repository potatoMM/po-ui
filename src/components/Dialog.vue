<template>
  <div>
    <Button @click="toggleVisible">toggle</Button>
    <Dialog :visible="visible"/>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
export default {
  components:{Dialog, Button},
  setup() {
    const visible = ref(false)
    const toggleVisible = () => {
      visible.value = !visible.value
    }
    return {
      visible,
      toggleVisible
    }
  }
}
</script>