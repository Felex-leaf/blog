import classNames from 'classnames';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';

import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Title from '@/components/Title';
import { PAGE_ENUM } from '@/configs';
import store from '@/store';
import { jump } from '@/utils';
import Card from './components/Card';

import ToTopBtn from '@/components/ToTopBtn';
import styles from './index.less';

export const contents = [
  {
    title: '排行榜上榜动画',
    desc: '基于react-lottie和antmotion结合实现的排行榜动画效果，点我进行查看！',
    path: PAGE_ENUM.RANKING,
  },
  {
    title: '图片背景色计算',
    desc: '根据图片边缘原色计算出主要色调输出，点我进行查看！',
    path: PAGE_ENUM.IMAGE,
  },
  {
    title: '星星动画',
    desc: '基于react-lottie的实现的星星动画，点我进行查看！',
    path: PAGE_ENUM.STAR,
  },
  {
    title: '3d展示',
    desc: '基于Threejs实现的3d展示效果，点我进行查看！',
    path: PAGE_ENUM.THREE,
  },
  {
    title: 'canvas下雪动画',
    desc: '基于原生canvas实现的下雪动画，点我进行查看！',
    path: PAGE_ENUM.SNOW,
  },
  {
    title: '汉堡图标',
    desc: '基于css3实现的汉堡图标，点我进行查看！',
    path: PAGE_ENUM.HAMBURGER,
  },
];

export default observer(() => {
  const [theme, setTheme] = useState('#333');
  const { ThemeStore } = store;
  useEffect(() => {
    setTheme(ThemeStore.isDark ? '#fff' : '#0d5afe');
  }, [ThemeStore.isDark]);
  return (
    <div>
      <div className={styles.bannerWrap} style={{ marginBottom: '40px' }}>
        <div
          className={classNames([
            styles.banner,
            styles.dontRbanner,
            'typeArea',
          ])}
        >
          <div className={styles.titleWrap}>
            <h1 className={classNames([styles.title, styles.dontRTitle])}>
              排行榜上榜动画，基于antd-motion实现。
            </h1>
            <h2 className={styles.dontRDescTitle}>精美的动画让页面动起来</h2>
            <div>
              <Button
                className={styles.button}
                onClick={() => jump(PAGE_ENUM.RANKING)}
                theme={theme}
              >
                立即查看
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="typeArea">
        <div className={styles.articleWrap}>
          <Title content="Article">
            <>
              文章
              <span style={{ color: 'rgb(71 120 224)' }}>列表</span>
            </>
          </Title>
          <div className={styles.cardWrap}>
            {contents.map(({ title, desc, path }) => (
              <Card
                title={title}
                desc={desc}
                path={path}
                theme={theme}
                className={styles.card}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ToTopBtn />
    </div>
  );
});
