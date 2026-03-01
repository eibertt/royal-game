/* TITAN B - MOTOR 3D DEL ROBOT */
import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
// Esto lo inyectaremos en el contenedor del robot
document.getElementById('robot-container').appendChild(renderer.domElement);

// --- CREACIÓN DEL ROBOT (GEOMETRÍA) ---
const bodyGroup = new THREE.Group();

// Cuerpo (Hexagonal / Tecnológico)
const bodyGeom = new THREE.CylinderGeometry(1, 1.2, 2, 6);
const bodyMat = new THREE.MeshPhongMaterial({ color: 0x1a1a1a, shininess: 100 });
const body = new THREE.Mesh(bodyGeom, bodyMat);
bodyGroup.add(body);

// Cabeza (Visor Neón)
const headGeom = new THREE.BoxGeometry(1.2, 0.6, 0.8);
const headMat = new THREE.MeshPhongMaterial({ color: 0x333333 });
const head = new THREE.Mesh(headGeom, headMat);
head.position.y = 1.4;
bodyGroup.add(head);

// Visor (Luz de la cara)
const visorGeom = new THREE.PlaneGeometry(1, 0.3);
const visorMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
const visor = new THREE.Mesh(visorGeom, visorMat);
visor.position.set(0, 1.4, 0.41);
bodyGroup.add(visor);

// Luces de hombros
const lightGeom = new THREE.SphereGeometry(0.2, 16, 16);
const lightMat = new THREE.MeshBasicMaterial({ color: 0xff00de });
const L_light = new THREE.Mesh(lightGeom, lightMat);
L_light.position.set(-1.1, 0.8, 0);
bodyGroup.add(L_light);

const R_light = L_light.clone();
R_light.position.set(1.1, 0.8, 0);
bodyGroup.add(R_light);

scene.add(bodyGroup);

// Iluminación
const light = new THREE.PointLight(0x00e5ff, 2, 50);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

camera.position.z = 5;

// Animación
function animate() {
    requestAnimationFrame(animate);
    
    // El robot flota suavemente
    bodyGroup.rotation.y += 0.01;
    bodyGroup.position.y = Math.sin(Date.now() * 0.002) * 0.1;
    
    renderer.render(scene, camera);
}
animate();

// Función para cuando el usuario hace TAP
window.handleRobotTap = function() {
    bodyGroup.scale.set(0.8, 0.8, 0.8);
    setTimeout(() => bodyGroup.scale.set(1, 1, 1), 100);
    // Cambiar color del visor momentáneamente
    visor.material.color.setHex(0xff00de);
    setTimeout(() => visor.material.color.setHex(0x00e5ff), 200);
};
