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
            },
            {
                path: '/article',
                component: '@/pages/Blog',
                name: '博客',
            },
            {
                path: '/ranking',
                component: '@/pages/RankingList',
                hidden: true,
            },
            {
                path: '/star',
                component: '@/pages/Star',
                hidden: true,
            },
            {
                path: '/3d',
                component: '@/pages/MiNi',
                hidden: true,
            },
            {
                path: '/snow',
                component: '@/pages/Snow',
                hidden: true,
            },
            {
                path: '*',
                redirect: '/404',
                hidden: true,
            },
        ],
    },
];
