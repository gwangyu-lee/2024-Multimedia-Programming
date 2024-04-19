// threejs
import * as THREE from "three";

//Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("White");

//Geometry == SOP
const boxGeo1 = new THREE.BoxGeometry(1, 1, 1);

//Material
const boxMat1 = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    flatShading: true,
})

//Mesh == Geometry COMP
const boxMesh1 = new THREE.Mesh(boxGeo1,boxMat1);
scene.add(boxMesh1);

//Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

//Light
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

//Render
const renderer = new THREE.WebGLRenderer({
    antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

function animation(time) {
    boxMesh1.rotation.y += 0.01;
    renderer.render(scene, camera);
}
