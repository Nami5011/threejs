import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.172.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.172.0/examples/jsm/loaders/GLTFLoader.js';
import arrPositionModel from './animation_model.js';
const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 1.0;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 13;

const scene = new THREE.Scene();
let bird;
let mixer;

const loader = new GLTFLoader();
// Init model
loader.load('assets/models/flying_flamingo.glb', (gltf) => {
  bird = gltf.scene;
  bird.scale.set(0.005, 0.005, 0.005);

  scene.add(bird);
  mixer = new THREE.AnimationMixer(bird);
  mixer.clipAction(gltf.animations[0]).play();
  changeModelPosition();
},
(xhr) => {},
(error) => {
  console.error(error);
});
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // antialias: true to smooth the edges
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
// topLight.position.set(500, 500, 500);
scene.add(topLight);

const reRender3D = () => {
  requestAnimationFrame(reRender3D);
  // bird.rotation.y += 0.01;
  renderer.render(scene, camera);
  if (mixer) mixer.update(0.02);

}
reRender3D();


const changeModelPosition = () => {
  if(!bird) return;
  const sections = document.querySelectorAll('.js-section');
  let currentSection;
  sections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect();
    if(sectionPosition.top <= window.innerHeight / 1.5) {
      currentSection = section.id;
    }
  });

  const modelOrigin = arrPositionModel.find(item => item.id === currentSection);
  if (!modelOrigin) return;
  let model = modelOrigin['desktop'];
  if (window.innerWidth > 768 && window.innerWidth <= 1024) {
    model = modelOrigin['tablet'];
  } else if (window.innerWidth <= 768) {
    model = modelOrigin['mobile'];
  }

  // Use gsap to animate smoothly
  // bird.position.set(model.position.x, model.position.y, model.position.z);
  // bird.rotation.set(model.rotation.x, model.rotation.y, model.rotation.z);

  gsap.to(bird.position, {
    x: model.position.x,
    y: model.position.y,
    z: model.position.z,
    duration: 2,
    escase: 'power2.out'
  });
  gsap.to(bird.rotation, {
    x: model.rotation.x,
    y: model.rotation.y,
    z: model.rotation.z,
    duration: 2,
    escase: 'power2.out'
  });
  gsap.to(bird.scale, {
    x: model.scale.x,
    y: model.scale.y,
    z: model.scale.z,
    duration: 2,
    escase: 'power2.out'
  });
}
window.addEventListener('scroll', () => {
  changeModelPosition();
});
window.addEventListener('resize', () => {
  // re-render 3D
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  changeModelPosition();
});
