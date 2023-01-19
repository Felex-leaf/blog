import React, { useEffect, useState } from 'react';
import { PAGE_ENUM } from '@/configs';
import { jump } from '@/utils';

import styles from './index.less';

let oldTime = 5;

export default function NotFound() {
  let t: NodeJS.Timeout | null = null;
  let i: NodeJS.Timer | null = null;
  const [time, setTime] = useState(5);
  useEffect(() => {
    t = setTimeout(() => {
      jump(PAGE_ENUM.HOME);
    }, 5000);
    i = setInterval(() => {
      setTime(oldTime > 0 ? oldTime - 1 : 0);
      oldTime -= 1;
    }, 1000);
    return () => {
      if (t) clearTimeout(t);
      if (i) clearInterval(i);
      oldTime = 5;
    };
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {time}
        秒后，
        <div onClick={() => jump(PAGE_ENUM.HOME)}>返回首页</div>
      </h1>
    </div>
  );
}
