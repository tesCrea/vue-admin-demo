import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  // history:createWebHistory() hash:createWebHashHistory()
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      name:'index',
      component:()=>import(/* webpackChunkName: "index" */ '../views/index.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import(/* webpackChunkName: "login" */ '../views/login.vue')
    },
    {
      path: '/userInfo',
      name: 'home',
      component: ()=>import(/* webpackChunkName: "new" */ '../views/userInfo.vue')
    },
    {
      path:'/updatePwd',
      name:'updatePwd',
      component:()=>import('@/views/updatePwd')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
