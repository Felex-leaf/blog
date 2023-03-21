import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { history } from 'umi';

import HeartFireworks, { getRoundOnePoint, getRoundPointAngel, HeartFireworksProps } from './components/HeartFireworks';
import store from '@/store';

import './index.less';

const getRoundPoint = (deg: [number, number], num = 10, distance = 200) => {
  const points = getRoundPointAngel(deg, num).map((d) => getRoundOnePoint(d, distance));
  return points;
};

export default observer(() => {
  const { GlobalStore } = store;

  const name = history.location.search?.split('=')[1];
  const distance = 200;
  const num = 20;

  const heartFireworksProps: HeartFireworksProps = {
    distance: 10,
    size: 6,
    number: 5,
    deg: [0, 360],
  };

  const getFireworksRound = (deg: [number, number], n = 10, d = 200) => {
    return getRoundPoint(deg, n, d).map(({ x, y }, i) => <HeartFireworks key={i} style={{ top: y, left: x }} {...heartFireworksProps} />);
  };

  const getFireworksLine = (n = 10, d = 200) => {
    return Array(n).fill(0).map((item, i) => (
      <HeartFireworks key={i} style={{ top: 0, left: (d / n) * i }} {...heartFireworksProps} />
    ));
  };

  useEffect(() => {
    GlobalStore.setShowMeun(false);
    return () => {
      GlobalStore.setShowMeun(true);
    };
  }, []);

  return (
    <div className="heart">
      <div className="heart-wrap">
        <div>{name && <div className="heart-center">{decodeURIComponent(name)}</div>}</div>
        <div className="heart-left" style={{ left: `${-distance / 2 - 40}px` }}>
          {getFireworksRound([180, 360], num, distance)}
        </div>
        <div className="heart-right" style={{ left: `${distance / 2 + 20}px` }}>
          {getFireworksRound([0, 180], num, distance)}
        </div>
        <div className="heart-left-line" style={{ left: `${-distance - 60}px`, top: distance - 10 }}>
          {getFireworksLine(num / 2, distance * 1.88)}
        </div>
        <div className="heart-right-line" style={{ left: `${distance + 50}px`, top: distance - 10 }}>
          {getFireworksLine(num / 2, distance * 1.88)}
        </div>
      </div>
    </div>
  );
});
