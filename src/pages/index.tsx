import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import styles from './index.less';
import { IOrbitControls, IPosition } from './interface';

// tween 缓动动画
// oldp 相机原位置position
// oldT 原控制器位置
// newP 相机新位置
// newT 控制器新位置

const moveCamera = (
    oldP: IPosition,
    oldT: IPosition,
    newP: IPosition,
    newT: IPosition,
    callback?: () => void,
) => {
    let tween = new TWEEN.Tween({
        x1: oldP.x,
        y1: oldP.y,
        z1: oldP.z,
        x2: oldT.x,
        y2: oldT.y,
        z2: oldT.z,
    });
    tween.to(
        {
            x1: newP.x,
            y1: newP.y,
            z1: newP.z,
            x2: newT.x,
            y2: newT.y,
            z2: newT.z,
        },
        2000,
    );
    // 每一帧执行函数 、这个地方就是核心了、每变一帧跟新一次页面元素
    tween.onUpdate((object) => {
        if (!camera || !controls) return;
        camera.position.set(object.x1, object.y1, object.z1);

        controls.target.x = object.x2;
        controls.target.y = object.y2;
        controls.target.z = object.z2;
        controls.update();
    });

    // 动画完成后的执行函数
    tween.onComplete(() => {
        if (controls) controls.enabled = true;
        callback && callback();
    });

    tween.easing(TWEEN.Easing.Cubic.InOut);
    // 这个函数必须有、这个是启动函数、不加不能启动
    tween.start();
    const animate = () => {
        requestAnimationFrame(animate);
        TWEEN.update();
    };
    animate();
};
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let renderer: THREE.WebGLRenderer | null = null;
let textureLoader: THREE.TextureLoader | null = null;
let controls: IOrbitControls | null = null;

let poiObjects: THREE.Sprite[] = [];
let oldP: IPosition | undefined = {
    x: 0,
    y: 0,
    z: 50,
};
let oldT: IPosition | undefined = {
    x: -5,
    y: 0,
    z: 5,
};
const poiPosArray = [{ x: 10, y: 9, z: 11, frame: 1 }];

export default function IndexPage() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [show, setShow] = useState(false);
    const init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
            90,
            document.body.clientWidth / document.body.clientHeight,
            0.1,
            100,
        );
        renderer = new THREE.WebGLRenderer();
        textureLoader = new THREE.TextureLoader();
        if (oldP) camera.position.set(oldP.x, oldP.y, oldP.z);
        renderer.setSize(document.body.clientWidth, document.body.clientHeight);
        const container = containerRef.current;
        if (container) container.appendChild(renderer.domElement);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', () => {
            oldP = camera?.position;
            oldT = controls?.target;
        });
        loadModel();
        loop();
        addLight();
        setupInfoPoint();
    };

    const addLight = () => {
        if (!scene) return;
        const ambientLight = new THREE.AmbientLight(0xd5d5d5);
        ambientLight.intensity = 1.2;
        scene.add(ambientLight);

        const bottomRightDirLight = new THREE.DirectionalLight();
        bottomRightDirLight.position.x = 10;
        bottomRightDirLight.position.y = 6;
        bottomRightDirLight.position.z = -10;
        bottomRightDirLight.intensity = 1;

        // const helper=new THREE.DirectionalLightHelper(bottomRightDirLight,1);
        // scene.add( helper );
        scene.add(bottomRightDirLight);

        const frontDirLight = new THREE.DirectionalLight(0xffffff);

        frontDirLight.position.x = -10;
        frontDirLight.position.y = 6;
        frontDirLight.position.z = 10;
        frontDirLight.intensity = 1;
        //directionalLight.castShadow=true;

        // const helper=new THREE.DirectionalLightHelper(frontDirLight,1);
        // scene.add( helper );
        scene.add(frontDirLight);
        // 车子正前上方斜45度的灯结束
    };

    const setupInfoPoint = () => {
        if (!scene) return;
        const pointTexture = new THREE.TextureLoader().load('car3d/point.png');

        const group = new THREE.Group();
        const materialC = new THREE.SpriteMaterial({
            map: pointTexture,
            color: 0xffffff,
            fog: false,
        });
        for (let a = 0; a < poiPosArray.length; a++) {
            const x = poiPosArray[a].x;
            const y = poiPosArray[a].y - 0.5;
            const z = poiPosArray[a].z;

            const sprite = new THREE.Sprite(materialC);
            sprite.scale.set(1.5, 1.5, 1.5);
            sprite.position.set(x, y, z);
            group.add(sprite);

            poiObjects.push(sprite);
        }
        scene.add(group);

        document.body.addEventListener('click', function (event) {
            event.preventDefault();
            if (!camera) return;
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(poiObjects);
            setShow(false);
            if (intersects.length > 0) {
                const {
                    point: { x, y, z },
                } = intersects[0];
                setShow(true);
                if (oldP && oldT)
                    moveCamera(
                        oldP,
                        oldT,
                        {
                            x,
                            y: y - 1,
                            z: z - 3,
                        },
                        {
                            x: 10,
                            y: 8,
                            z: 12,
                        },
                    );
            }
        });
    };

    const loop = () => {
        if (!renderer || !scene || !camera) return;
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    };

    const loadModel = () => {
        const loader = new GLTFLoader();
        loader.load(
            'f40/model.gltf',
            function (gltf) {
                if (scene) scene.add(gltf.scene);
            },
            function (xhr) {
                //侦听模型加载进度
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            function (error) {
                //加载出错时的回调
                console.log(error);
                console.log('An error happened');
            },
        );
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <div ref={containerRef} />
            {show && <div className={styles.modal}>倒车镜</div>}
        </>
    );
}
