import Home from '../pages/Home.vue';
import UserCenter from '../pages/UserCenter.vue';
import ArticleDetail from '../pages/ArticleDetail.vue';
export default {
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/', component: Home,
    },
    {
      path: '/user', component: UserCenter,
    },
    {
      path: '/articleDetail', component:ArticleDetail,
    }
  ]
}
