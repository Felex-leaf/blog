import classNames from 'classnames';

import { IProps } from '@/configs/interface';
import Button from '@/components/Button';
import Title from '@/components/Title';

import styles from './index.less';
import banner from '@/assets/banner.png';
import HomeCard from './components/Card';

interface IHome extends IProps {}

export default function Home(props: IHome) {
    const { history } = props;
    const jump = () => {
        history.push('/ranking');
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
                <div style={{ position: 'absolute', top: -50 }}>
                    <HomeCard>1</HomeCard>
                </div>
            </div>
            <div className={classNames(['typeArea', styles.selfWrap])}>
                <Title content="Personal introduction">
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
        </div>
    );
}
