import { defineConfig } from 'umi';

import routes from './config/routes';

export default defineConfig({
  base: '/blog/',
  publicPath: '/static/',
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
    '@themeColor': 'var(--theme-color)'
  },
  routes,
});
