import { Card, CardProps } from 'antd';

import styles from './index.less';

interface ArticleCard extends CardProps {}

export default function ArticleCard(props: ArticleCard) {
    const { ...arg } = props;
    return (
        <div className={styles.articleCard}>
            <Card {...arg} bordered={false} />
        </div>
    );
}
