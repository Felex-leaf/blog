import React, { CSSProperties } from 'react';
import styles from '../index.less';

interface IRanking {
  integralNum: number;
  onStarAnimation: boolean;
  style?: CSSProperties;
  onClick?: () => void;
  id?: string;
}

export default function Ranking(props: IRanking) {
  const { onClick, integralNum, onStarAnimation, id, style } = props;
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className={styles.ranking_content} onClick={handleClick}>
      <div className={styles.ranking_icon} style={style || {}}>
        <span
          id={id}
          className={`${styles.ranking_icon_star} ${
            onStarAnimation && styles.star_animation
          }`}
        />
        <span className={styles.ranking_icon_integral}>{integralNum}</span>
      </div>
    </div>
  );
}
