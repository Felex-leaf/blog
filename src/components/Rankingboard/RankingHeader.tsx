import classNames from 'classnames';
import type { CSSProperties } from 'react';

import styles from './index.less';

interface IRankingButton {
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}

export const RankingButton = (props: IRankingButton) => {
  const { onClick, style, className } = props;
  return (
    <div className={classNames([styles.socialButton, className])} onClick={onClick} style={style}>
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
