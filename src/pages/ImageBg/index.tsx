import React, { useState, useRef, useEffect } from 'react';
import { InputNumber, Upload, UploadProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Button from '@/components/Button';

import './index.less';

interface ColorCount {
  color: string;
  count: number;
}

let timeOut: NodeJS.Timeout;

function ImageBg() {
  const [url, setUrl] = useState('');
  const [s, setS] = useState(40);
  const [c, setC] = useState('white');
  const [loading, setLoading] = useState(false);
  const imgBgRef = useRef<HTMLDivElement>();
  const getContext = (width: number, height: number) => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', width?.toString());
    canvas.setAttribute('height', height?.toString());
    return canvas.getContext('2d');
  };

  const getImageData = (src: string, scale = 1): Promise<{
    data: Uint8ClampedArray;
    width: number;
    height: number;
  }> => {
    const img = new Image();

    // Can't set cross origin to be anonymous for data url's
    // https://github.com/mrdoob/three.js/issues/1305
    if (!src.startsWith('data')) img.crossOrigin = 'Anonymous';

    return new Promise((resolve, reject) => {
      img.onload = () => {
        const width = img.naturalWidth * scale;
        const height = img.naturalHeight * scale;
        const context = getContext(width, height);
        context.drawImage(img, 0, 0, width, height);

        const { data } = context.getImageData(0, 0, width, height);
        resolve({
          data,
          width,
          height,
        });
      };

      const errorHandler = () => reject(new Error('An error occurred attempting to load image'));

      img.onerror = errorHandler;
      img.onabort = errorHandler;
      img.src = src;
    });
  };

  // 根据图片数据和index获取rgba
  const getRgba = (d: Uint8ClampedArray, i: number, countMap: object, ignore: string[] = []) => {
    const alpha: number = d[i + 3];
    // skip FULLY transparent pixels
    if (alpha === 0) {
      return countMap;
    }

    const rgbComponents: number[] = Array.from(d.subarray(i, i + 3));

    // skip undefined data
    if (rgbComponents.indexOf(undefined) !== -1) {
      return countMap;
    }

    const color: string = alpha && alpha !== 255
      ? `rgba(${[...rgbComponents, alpha].join(',')})`
      : `rgb(${rgbComponents.join(',')})`;

    // skip colors in the ignore list
    if (ignore.some((_c) => color?.includes(_c))) {
      return countMap;
    }

    if (countMap[color]) {
      countMap[color].count += 1;
    } else {
      countMap[color] = { color, count: 1 };
    }
    return countMap;
  };

  // 根据图片数据进行遍历获取rgba
  const getCounts = (data: Uint8ClampedArray, countMap: object, ignore: string[] = []): object => {
    for (let i = 0; i < data.length; i += 4 /* 4 gives us r, g, b, and a */) {
      getRgba(data, i, countMap, ignore);
    }
    return countMap;
  };

  // 获取图片上右下左size范围内的rgba
  const getAllCounts = (d: Uint8ClampedArray, height: number, width: number, size = 100, ignore: string[] = []) => {
    const countMap: { [key: string]: ColorCount } = {};

    const topD = d.slice(0, size * width * 4);
    const bottomD = d.slice(((height - size) * width + 1) * 4);
    const left = [];
    const right = [];

    for (let i = 0; i < height - 2 * size; i += 1) {
      const h = size + i;
      const hS = h * width;
      for (let j = 0; j < 2 * size; j += 1) {
        if (j < size) {
          const idx = (hS + j + 1) * 4;
          getRgba(d.slice(idx, idx + 3), 0, countMap, ignore);
          left.push(idx);
        } else {
          const idx = (hS + j + width - size) * 4;
          getRgba(d.slice(idx, idx + 3), 0, countMap, ignore);
          right.push(idx);
        }
      }
    }

    getCounts(topD, countMap, ignore);
    getCounts(bottomD, countMap, ignore);

    const counts = Object.values(countMap);
    return counts.sort((a: any, b: any) => b.count - a.count);
  };

  const getBg = async (u: string) => {
    try {
      if (!u) return;
      setLoading(true);
      const { data, height, width } = await getImageData(u);
      const counts = getAllCounts(data, height, width, s, ['255,255,255', '0,0,0']);
      if (!imgBgRef.current) return;
      setC(counts[0]?.color);
    } finally {
      setLoading(false);
    }
  };

  const beforeUpload: UploadProps['beforeUpload'] = (file) => {
    const newUrl = URL.createObjectURL(new Blob([file]));
    setUrl(newUrl);
    getBg(newUrl);
    return false;
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div ref={imgBgRef} className="image-bg" style={{ backgroundColor: c }}>
      <div style={{ color: c }} className="image-bg-color">背景色： {c}</div>
      {loading && <span style={{ color: c }} className="image-bg-loading">背景色计算中...</span>}
      <div className="image-bg-control">
        <Upload
          name="avatar"
          listType="picture-card"
          showUploadList={false}
          beforeUpload={beforeUpload}
          accept=".jpg,.png"
        >
          {url ? <img src={url} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
        <InputNumber
          max={100}
          value={s}
          onChange={(v: number) => {
            setS(v);
          }}
        />
        <Button
          theme={c}
          className="image-bg-btn"
          onClick={() => {
            if (timeOut) {
              clearTimeout(timeOut);
              timeOut = null;
            }
            setLoading(true);
            timeOut = setTimeout(() => {
              getBg(url);
            }, 200);
          }}
        >
          调整背景色
        </Button>
      </div>
    </div>
  );
}

export default ImageBg;
