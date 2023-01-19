import ListAnimation from '@/components/ListAnimation';
import { Spin } from 'antd';
import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import styles from './index.less';

const currentTab = 'friend';

const RankingList = () => {
  const [rankingHeight, setRankingHeight] = useState(0);

  useEffect(() => {
    const scrollDom = document.getElementById('scrollBox');
    if (!scrollDom) return;
    setRankingHeight(scrollDom.clientHeight);
  }, [document.readyState]);
  const rankingList = [
    {
      orgId: null,
      userId: 56037,
      userName: 'sxs',
      avatar: 'https://lcdns-pic.learnta.com/Fv_e8s7oM6FuwTLeyFY4JhXgWuAK',
      integralNum: 97,
      ranking: 1,
    },
    {
      orgId: null,
      userId: 56036,
      userName: 'sxs',
      avatar: 'https://lcdns-pic.learnta.com/Fv_e8s7oM6FuwTLeyFY4JhXgWuAK',
      integralNum: 97,
      ranking: 2,
    },
    {
      orgId: null,
      userId: 56036,
      userName: 'sxs',
      avatar: 'https://lcdns-pic.learnta.com/Fv_e8s7oM6FuwTLeyFY4JhXgWuAK',
      integralNum: 97,
      ranking: 3,
    },
    {
      orgId: null,
      userId: 56036,
      userName: 'sxs',
      avatar: 'https://lcdns-pic.learnta.com/Fv_e8s7oM6FuwTLeyFY4JhXgWuAK',
      integralNum: 97,
      ranking: 4,
    },
    {
      orgId: null,
      userId: 56036,
      userName: 'sxs',
      avatar: 'https://lcdns-pic.learnta.com/Fv_e8s7oM6FuwTLeyFY4JhXgWuAK',
      integralNum: 97,
      ranking: 5,
    },
    {
      orgId: null,
      userId: 56036,
      userName: 'sxs',
      avatar: 'https://lcdns-pic.learnta.com/Fv_e8s7oM6FuwTLeyFY4JhXgWuAK',
      integralNum: 97,
      ranking: 6,
    },
    {
      orgId: null,
      userId: 56036,
      userName: 'sxs',
      avatar: 'https://lcdns-pic.learnta.com/Fv_e8s7oM6FuwTLeyFY4JhXgWuAK',
      integralNum: 97,
      ranking: 7,
    },
  ];
  const to = 0;
  const current = 4;
  const viewNum = Math.ceil(rankingHeight / 60);
  const halfViewNum = Math.ceil(viewNum / 2);
  const targetIndex = to - halfViewNum > 0 ? to - halfViewNum : 0;
  const offset = rankingHeight - (viewNum - 1) * 60;
  const length = rankingList.length;
  const top = useMemo(() => {
    let count = halfViewNum * 60;
    if (current < halfViewNum) {
      count = current * 60;
    } else if (viewNum > length) {
      count = (viewNum - (viewNum - current)) * 60;
    } else if (viewNum - (length - current) - 1 >= halfViewNum) {
      count = (viewNum - (length - current) - 1) * 60 + offset;
    }
    return count;
  }, [viewNum, halfViewNum, length, current, offset]);
  const userId = 56037;
  return (
    <div className={styles.rankingList}>
      <div className={styles.rankingListTop}>
        <span>排行榜</span>
      </div>
      <div className={styles.rankingListContent}>
        <div className={styles.rankingContentItemNav}>
          <div className={styles.rankingContentLeft}>名次</div>
          <div style={{ flex: 1 }} />
          <div className={styles.rankingContentCenter}>用户</div>
          <span className={styles.rankingContentRight}>积分值</span>
          <div style={{ flex: 1 }} />
        </div>
        <div style={{ position: 'relative' }}>
          <div className={styles.scrollBox} id="scrollBox">
            {rankingList.length ? (
              <ListAnimation
                current={current}
                to={to}
                rankingHeight={rankingHeight}
                viewNum={viewNum}
              >
                {rankingList.map((item, i) => (
                  <div
                    className={styles.rankingContentItem}
                    id={i === targetIndex ? 'target' : ''}
                    style={
                      i === current
                        ? {
                            position: 'absolute',
                            top,
                            width: 'calc(100% - 60px)',
                            backgroundColor: '#fff',
                            transform: 'scale(1.03)',
                            border: '1px solid gold',
                            zIndex: 9999,
                          }
                        : undefined
                    }
                  >
                    <div className={styles.rankingContentLeft}>
                      {(item.ranking <= 3 || (i === current && to < 3)) && (
                        <span className={`rankingAward${item.ranking}`} />
                      )}
                      <span
                        className={classNames([styles.rankingNumber, 'rankingNumber'])}
                        style={userId === item.userId ? { color: '#07A0F2' } : { color: '#666666' }}
                      >
                        {item.ranking}
                      </span>
                    </div>
                    <div style={{ flex: 1 }} />
                    <div className={styles.rankingContentCenter}>
                      <img className={styles.rankingTableAvater} alt="" src={item.avatar} />
                      <span
                        style={
                          userId === item.userId
                            ? { color: '#07A0F2', fontSize: '20px' }
                            : { color: '#666666', fontSize: '18px' }
                        }
                      >
                        {item.userName}
                      </span>
                    </div>
                    <span
                      className={styles.rankingContentRight}
                      style={
                        userId === item.userId
                          ? { color: '#07A0F2', fontSize: '20px' }
                          : { color: '#666666', fontSize: '18px' }
                      }
                    >
                      {item.integralNum}
                    </span>
                    <div style={{ flex: 1 }} />
                  </div>
                ))}
              </ListAnimation>
            ) : (
              <Spin size="large" style={{ margin: '20px 0' }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingList;
