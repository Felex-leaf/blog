import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { IAllTexture, IMesh } from './interface';

let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let renderer: THREE.WebGLRenderer | null = null;
let textureLoader: THREE.TextureLoader | null = null;

let poiObjects: THREE.Sprite[] = [];
const poiPosArray = [
    { x: -1.47, y: 0.87, z: -0.36, frame: 1 },
    { x: -1.46, y: 0.49, z: -0.69, frame: 2 },
    { x: 1.5, y: 0.7, z: 0, frame: 8 },
    { x: 0.33, y: 1.79, z: 0, frame: 3 },
    { x: 0.73, y: 1.38, z: -0.8, frame: 5 },
    { x: -0.1, y: 1.17, z: 0.88, frame: 6 },
    { x: -1.16, y: 0.16, z: 0.89, frame: 7 },
];

export default function IndexPage() {
    const containerRef = useRef<HTMLDivElement | null>(null);
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
        camera.position.set(0, 0, 3);
        renderer.setSize(document.body.clientWidth, document.body.clientHeight);
        const container = containerRef.current;
        if (container) container.appendChild(renderer.domElement);
        new OrbitControls(camera, renderer.domElement);
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
        bottomRightDirLight.position.x = 5;
        bottomRightDirLight.position.y = 3;
        bottomRightDirLight.position.z = -5;
        bottomRightDirLight.intensity = 0.8;

        // const helper=new THREE.DirectionalLightHelper(bottomRightDirLight,1);
        // scene.add( helper );
        scene.add(bottomRightDirLight);

        const frontDirLight = new THREE.DirectionalLight(0xffffff);

        frontDirLight.position.x = -5;
        frontDirLight.position.y = 3;
        frontDirLight.position.z = 5;
        frontDirLight.intensity = 0.8;
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
            sprite.scale.set(0.15, 0.15, 1);
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
            if (intersects.length > 0) {
                console.log(intersects);
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
            'car3d/model.gltf',
            function (gltf) {
                if (scene) scene.add(gltf.scene);
                const model: THREE.Object3D[] = gltf.scene.children[0].children;
                loadAllTexture(model);
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

    const loadAllTexture = (model: THREE.Object3D[]) => {
        let loadIndex = 0;
        const allTexture: IAllTexture = {};
        const textures = [
            'skymap',
            'shache_occ',
            'shache_nor',
            'shache_col',
            'neishi_occ',
            'neishi_nor',
            'mennei_col',
            'luntai_nor',
            'luntai_col',
            'lungu_occ',
            'lungu_nor',
            'lungu_col',
            'linjian_occ',
            'linjian_nor',
            'linjian_col',
            'floor',
            'deng_occ',
            'deng_nor',
            'deng_col',
            'cheshen_occ',
            'cheshen_nor',
            'chejia_occ',
            'chejia_nor',
            'chedengzhao_nor',
        ];
        const loadNextTexture = () => {
            const textureName = textures[loadIndex];
            textureLoader?.load('car3d/textures/' + textureName + '.jpg', function (texture) {
                if (loadIndex < textures.length - 1) {
                    allTexture[textureName] = texture;
                    loadIndex++;
                    loadNextTexture();
                } else {
                    for (const key in model) {
                        if (Object.prototype.hasOwnProperty.call(model, key)) {
                            const modelItem: IMesh<
                                THREE.MeshStandardMaterial | THREE.MeshPhongMaterial | null
                            > = model[key];
                            switch (modelItem.name) {
                                case 'smart_lungu0':
                                case 'smart_lungu1':
                                case 'smart_lungu2':
                                case 'smart_lungu3':
                                    modelItem.material = new THREE.MeshStandardMaterial();
                                    modelItem.material.map = allTexture['lungu_col'];
                                    modelItem.material.normalMap = allTexture['lungu_nor'];
                                    modelItem.material.aoMap = allTexture['lungu_occ'];
                                    break;
                                case 'smart_chelun0':
                                case 'smart_chelun1':
                                case 'smart_chelun2':
                                case 'smart_chelun3':
                                    modelItem.material = new THREE.MeshStandardMaterial();
                                    modelItem.material.map = allTexture['luntai_col'];
                                    modelItem.material.normalMap = allTexture['luntai_nor'];
                                    break;
                                case 'smart_boli':
                                    modelItem.material = new THREE.MeshPhongMaterial();
                                    modelItem.material.color = new THREE.Color(0x333333);
                                    modelItem.material.transparent = true;
                                    modelItem.material.opacity = 0.2;
                                    modelItem.material.envMap = allTexture['skymap'];
                                    //环境反射贴图envMap的映射方式，这里用的是一个叫等量矩形投影的映射方法
                                    modelItem.material.envMap.mapping =
                                        THREE.EquirectangularReflectionMapping;
                                    break;
                                case 'smart_tianchuang':
                                    modelItem.material = new THREE.MeshPhongMaterial();
                                    modelItem.material.color = new THREE.Color(0x000);
                                    modelItem.material.transparent = true;
                                    modelItem.material.opacity = 0.5;
                                    modelItem.material.envMap = allTexture['skymap'];
                                    modelItem.material.envMap.mapping =
                                        THREE.EquirectangularReflectionMapping;
                                    break;
                                case 'smart_shachepan':
                                    modelItem.material = new THREE.MeshStandardMaterial();
                                    modelItem.material.color = new THREE.Color(0xf2f2f2);
                                    modelItem.material.emissive = new THREE.Color(0x000000);
                                    modelItem.material.metalness = 0.5;
                                    modelItem.material.roughness = 0.62;
                                    modelItem.material.map = allTexture['shache_col'];
                                    modelItem.material.normalMap = allTexture['shache_nor'];
                                    modelItem.material.aoMap = allTexture['shache_occ'];
                                    break;
                                case 'smart_neishi':
                                case 'smart_neishi2':
                                    modelItem.material = new THREE.MeshPhongMaterial();
                                    modelItem.material.color = new THREE.Color(0x333333);
                                    modelItem.material.emissive = new THREE.Color(0x000000);
                                    modelItem.material.normalMap = allTexture['neishi_nor'];
                                    modelItem.material.aoMap = allTexture['neishi_occ'];
                                    break;
                                case 'smart_neibao':
                                    modelItem.material = new THREE.MeshPhongMaterial();
                                    modelItem.material.color = new THREE.Color(0x2e2e2e);
                                    modelItem.material.map = allTexture['mennei_col'];
                                    break;
                                case 'smart_linjian':
                                    modelItem.material = new THREE.MeshStandardMaterial();
                                    modelItem.material.color = new THREE.Color(0x2e2e2e);
                                    modelItem.material.metalness = 0.5;
                                    modelItem.material.roughness = 0.62;
                                    modelItem.material.map = allTexture['linjian_col'];
                                    modelItem.material.normalMap = allTexture['linjian_nor'];
                                    modelItem.material.aoMap = allTexture['linjian_occ'];
                                    break;
                                case 'smart_daochejing':
                                    modelItem.material = new THREE.MeshPhongMaterial();
                                    modelItem.material.color = new THREE.Color(0xffffff);
                                    break;
                                case 'smart_bolinei':
                                    modelItem.material = new THREE.MeshPhongMaterial();
                                    modelItem.material.color = new THREE.Color(0x333333);
                                    break;
                                case 'smart_chedeng':
                                case 'smart_shachedeng':
                                case 'smart_wudeng':
                                    modelItem.material = new THREE.MeshStandardMaterial();
                                    modelItem.material.color = new THREE.Color(0xffffff);
                                    modelItem.material.emissive = new THREE.Color(0x333333);
                                    modelItem.material.metalness = 1.0;
                                    modelItem.material.roughness = 0.4;
                                    modelItem.material.normalMap = allTexture['deng_nor'];
                                    break;
                                case 'smart_chedengzhao':
                                    modelItem.material = new THREE.MeshPhongMaterial();
                                    modelItem.material.color = new THREE.Color(0xffffff);
                                    modelItem.material.emissive = new THREE.Color(0x000000);
                                    modelItem.material.transparent = true;
                                    modelItem.material.opacity = 0.3;
                                    modelItem.material.normalMap = allTexture['chedengzhao_nor'];
                                    break;
                                case 'smart_shachedengzhao':
                                    modelItem.material = new THREE.MeshPhongMaterial();
                                    modelItem.material.color = new THREE.Color(0xca0816);
                                    modelItem.material.transparent = true;
                                    modelItem.material.opacity = 0.4;
                                    modelItem.material.normalMap = allTexture['chedengzhao_nor'];
                                    break;
                                case 'smart_shangeshang':
                                    modelItem.material = new THREE.MeshStandardMaterial();
                                    modelItem.material.color = new THREE.Color(0xf0f0f);
                                    modelItem.material.emissive = new THREE.Color(0x000000);
                                    modelItem.material.metalness = 1;
                                    modelItem.material.roughness = 0;
                                    break;
                                case 'smart_shangexia':
                                    modelItem.material = new THREE.MeshPhongMaterial();
                                    modelItem.material.color = new THREE.Color(0);
                                    break;
                                case 'smart_LOGO':
                                case 'smart_paiqiguan':
                                    modelItem.material = new THREE.MeshStandardMaterial();
                                    modelItem.material.color = new THREE.Color(0x6c6c6c);
                                    modelItem.material.emissive = new THREE.Color(0x444444);
                                    modelItem.material.metalness = 1;
                                    modelItem.material.roughness = 0.32;
                                    break;
                                case 'smart_cheshen':
                                    modelItem.material = new THREE.MeshStandardMaterial();

                                    modelItem.material.color = new THREE.Color(0x70631b);
                                    modelItem.material.metalness = 0.44;
                                    modelItem.material.roughness = 0;

                                    modelItem.material.normalMap = allTexture['cheshen_nor'];
                                    modelItem.material.aoMap = allTexture['cheshen_occ'];
                                    modelItem.material.envMap = allTexture['skymap'];
                                    modelItem.material.envMap.mapping =
                                        THREE.EquirectangularReflectionMapping;
                                    modelItem.material.envMapIntensity = 1;
                                    break;
                                case 'smart_chejia':
                                    modelItem.material = new THREE.MeshStandardMaterial();
                                    modelItem.material.color = new THREE.Color(0x252929);
                                    modelItem.material.metalness = 0.44;
                                    modelItem.material.roughness = 0.4;
                                    modelItem.material.normalMap = allTexture['chejia_nor'];
                                    modelItem.material.aoMap = allTexture['chejia_occ'];
                                    break;
                            }
                        }
                    }
                }
            });
        };
        loadNextTexture();
    };

    useEffect(() => {
        init();
    }, []);

    return <div ref={containerRef} />;
}
