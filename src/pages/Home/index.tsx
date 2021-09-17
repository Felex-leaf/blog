import classNames from 'classnames';

import { IProps } from '@/configs/interface';
import Button from '@/components/Button';
import Title from '@/components/Title';

import styles from './index.less';
import banner from '@/assets/banner.png';
import HomeCard from './components/Card';
import AnimationIcon from './components/AnimationIcon';
import ArticleCard from '@/components/ArticleCard';

interface IHome extends IProps {}

export default function Home(props: IHome) {
    const { history } = props;
    const jump = () => {
        history.push('/ranking');
    };

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
                            <Button className={styles.button} onClick={jump}>
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
                <div className={styles.blogArticle}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            width: 550,
                            cursor: 'pointer',
                        }}
                    >
                        <div className={styles.imgWrap}></div>
                        <div>
                            <ArticleCard title="排行榜上榜动画">
                                <div>
                                    Hi 头像最近进关于小程序 TabBar 创意动画，将从 TabBar
                                    类型、完整的 TabBar 创意动画进行分析。
                                </div>
                                <div style={{ marginTop: 10 }}>更多</div>
                            </ArticleCard>
                        </div>
                    </div>
                    <div style={{ flex: 1, paddingLeft: 40 }}>
                        <ArticleCard title="排行榜上榜动画">
                            <div>1</div>
                            <div>更多</div>
                        </ArticleCard>
                    </div>
                </div>
            </div>
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
    },
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
    },
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
    },
];
