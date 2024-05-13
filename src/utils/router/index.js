import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/views/MyHome'
import NotFound from '@/views/NotFound'
Vue.use(VueRouter)
const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:MyHome},
  {path:'*',component:NotFound}
]
const router = new VueRouter({
  routes
})
export default router