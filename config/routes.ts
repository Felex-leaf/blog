export default [
    {
        path: '/',
        redirect: '/home',
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
                path: '/blog',
                component: '@/pages/Blog',
                name: '博客',
            },
            {
                path: '/ranking',
                component: '@/pages/Ranking',
                hidden: true,
            },
        ],
    },
];
