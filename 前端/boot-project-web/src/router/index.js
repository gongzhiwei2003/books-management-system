import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }
    {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
  }
]

/**
 * asyncRoutes 需要权限才能访问
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [


  // {
  //   path: '/book',
  //   component: Layout,
  //   alwaysShow: true,
  //   name: 'book',
  //   meta: { title: '图书管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: '/bookCategory',
  //       name: 'bookCategory',
  //       component: () => import('@/views/book/bookCategory'),
  //       meta: { title: '图书分类', icon: 'table' }
  //     },
  //     {
  //       path: '/bookList',
  //       name: 'bookList',
  //       component: () => import('@/views/book/bookList'),
  //       meta: { title: '图书列表', icon: 'table' }
  //     }
  //   ]
  // },

  // {
  //   path: '/notice',
  //   component: Layout,
  //   alwaysShow: true,
  //   name: 'notice',
  //   meta: { title: '公告管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: '/noticeList',
  //       name: 'noticeList',
  //       component: () => import('@/views/notice/noticeList'),
  //       meta: { title: '公告列表', icon: 'table' }
  //     }
  //   ]
  // },
  // // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
