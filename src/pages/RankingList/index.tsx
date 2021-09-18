import { useState } from 'react';

import Rankingboard from '@/components/Rankingboard';
import { RankingButton } from '@/components/Rankingboard/RankingHeader';
import Button from '@/components/Button';

import styles from './index.less';
let t: NodeJS.Timeout | null = null;

export default function RankingList() {
    const [show, setShow] = useState(true);
    const [isPC, setIsPC] = useState(false);
    const onRankingCallback = () => {
        if (t) return;
        setShow(false);
        t = setTimeout(() => {
            setShow(true);
            t = null;
        }, 200);
    };
    const change = () => {
        setIsPC(!isPC);
    };
    return (
        <div className={styles.container}>
            <div className={styles.buttonWrap}>
                <RankingButton />
                <Button style={{ marginTop: 10 }} onClick={onRankingCallback}>
                    重播
                </Button>
                <div>
                    <Button style={{ marginTop: 10 }} onClick={change}>
                        设备切换
                    </Button>
                </div>
            </div>
            {show && <Rankingboard style={{ width: isPC ? 768 : 375 }} />}
        </div>
    );
}
