import classnames from 'classnames';
import type { CSSProperties } from 'react';
import React from 'react';
import styles from '../index.less';

interface IBox {
  isOpenbox: boolean;
  isShowBox: boolean;
  id?: string;
  style?: CSSProperties;
  onClick?: (param: string) => void;
  setBoxState?: () => void;
  small?: boolean;
  hasAnimation?: boolean;
  whiteShine?: boolean;
  yellowShine?: boolean;
}

export default function Box(props: IBox) {
  const {
    onClick,
    setBoxState,
    isOpenbox,
    style,
    id,
    small,
    hasAnimation,
    whiteShine,
    yellowShine,
    isShowBox,
  } = props;
  const handleClick = () => {
    if (!isOpenbox) {
      if (onClick) {
        onClick(id || '');
      }
      if (setBoxState) {
        setBoxState();
      }
    }
  };
  const smallStyle = {
    width: '40px',
    height: '40px',
  };
  return (
    <>
      {isShowBox && (
        <div
          className={classnames([
            styles.box_content,
            { [styles.hasAnimation]: hasAnimation },
          ])}
          id={id}
          style={style}
        >
          <span
            onClick={handleClick}
            className={classnames([
              isOpenbox ? styles.open_box : styles.close_box,
              { [styles.hasAnimation]: hasAnimation },
            ])}
            style={small ? smallStyle : {}}
          />
          {yellowShine && (
            <span
              className={classnames([styles.box_shine, styles.yellow_shine])}
            />
          )}
          {whiteShine && (
            <span
              className={classnames([styles.box_shine, styles.white_shine])}
            />
          )}
        </div>
      )}
    </>
  );
}
