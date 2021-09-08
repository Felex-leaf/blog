import { Input } from 'antd';
import { ChangeEvent, useState, useMemo } from 'react';
import classNames from 'classnames';

import styles from './index.less';

interface IJumpTextInput {
    value?: number | string;
    className?: string;
    placeholder?: string;
    theme?: string;
    onChange?: (value: number | string) => void;
}

export default function JumpTextInput({ value, onChange, className, placeholder = 'felex', theme }: IJumpTextInput) {
    const [ cValue, setCValue ] = useState<number | string>();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value)
        setCValue(e.target.value)
    }
    const textArr = useMemo(() => placeholder.split('').map((item, idx) => <span style={{ transitionDelay: `${idx * 50}ms` }}>{item}</span>), [placeholder])
    return (
        <div className={classNames([styles.jumpTextInput, className])} style={{ borderBottomColor: theme }}>
            <Input value={value ?? cValue} onChange={handleChange} bordered={false} />
            <div className={styles.placeholder} style={{ color: theme }}>{textArr}</div>
        </div>
    );
}
