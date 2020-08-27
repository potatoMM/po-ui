import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Test from './components/Test.vue'
import Helloword from './components/HelloWorld.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [{
    path: '/',
    component: Test
  }, {
    path: '/helloword',
    component: Helloword
  }]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
