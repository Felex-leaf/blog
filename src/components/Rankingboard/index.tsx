import type { CSSProperties } from 'react';
import React, { useEffect } from 'react';
import styles from './index.less';
import RankingList from './RankingList';

interface IRankingboard {
  style?: CSSProperties;
}

const Rankingboard = (props: IRankingboard) => {
  const { style } = props;
  const selfInfo = {
    orgId: null,
    userId: 56036,
    userName: 'sxs',
    avatar: 'https://lcdns-pic.learnta.com/Fv_e8s7oM6FuwTLeyFY4JhXgWuAK',
    integralNum: 97,
    ranking: 1,
  };
  useEffect(() => {}, []);

  return (
    <div className={styles.rankingWrap} style={style}>
      <div className={styles.rankingBoardTop}>
        <div className={styles.rankingBoardTopLeft}>
          <img
            alt=""
            src={selfInfo.avatar}
            className={styles.rankingBoardAvater}
          />
          <span className={styles.rankingBoardName}>{selfInfo.userName}</span>
        </div>
        <div className={styles.rankingBoardTopRight}>
          <span className={styles.rankingStar} />
          <span className={styles.rankingBoardIntegral}>
            {selfInfo.integralNum}
          </span>
        </div>
      </div>
      <RankingList />
    </div>
  );
};

export default Rankingboard;
