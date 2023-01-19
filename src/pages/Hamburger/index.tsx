import { Input } from 'antd';
import type { ChangeEvent } from 'react';
import React, { useState } from 'react';

import Hamburger from '@/components/Hamburger';

import styles from './index.less';

export default function HamburgerPage() {
  const [color, setColor] = useState('');
  const types: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ];
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <div className={styles.dontRContainer}>
      {types.map((item) => (
        <div className={styles.dontRwrap}>
          <Hamburger type={item} size="large" theme={color} />
        </div>
      ))}
      <Input type="color" onChange={handleChange} />
    </div>
  );
}
