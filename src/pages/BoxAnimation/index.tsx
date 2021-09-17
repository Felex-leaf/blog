import { useState } from 'react';

import Box from '@/components/Box';
import AwardModel from '@/components/AwardModel';

const integralNum = 10;

export default function Home() {
    const [isOpenBox, setIsOpenBox] = useState(false);
    const [onStarAnimation, setOnStarAnimation] = useState(false);
    const handleClick = () => {
        setIsOpenBox(true);
        setOnStarAnimation(true);
        setTimeout(() => {
            setOnStarAnimation(false);
        }, integralNum * 150 + 2000);
    };
    const hideModal = () => {
        setOnStarAnimation(false);
    };
    return (
        <div>
            <Box
                id="box_container"
                hasAnimation
                isOpenbox={isOpenBox}
                isShowBox={true}
                onClick={handleClick}
            />
            {onStarAnimation && (
                <AwardModel
                    id="box_container"
                    showStar
                    integralNum={integralNum}
                    onStarAnimation={onStarAnimation || false}
                    hideModal={hideModal}
                />
            )}
        </div>
    );
}
