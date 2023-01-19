import type { CardProps } from 'antd';
import { Card } from 'antd';

import styles from './index.less';

type ArticleCard = CardProps;

export default function ArticleCard(props: ArticleCard) {
  const { ...arg } = props;
  return (
    <div className={styles.articleCard}>
      <Card {...arg} bordered={false} />
    </div>
  );
}
