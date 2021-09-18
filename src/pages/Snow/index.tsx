import { useRef, useEffect, useMemo } from 'react';

import snow from './snow.jpg';

interface Iparticle {
    x: number;
    y: number;
    speed: number;
    radius: number;
}

const particles: Iparticle[] = [];
let ctx: CanvasRenderingContext2D | null = null;
const img = new Image();
img.src = snow;

export default function Snow() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const width = useMemo(() => document.body.offsetWidth, [document.body.offsetWidth]);
    const height = useMemo(() => document.body.offsetHeight - 60, [document.body.offsetHeight]);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        window.requestAnimationFrame(loop);
    }, []);
    function loop() {
        create();
        down();
        draw();
        window.requestAnimationFrame(loop);
    }
    function create() {
        if (particles.length < 200) {
            particles.push({
                x: Math.random() * width,
                y: 0,
                speed: 2 + Math.random() * 1,
                radius: 3 + Math.random() * 4,
            });
        }
    }
    function down() {
        particles.forEach((item) => {
            item.y += item.speed;
            if (item.y > height) {
                item.x = Math.random() * width;
                item.y = 0;
                item.speed = 2 + Math.random() * 1;
                item.radius = 3 + Math.random() * 4;
            }
        });
    }
    function draw() {
        if (!ctx || !img) return;
        ctx?.drawImage(img, 0, 0, width, height);
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
