export default [
  {
    path: '/',
    redirect: '/home',
    exact: true,
  },
  {
    path: '/404',
    component: '@/pages/404',
  },
  {
    path: '/',
    component: '@/Layout',
    routes: [
      {
        path: '/home',
        component: '@/pages/Home',
        name: '首页',
        show: true,
      },
      {
        path: '/article',
        component: '@/pages/Blog',
        name: '博客',
        show: true,
      },
      {
        path: '/ranking',
        component: '@/pages/RankingList',
      },
      {
        path: '/star',
        component: '@/pages/Star',
      },
      {
        path: '/3d',
        component: '@/pages/MiNi',
      },
      {
        path: '/snow',
        component: '@/pages/Snow',
      },
      {
        path: '/hamburger',
        component: '@/pages/Hamburger',
      },
      {
        path: '*',
        redirect: '/404',
      },
    ],
  },
];
