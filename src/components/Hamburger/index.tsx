import classNames from 'classnames';
import { useState, CSSProperties } from 'react';
import styles from './index.less';

interface IHamburger {
    onClick?: (isActive: boolean) => void;
    style?: CSSProperties;
    type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    className?: string;
    isActive?: boolean;
}

export default function Hamburger(props: IHamburger) {
    const [isActive, setIsActive] = useState(false);
    const { onClick, style, type = 1, className, isActive: active } = props;
    const handleClick = () => {
        setIsActive(!isActive);
        if (onClick) onClick(!isActive);
    };
    return (
        <div
            className={classNames([
                styles.dontRHamburger,
                className,
                { [styles.isActive]: active ?? isActive },
            ])}
            onClick={handleClick}
            id={styles[`hamburger${type}`]}
            style={style}
        >
            <span className={styles.dontRLine}></span>
            <span className={styles.dontRLine}></span>
            <span className={styles.dontRLine}></span>
        </div>
    );
}
