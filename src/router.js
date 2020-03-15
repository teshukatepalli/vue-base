import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: Public,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(''),
        //   meta: { isPublic: true }
        }
    ]
    }
  ]
});


router.beforeEach(async (to, from, next) => {
  // Allow pages that don't require authentication
  if(to.meta.isPublic === true){
    next();
    return;
  }

  // All other pages should pass only when the user is logged in
  if(store.state.user.isLoggedIn){
    next();
  } else {
    next({name: 'login'});
  }
});


export default router;