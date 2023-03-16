import { Col, Row } from 'antd';
import classNames from 'classnames';
import React from 'react';

import ArticleCard from '@/components/ArticleCard';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Title from '@/components/Title';
import ToTopBtn from '@/components/ToTopBtn';
import { PAGE_ENUM } from '@/configs';
import { jump } from '@/utils';
import AnimationIcon from './components/AnimationIcon';
import HomeCard from './components/Card';
import EmptyIcon from './components/EmptyIcon';
import StructureIcon from './components/StructureIcon';

import banner from '@/assets/banner.png';
import styles from './index.less';
import { contents } from '../Blog';

const data = [
  {
    title: (
      <>
        <AnimationIcon style={{ fontSize: 50 }} />
        <div className={styles.cardTitle}>交互动画</div>
      </>
    ),
    children: (
      <div className={styles.cardIntroduce} style={{ fontSize: 16 }}>
        <div>熟悉C3动画</div>
        <div>分享动画心得</div>
        <div>动画组件展示</div>
      </div>
    ),
    key: 'blogArticle',
  },
  {
    title: (
      <>
        <StructureIcon style={{ fontSize: 50 }} />
        <div className={styles.cardTitle}>基础架构</div>
      </>
    ),
    children: (
      <div className={styles.cardIntroduce} style={{ fontSize: 16 }}>
        <div>熟悉 React 框架</div>
        <div>熟悉 Vue 框架</div>
        <div>了解 小程序</div>
      </div>
    ),
  },
  {
    title: (
      <>
        <EmptyIcon style={{ fontSize: 50 }} />
        <div className={styles.cardTitle}>装修中</div>
      </>
    ),
    children: <div className={styles.cardIntroduce} style={{ fontSize: 16 }} />,
  },
  {
    title: (
      <>
        <EmptyIcon style={{ fontSize: 50 }} />
        <div className={styles.cardTitle}>装修中</div>
      </>
    ),
    children: <div className={styles.cardIntroduce} style={{ fontSize: 16 }} />,
  },
];

export default function Home() {
  const scrollTo = (id?: string) => {
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className={styles.bannerWrap} style={{ marginBottom: '150px' }}>
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
              >
                立即查看
              </Button>
            </div>
          </div>
          <img src={banner} alt="banner" />
        </div>
        <div className={classNames([styles.cardWrap, 'typeArea'])}>
          <div>
            {data.map((item) => (
              <HomeCard
                headStyle={{
                  color: '#162b6f',
                  fontSize: 18,
                }}
                data={item}
                onclick={scrollTo}
              >
                {item.children}
              </HomeCard>
            ))}
          </div>
        </div>
      </div>

      <div className={classNames(['typeArea', styles.selfWrap])}>
        <Title content="Personal Introduction">
          <>
            个人
            <span style={{ color: 'rgb(71 120 224)' }}>介绍</span>
          </>
        </Title>
        <div className={styles.self}>
          <div className={styles.imgWrap} />
          <div className={styles.introduce}>
            <h2>Web 前端工程师</h2>
          </div>
        </div>
      </div>
      <div
        id="blogArticle"
        className={classNames(['typeArea', styles.blogArticleWrap])}
      >
        <Title content="Blog Article">
          <>
            博客
            <span style={{ color: 'rgb(71 120 224)' }}>文章</span>
          </>
        </Title>
        <Row>
          <Col xs={24} sm={10} className={styles.blogArticle}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: 550,
                cursor: 'pointer',
              }}
              onClick={jump.bind(null, PAGE_ENUM.RANKING)}
            >
              <div className={styles.imgWrap} />
              <div>
                <ArticleCard title="排行榜上榜动画">
                  <div className="ellipsis">
                    基于react-lottie和antmotion结合实现的排行榜动画效果，点我进行查看！
                  </div>
                  <div style={{ marginTop: 10 }}>更多</div>
                </ArticleCard>
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={{
              span: 13,
              offset: 1,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {
              contents.slice(1, 4).map(({ title, path, desc }) => (
                <ArticleCard
                  title={title}
                  onClick={() => jump(path)}
                >
                  <div className="ellipsis">
                    {desc}
                  </div>
                  <div style={{ marginTop: 10 }}>更多</div>
                </ArticleCard>
              ))
            }
          </Col>
        </Row>
      </div>
      <Footer />
      <ToTopBtn />
    </div>
  );
}
