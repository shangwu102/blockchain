import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/views/MyHome'
Vue.use(VueRouter)
const routes = [
  {path:'/',redirect:MyHome},
  {path:'/home',component:MyHome}
]
const router = new VueRouter({
  routes
})
export default router