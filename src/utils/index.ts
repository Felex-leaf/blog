import { PAGE_ENUM } from '@/configs';
import { history } from 'umi';

export const parseUrlPublic = (url: string) => {
    return process.env.NODE_ENV === 'development' ? url : '/blog' + url;
};

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
