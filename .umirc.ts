import { defineConfig } from 'umi';
import pxtorem from 'postcss-pxtorem';

import routes from './config/routes';

export default defineConfig({
    base: '/',
    publicPath: '/blog/',
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
    lessLoader: {
        modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: 'true; @import "/src/styles/index.less";',
        },
    },
    title: 'Felex',
    favicon: './favicon.ico',
    routes,
    dynamicImport: {},
    extraPostCSSPlugins: [
        pxtorem({
            rootValue: 120, //这里根据设计稿大小配置,一般是375
            propList: ['*'],
            selectorBlackList: [
                '.ant-',
                '.dontR',
                '.ranking',
                '.scrollBox',
                '.close_box',
                '.open_box',
                '.box_',
                '.star_',
                '.big_box_',
                '.white_shine',
                '.yellow_shine',
                '.social',
            ], // 过滤掉.ant-开头的class，不进行rem转换
        }),
    ],
    mfsu: {},
    metas: [
        {
            name: 'keywords',
            content: 'Felex, blog',
        },
        {
            name: 'description',
            content: 'Felex 的个人博客，Designed by Jerry',
        },
        {
            name: 'author',
            content: 'Felex',
        },
    ],
});
