import { CSSProperties, memo, MouseEvent } from 'react';
import classNames from 'classnames';

import styles from './index.less';

interface IButton {
    children?: string;
    style?: CSSProperties;
    className?: string;
    onClick?: (e: MouseEvent) => void;
}

function Button(props: IButton) {
    const { children = '确认', style, className, ...arg } = props;
    const allStyle = {
        ...style,
    };
    return (
        <div {...arg} className={classNames([className, styles.button])} style={allStyle}>
            {children}
        </div>
    );
}

export default memo(Button);
