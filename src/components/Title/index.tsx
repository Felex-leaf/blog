import classNames from 'classnames';

import styles from './index.less';

interface ITitle {
    children: JSX.Element | string;
    content?: string;
    className?: string;
}

export default function Title(props: ITitle) {
    const { children, className, content } = props;
    return (
        <h2
            className={classNames([className, styles.title, styles.dontRTitle])}
            data-content={content}
        >
            {children}
        </h2>
    );
}
