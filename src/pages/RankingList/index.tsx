import React, { useState } from 'react';

import Button from '@/components/Button';
import Rankingboard from '@/components/Rankingboard';
import { RankingButton } from '@/components/Rankingboard/RankingHeader';

import styles from './index.less';

let t: NodeJS.Timeout | null = null;

export default function RankingList() {
  const [show, setShow] = useState(true);
  const [isPC, setIsPC] = useState(false);
  const onRankingCallback = () => {
    if (t) return;
    setShow(false);
    t = setTimeout(() => {
      setShow(true);
      t = null;
    }, 200);
  };
  const change = () => {
    setIsPC(!isPC);
  };
  return (
    <div className={styles.dontRContainer}>
      <div className={styles.dontRbuttonWrap}>
        <RankingButton />
        <Button style={{ marginTop: 10 }} onClick={onRankingCallback}>
          重播
        </Button>
        <div className={styles.isShow}>
          <Button style={{ marginTop: 10 }} onClick={change}>
            设备切换
          </Button>
        </div>
      </div>
      {show && (
        <Rankingboard
          style={isPC ? { width: 768 } : { width: '100%', maxWidth: 375 }}
        />
      )}
    </div>
  );
}
