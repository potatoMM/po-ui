import {createApp, h} from 'vue'
import Dialog from '../lib/Dialog.vue'
export const openDialog = (options) => {
  // 获取传递的参数
  const {title, content, ok, cancel,closeOnClickOverLay} = options
  // 创建一个容器用于挂载Dialog
  const div = document.createElement('div')
  // 将容器元素添加到body上
  document.body.appendChild(div)
  // 用过销毁
  const close = () => {
    DialogDiv.unmount(div)
    div.remove()
  }
  const DialogDiv = createApp({
    render () {
      return h(Dialog, {visible:true,
      'onUpdate:visible':(newVisible) => {
        if (newVisible === false) {
          close()
        }
      },ok,cancel,closeOnClickOverLay},{
        title,
        content
      })
    }
  })
  // 将生产的Dialog组件挂载到容器div上
  DialogDiv.mount(div)
}