import { CSSProperties, MouseEvent } from 'react';

import Button from '@/components/Button';

import styles from './index.less';
import classNames from 'classnames';
import { jump } from '@/utils';

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
