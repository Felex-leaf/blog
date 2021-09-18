import { defineConfig } from 'umi';

import routes from './config/routes';

export default defineConfig({
    base: '/',
    publicPath: '/React-Component/',
    hash: true,
    history: {
        type: 'hash',
    },
    antd: {},
    nodeModulesTransform: {
        type: 'none',
    },
    fastRefresh: {},
    theme: {
        '@themeBgColor': 'var(--theme-bgColor)',
        '@themeColor': 'var(--theme-Color)',
    },
    routes,
    dynamicImport: {},
});
