import React, { CSSProperties, MouseEvent } from 'react';
import classNames from 'classnames';

import Button from '@/components/Button';
import { jump } from '@/utils';
import styles from './index.less';

interface ICard {
  title: string;
  desc?: string;
  theme?: string;
  path?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}

export default function Card(props: ICard) {
  const { theme, title, desc, className, style, path, onClick } = props;
  const handleClick = (e: MouseEvent) => {
    if (onClick) onClick(e);
    if (path) jump(path);
  };
  return (
    <div
      className={classNames([styles.cardWrap, className])}
      style={style}
      onClick={handleClick}
    >
      <div>
        <h2 className={styles.dontRTitle}>{title}</h2>
        <div className={styles.dontRDesc}>{desc}</div>
      </div>
      <Button theme={theme}>阅读更多</Button>
    </div>
  );
}
