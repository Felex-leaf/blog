import classNames from 'classnames';
import type { CSSProperties, MouseEvent } from 'react';
import React, { memo, useEffect, useRef } from 'react';

import styles from './index.less';

interface IButton {
  children?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  theme?: string;
}

function Button(props: IButton) {
  const ref = useRef<HTMLDivElement>(null);
  const { children = '确认', style, className, theme, ...arg } = props;
  const allStyle = {
    ...style,
  };
  useEffect(() => {
    if (!theme) return;
    const btn = ref.current;
    if (btn) btn.style.setProperty('--theme-color--', theme);
  }, [theme]);
  return (
    <div
      {...arg}
      className={classNames([className, styles.button])}
      style={allStyle}
      ref={ref}
    >
      {children}
    </div>
  );
}

export default memo(Button);
