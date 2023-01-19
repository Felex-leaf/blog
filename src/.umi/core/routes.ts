// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/yf/Desktop/未命名文件夹 2/blog/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "redirect": "/home",
    "exact": true
  },
  {
    "path": "/404",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404')}),
    "exact": true
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'Layout' */'@/Layout')}),
    "routes": [
      {
        "path": "/home",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Home' */'@/pages/Home')}),
        "name": "首页",
        "exact": true
      },
      {
        "path": "/article",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Blog' */'@/pages/Blog')}),
        "name": "博客",
        "exact": true
      },
      {
        "path": "/ranking",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__RankingList' */'@/pages/RankingList')}),
        "hidden": true,
        "exact": true
      },
      {
        "path": "/star",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Star' */'@/pages/Star')}),
        "hidden": true,
        "exact": true
      },
      {
        "path": "/3d",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__MiNi' */'@/pages/MiNi')}),
        "hidden": true,
        "exact": true
      },
      {
        "path": "/snow",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Snow' */'@/pages/Snow')}),
        "hidden": true,
        "exact": true
      },
      {
        "path": "/hamburger",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Hamburger' */'@/pages/Hamburger')}),
        "hidden": true,
        "exact": true
      },
      {
        "path": "/*",
        "redirect": "/404",
        "hidden": true,
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404')})
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
