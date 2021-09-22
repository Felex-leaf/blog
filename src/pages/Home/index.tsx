import classNames from 'classnames';
import { Row, Col } from 'antd';

import { IProps } from '@/configs/interface';
import Button from '@/components/Button';
import Title from '@/components/Title';
import ArticleCard from '@/components/ArticleCard';
import ToTopBtn from '@/components/ToTopBtn';
import HomeCard from './components/Card';
import AnimationIcon from './components/AnimationIcon';
import EmptyIcon from './components/EmptyIcon';
import StructureIcon from './components/StructureIcon';
import { PAGE_ENUM } from '@/configs';
import { jump } from '@/utils';

import styles from './index.less';
import banner from '@/assets/banner.png';

interface IHome extends IProps {}

export default function Home(props: IHome) {
    const { history } = props;

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
            <div className={styles.bannerWrap}>
                <div className={classNames([styles.banner, 'typeArea'])}>
                    <div className={styles.titleWrap}>
                        <h1 className={styles.title}>排行榜上榜动画，基于antd-motion实现。</h1>
                        <h2>精美的动画让页面动起来</h2>
                        <div>
                            <Button
                                className={styles.button}
                                onClick={jump.bind(null, PAGE_ENUM.RANKING)}
                            >
                                立即查看
                            </Button>
                        </div>
                    </div>
                    <img src={banner} alt="banner" />
                </div>
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
            <div className={classNames(['typeArea', styles.selfWrap])}>
                <Title content="Personal Introduction">
                    <>
                        个人<span style={{ color: 'rgb(71 120 224)' }}>介绍</span>
                    </>
                </Title>
                <div className={styles.self}>
                    <div className={styles.imgWrap}></div>
                    <div className={styles.introduce}>
                        <h2>Web 前端工程师</h2>
                    </div>
                </div>
            </div>
            <div id="blogArticle" className={classNames(['typeArea', styles.blogArticleWrap])}>
                <Title content="Blog Article">
                    <>
                        博客<span style={{ color: 'rgb(71 120 224)' }}>文章</span>
                    </>
                </Title>
                <Row>
                    <Col span={10} className={styles.blogArticle}>
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
                            <div className={styles.imgWrap}></div>
                            <div>
                                <ArticleCard title="排行榜上榜动画">
                                    <div>
                                        基于react-lottie和antmotion结合实现的排行榜动画效果，点我进行查看！
                                    </div>
                                    <div style={{ marginTop: 10 }}>更多</div>
                                </ArticleCard>
                            </div>
                        </div>
                    </Col>
                    <Col
                        span={13}
                        offset={1}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <ArticleCard title="星星动画" onClick={jump.bind(null, PAGE_ENUM.STAR)}>
                            <div>基于react-lottie的实现的星星动画，点我进行查看！</div>
                            <div style={{ marginTop: 10 }}>更多</div>
                        </ArticleCard>
                        <ArticleCard title="3d展示" onClick={jump.bind(null, PAGE_ENUM.THREE)}>
                            <div>基于Threejs实现的3d展示效果，点我进行查看！</div>
                            <div style={{ marginTop: 10 }}>更多</div>
                        </ArticleCard>
                        <ArticleCard
                            title="canvas下雪动画"
                            onClick={jump.bind(null, PAGE_ENUM.SNOW)}
                        >
                            <div>基于原生canvas实现的下雪动画，点我进行查看！</div>
                            <div style={{ marginTop: 10 }}>更多</div>
                        </ArticleCard>
                    </Col>
                </Row>
            </div>
            <div className={styles.footer}>
                <div className="typeArea">
                    <Row>
                        <Col span={12} className={styles.footerLeft}>
                            Designed by Jerry
                        </Col>
                        <Col span={12} className={styles.footerRight}>
                            <div>
                                <div className={styles.footerTitle}>项目依赖</div>
                                <a
                                    className={styles.footerDec}
                                    href="https://umijs.org/zh-CN"
                                    target="_blank"
                                >
                                    umi
                                </a>
                                <a
                                    className={styles.footerDec}
                                    href="https://www.tslang.cn/"
                                    target="_blank"
                                >
                                    typescript
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <ToTopBtn />
        </div>
    );
}

const data = [
    {
        title: (
            <>
                <AnimationIcon style={{ fontSize: 50 }} />
                <div className={styles.cardTitle}>交互动画</div>
            </>
        ),
        children: (
            <div className={styles.cardIntroduce}>
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
            <div className={styles.cardIntroduce}>
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
        children: <div className={styles.cardIntroduce}></div>,
    },
    {
        title: (
            <>
                <EmptyIcon style={{ fontSize: 50 }} />
                <div className={styles.cardTitle}>装修中</div>
            </>
        ),
        children: <div className={styles.cardIntroduce}></div>,
    },
];
