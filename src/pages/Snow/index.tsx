import { useRef, useEffect, useMemo, useState } from 'react';

import snow from './snow.jpg';

interface Iparticle {
    x: number;
    y: number;
    speed: number;
    radius: number;
}

const particles: Iparticle[] = [];
let ctx: CanvasRenderingContext2D | null = null;
let t: NodeJS.Timeout | null = null;
let img = new Image();
let stop: number = 0;
img.src = snow;

export default function Snow() {
    const [load, setLoad] = useState(false);
    const [height, setHeight] = useState(document.body.offsetHeight - 60);
    const [width, setWidth] = useState(document.body.offsetWidth);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        loop(height, width);
        window.addEventListener('resize', () => {
            if (t) clearTimeout(t);
            t = setTimeout(() => {
                if (!ctx) return;
                const base64 = canvas.toDataURL();
                const newWidth = document.body.offsetWidth;
                const newHeight = document.body.offsetHeight - 60;

                ctx.scale(width / newWidth, height / newHeight); //进行缩放，width/height是原canvas的大小
                const img = new Image();

                img.onload = function () {
                    if (!ctx) return;
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);
                    if (stop) cancelAnimationFrame(stop);
                    loop(newHeight, newWidth);
                    setLoad(!load);
                    setHeight(newHeight);
                    setWidth(newWidth);
                };

                img.src = base64;
            }, 500);
        });
        return () => {
            ctx = null;
            if (t) clearTimeout(t);
            if (stop) cancelAnimationFrame(stop);
        };
    }, []);
    function loop(height: number, width: number) {
        create(width);
        down(height, width);
        draw(height);
        stop = window.requestAnimationFrame(loop.bind(null, height, width));
    }
    function create(width: number) {
        if (particles.length < 100) {
            particles.push({
                x: Math.random() * width,
                y: 0,
                speed: 1 + Math.random() * 4,
                radius: 3 + Math.random() * 4,
            });
        }
    }
    function down(height: number, width: number) {
        particles.forEach((item) => {
            item.y += item.speed;
            if (item.y > height) {
                item.x = Math.random() * width;
                item.y = 0;
                item.speed = 1 + Math.random() * 4;
                item.radius = 3 + Math.random() * 4;
            }
        });
    }
    function draw(height: number) {
        if (!ctx || !img) return;
        ctx?.drawImage(img, 0, 0, height * 2, height);
        particles.forEach((item) => {
            if (!ctx) return;
            ctx.beginPath();
            ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();
        });
    }
    return (
        <>
            <canvas ref={canvasRef} height={height} width={width} style={{ overflow: 'hidden' }} />
        </>
    );
}
