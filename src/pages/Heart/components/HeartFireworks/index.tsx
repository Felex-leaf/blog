import React, { useState, useEffect, useRef, CSSProperties } from 'react';

export interface HeartFireworksProps {
  number: number; // 数量
  size?: number; // 大小
  distance?: number; // 距离
  deg?: [number, number]; // 角度
  style?: CSSProperties;
}

/**
 * @param angle 角度;
 * @param distance 距离;
 */
export const getRoundOnePoint = (angle: number, distance: number) => {
  const rD = angle - 45;
  let x = Math.sin((Math.PI / 180) * rD) * distance;
  let y = Math.cos((Math.PI / 180) * rD) * distance;
  if (rD < 0 || rD > 315) {
    x = -Math.abs(x);
    y = -Math.abs(y);
  } else if (rD < 90) {
    x = Math.abs(x);
    y = -Math.abs(y);
  } else if (rD < 180) {
    x = Math.abs(x);
    y = Math.abs(y);
  } else if (rD <= 270) {
    x = -Math.abs(x);
    y = Math.abs(y);
  } else if (rD <= 315) {
    x = -Math.abs(x);
    y = -Math.abs(y);
  }
  return {
    x,
    y,
  };
};

// 获取点角度
export const getRoundPointAngel = (angel: [number, number], number = 10) => {
  const [n, m] = angel;
  const d = [];
  for (let index = 0; index < number; index++) {
    d.push(((m - n) / number) * index + n);
  }
  return d;
};

export default function HeartFireworks({
  number,
  deg = [0, 90],
  distance = 20,
  size = 10,
  style = {},
}: HeartFireworksProps) {
  const [styles, setStyles] = useState<(CSSProperties & { deg?: number })[]>();
  const startS = useRef<(CSSProperties & { deg?: number })[]>();
  const endS = useRef<(CSSProperties & { deg?: number })[]>();
  const isStart = useRef(false);

  const doS = () => {
    if (!isStart.current) {
      isStart.current = true;
      setStyles(startS.current);
      return;
    }
    isStart.current = false;
    setStyles(endS.current);
  };

  useEffect(() => {
    const s = getRoundPointAngel(deg, number)?.map((d) => (
      {
        transform: `rotate(${d}deg)`,
        height: `${size}px`,
        width: `${size}px`,
        deg: d,
      }
    ));
    startS.current = s.map((stl) => ({ ...stl, visibility: 'hidden' }));
    setStyles(s);
    setTimeout(() => {
      const newS = s?.map(({ transform, deg: d, ...stl }) => {
        const { x, y } = getRoundOnePoint(d, distance);
        return {
          ...stl,
          transform: `translate(${x}px, ${y}px) ${transform}`,
          deg: d,
        };
      });
      endS.current = newS;
      setStyles(newS);
      setInterval(doS, 1500);
    }, 100);
  }, []);

  return (
    <div className="heart-fireworks" style={style}>
      {/* <div className="heart-item" /> */}
      {
        styles?.map(({ deg: d, ...stl }) => (
          <div key={d} className="heart-item" style={stl} />
        ))
      }
    </div>
  );
}
