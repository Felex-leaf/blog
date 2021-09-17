import styles from './index.less';

interface IRankingButton {
    onClick?: () => void;
}

export const RankingButton = (props: IRankingButton) => {
    const { onClick } = props;
    return (
        <div className={styles.socialButton} onClick={onClick}>
            <div className={styles.rankingContent}>
                <div className={styles.rankingIcon}>
                    <span className={styles.rankingIconStar} />
                    <span className={styles.rankingIconIntegral}>97</span>
                </div>
                <span>我的积分</span>
            </div>
        </div>
    );
};
