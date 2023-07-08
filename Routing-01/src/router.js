import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, // first approach
    {
      name: 'team',
      path: '/teams',
      meta: {
        needsAuth: true,
      },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // /teams/teamId
      ],
    }, //  , alias: '/' second approach // our-domain.com/teams => ... loaded!!
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('Users before enter');
        console.log(to, from);
        next();
      },
    },
    { path: '/teams/new' }, // if path not dinamic it should go first to avoid conflict paths!!!!!!!!!!
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  if (to.meta.needsAuth) {
    console.log('needsAuth!');
  }
  next();
});

router.afterEach(function (to, from) {
  // send analitic to server
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
