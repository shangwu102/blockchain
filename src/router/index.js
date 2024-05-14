import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '@/views/MyHome'
import NotFound from '@/views/NotFound'
import MyTest from '@/views/MyTest.vue'
Vue.use(VueRouter)
const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:MyHome},
  {path:'/test',component:MyTest},
  {path:'*',component:NotFound}
]
const router = new VueRouter({
  routes
})
export default router