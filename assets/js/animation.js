import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.172.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.172.0/examples/jsm/loaders/GLTFLoader.js';

const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 13;

const scene = new THREE.Scene();
let bird;
let mixer;

const loader = new GLTFLoader();
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
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);

const reRender3D = () => {
  requestAnimationFrame(reRender3D);
  // bird.rotation.y += 0.01;
  renderer.render(scene, camera);
  if (mixer) mixer.update(0.02);

}
reRender3D();

let arrPositionModel = [
  {
    id: 'fv',
    position: {
      x: 1.2,
      y: 0.2,
      z: -5
    },
    rotation: {
      x: 0,
      y: -0.9,
      z: 0
    },
  },
  {
    id: 'featured',
    position: {
      x: 0.6,
      y: 0.2,
      z: -1.5
    },
    rotation: {
      x: 0,
      y: -0.8,
      z: 0
    },
  },
  {
    id: 'video',
    position: {
      x: -1,
      y: 0.5,
      z: 0
    },
    rotation: {
      x: 0.3,
      y: 0.6,
      z: 0
    },
  },
  {
    id: 'best-deal',
    position: {
      x: -1.2,
      y: -0.7,
      z: 3
    },
    rotation: {
      x: -0.4,
      y: 0.9,
      z: 0
    },
  },
  {
    id: 'properties',
    position: {
      x: -0.9,
      y: 0.5,
      z: 5
    },
    rotation: {
      x: 0.5,
      y: 0.6,
      z: 0.1
    },
  },
  {
    id: 'contact',
    position: {
      x: -1.2,
      y: 0.5,
      z: 0
    },
    rotation: {
      x: 0,
      y: 0.9,
      z: 0
    },
  },
];

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

  const model = arrPositionModel.find(item => item.id === currentSection);
  if (!model) return;

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

}
window.addEventListener('scroll', () => {
  changeModelPosition();
});
window.addEventListener('resize', () => {
  // re-render 3D
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
