import { Card, CardProps } from 'antd';

import styles from './index.less';

interface IHomeCard extends CardProps {
    data: IData;
    onclick: (key?: string) => void;
}

interface IData {
    title?: JSX.Element | string;
    key?: string;
}

export default function HomeCard(props: IHomeCard) {
    const { data = {}, children, onclick, ...arg } = props;
    const { title, key } = data;
    const handleClick = () => {
        if (onclick) onclick(key);
    };
    return (
        <div className={styles.warp} onClick={handleClick}>
            <Card {...arg} title={title}>
                {children}
            </Card>
        </div>
    );
}
