import { useState } from 'react';

import Rankingboard from '@/components/Rankingboard';
import { RankingButton } from '@/components/Rankingboard/RankingHeader';

export default function Blog() {
    const [show, setShow] = useState(false);
    const onRankingCallback = (val: boolean) => {
        setShow(val);
    };
    return (
        <div>
            <RankingButton onClick={onRankingCallback.bind(null, true)} />
            {show && <Rankingboard onRankingCallback={onRankingCallback.bind(null, false)} />}
        </div>
    );
}
