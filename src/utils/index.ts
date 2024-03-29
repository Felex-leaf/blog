import { history } from 'umi';
import { PAGE_ENUM } from '@/configs';

export const parseUrlPublic = (url: string) =>
  (process.env.NODE_ENV === 'development' ? url : `/blog${url}`);

const audio = new Audio();
audio.src = parseUrlPublic('/snow.mp3');

export const jump = (path = '') => {
  if (!path) return;
  const { location } = history;
  if (location.pathname.includes(path)) return;
  if (path === PAGE_ENUM.SNOW) {
    audio.load();
    audio.play();
  } else {
    audio.pause();
  }
  history.push(path);
};

export function initRem(): void {
  const docEle = document.documentElement;
  function setHtmlFontSize() {
    let deviceWidth = docEle.clientWidth || window.innerWidth;
    if (deviceWidth >= 1200) {
      deviceWidth = 1200;
    }
    if (deviceWidth <= 320) {
      deviceWidth = 320;
    }
    const fontSize = deviceWidth / 10;
    docEle.style.fontSize = `${fontSize.toFixed(3)}px`;
  }
  setHtmlFontSize();
  window.addEventListener('resize', setHtmlFontSize);
}

type TYPE =
  | 'Number'
  | 'BigInt'
  | 'String'
  | 'Boolean'
  | 'Undefined'
  | 'Null'
  | 'Object'
  | 'Array'
  | 'Function'
  | 'Symbol'
  | 'Math'
  | 'JSON'
  | 'Date'
  | 'RegExp'
  | 'Error'
  | 'Window'
  | 'HTMLDocument';
type data =
  | number
  | bigint
  | string
  | boolean
  | undefined
  | null
  | Object
  | any[]
  | Function
  | symbol
  | Math
  | JSON
  | Date
  | RegExp
  | Error
  | Window
  | HTMLDocument;
export function isType(data: data, type: TYPE): boolean {
  return Object.prototype.toString.call(data) === `[object ${type}]`;
}
