import { message } from 'antd';
import { useState } from 'react';

import AwardModel from '@/components/AwardModel';
import Box from '@/components/Box';
import Button from '@/components/Button';

import JumpTextInput from '@/components/JumpTextInput';
import styles from './index.less';

export default function Home() {
  const [isOpenBox, setIsOpenBox] = useState(false);
  const [onStarAnimation, setOnStarAnimation] = useState(false);
  const [integralNum, setIntegralNum] = useState<number | undefined>(10);
  const handleClick = () => {
    if (!integralNum) return message.warning('请输入星星数');
    setIsOpenBox(true);
    setOnStarAnimation(true);
    setTimeout(() => {
      setOnStarAnimation(false);
    }, integralNum * 150 + 2000);
  };
  const hideModal = () => {
    setOnStarAnimation(false);
  };
  const reset = () => {
    setIsOpenBox(false);
  };
  const change = (e: string | number) => {
    const num = parseInt(String(e));
    if (num <= 10 && num >= 1) {
      setIntegralNum(num);
      reset();
    } else {
      setIntegralNum(undefined);
    }
  };
  return (
    <div className={styles.dontRcontainer}>
      <Box
        id="box_container"
        hasAnimation
        isOpenbox={isOpenBox}
        isShowBox
        onClick={handleClick}
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <Button style={{ marginTop: 10 }} onClick={reset}>
        重置宝箱
      </Button>
      <JumpTextInput
        positiveControl
        onChange={change}
        className={styles.dontRInput}
        placeholder="请输入1-10数字（星星数）"
        value={integralNum}
      />
      {onStarAnimation && (
        <AwardModel
          id="box_container"
          showStar
          integralNum={integralNum || 0}
          onStarAnimation={onStarAnimation || false}
          hideModal={hideModal}
        />
      )}
    </div>
  );
}
