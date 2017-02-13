import Home from '../pages/Home.vue';
import UserCenter from '../pages/UserCenter.vue';
import ArticleDetail from '../pages/ArticleDetail.vue';
import Login from '../pages/Login.vue';
import Mine from '../pages/Mine.vue';
import Publish from '../pages/Publish.vue';
import Message from '../pages/Message.vue';

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
      path: '/home', component: Home,
    },
    
    {
      path: '/user', component: UserCenter,
    },
    {
      path: '/login', component:Login,
    },
    {
      path: '/mine', component:Mine,
    },
    {
      path: '/publish', component:Publish,
    },
    {
      path: '/message', component:Message,
    },
    {
      path: '/article/:id', 
      name:'article',
      component:ArticleDetail
    }
  ]
}
