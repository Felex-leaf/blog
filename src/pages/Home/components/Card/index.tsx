import { Card, CardProps } from 'antd';

import styles from './index.less';

interface IHomeCard extends CardProps {
    data: IData;
}

interface IData {
    title?: string;
}

export default function HomeCard(props: IHomeCard) {
    const { data = {}, children } = props;
    const { title } = data;
    return (
        <div className={styles.warp}>
            <Card {...props} title={title}>
                {children}
            </Card>
        </div>
    );
}
