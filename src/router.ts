import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components//tabs.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/doc',
    component: Doc,
    children: [{
      path:'intro',
      component:Intro
    },{
      path:'get-started',
      component:GetStarted
    },{
      path:'install',
      component:Install
    },{
      path:'switch',
      component:Switch
    },{
      path:'button',
      component:Button
    },{
      path:'dialog',
      component:Dialog
    },{
      path:'tabs',
      component:Tabs
    }]
  }]
})
export default router
