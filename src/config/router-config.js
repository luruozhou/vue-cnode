import Home from '../pages/Home.vue';
import UserCenter from '../pages/UserCenter.vue';

export default {
  routes: [
    {
      path: '/', component: Home,
    },
    {
      path: '/user', component: UserCenter,
    },
  ]
}
