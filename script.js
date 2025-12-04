import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// --- 1. CONFIGURACIÓN BÁSICA ---
const canvas = document.querySelector('#webgl');

// --- 🛠️ CORRECCIÓN DE EMERGENCIA PARA INTERACCIÓN ---
// Forzamos al canvas a estar "disponible" para clics
canvas.style.pointerEvents = 'auto'; 
canvas.style.touchAction = 'none';
// Si el canvas tiene un padre, nos aseguramos que no bloquee
if (canvas.parentElement) {
    canvas.parentElement.style.pointerEvents = 'auto';
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.set(0, 3, 8); // Posición inicial

const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ---  LUCES ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xd946ef, 30);
spotLight.position.set(5, 10, 5); 
spotLight.angle = Math.PI / 6; 
spotLight.penumbra = 1;
scene.add(spotLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-5, 5, 5);
scene.add(dirLight);

// --- CONTROLES (CONFIGURACIÓN ROBUSTA) ---
const controls = new OrbitControls(camera, canvas);

// Ajustes clave para que se sienta fluido
controls.enableDamping = true; 
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false; // Mejor control al mover

// Forzamos ACTIVADO en todo
controls.enabled = true;
controls.enableZoom = true; 
controls.enablePan = true;
controls.enableRotate = true;

// Aqui centramos el punto de rotación (apuntando al setup, no al piso)
controls.target.set(0, 1, 0);

// OJO: En esta parte quitamos límites temporalmente por si causan problemas, por experiencia JAJA 
// o los dejamos muy amplios
controls.minDistance = 1; 
controls.maxDistance = 50;

// ---  VARIABLES PARA ANIMACIÓN DE MONITOR ---
let screenTexture, screenContext;
// Eliminada la lógica del avatar, solo texto

const textMessages = [
    "¡Hola! Soy Roberto", 
    "Dev FullStack", 
    "Fan de Three.js", 
    "Bienvenido al Setup"
];
let currentMessageIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let lastTypeTime = 0;

function drawScreenContent(text) {
    if (!screenContext) return;

    screenContext.fillStyle = '#000000'; 
    screenContext.fillRect(0, 0, screenContext.canvas.width, screenContext.canvas.height);

    // Solo dibujamos el texto, centrado
    screenContext.font = 'Bold 80px "Courier New", monospace'; // Letra un poco más grande
    screenContext.fillStyle = '#00ff00';
    screenContext.textAlign = 'center';
    screenContext.textBaseline = 'middle';
    screenContext.shadowColor = '#00ff00';
    screenContext.shadowBlur = 15;

    // Centrado vertical y horizontalmente
    screenContext.fillText(text + (isDeleting ? '' : '|'), screenContext.canvas.width / 2, screenContext.canvas.height / 2);
    
    if (screenTexture) screenTexture.needsUpdate = true;
}

// --- OJO: ESTO CARGAR MODELO ---
const loader = new GLTFLoader();
let setupModel = null;

loader.load('setup.glb', (gltf) => {
    setupModel = gltf.scene;
    scene.add(setupModel);
    
    // Aqui se Ajusta la posición y rotación base
    setupModel.position.set(0, -1, 0); 
    setupModel.rotation.y = -0.5;

    setupModel.traverse((child) => {
        if (child.isMesh && child.name === 'PantallaMonitor') {
            const canvas2d = document.createElement('canvas');
            canvas2d.width = 1024; 
            canvas2d.height = 1024;
            screenContext = canvas2d.getContext('2d');
            
            screenTexture = new THREE.CanvasTexture(canvas2d);
            screenTexture.flipY = false;
            
            screenTexture.center.set(0.5, 0.5); 
            screenTexture.rotation = -Math.PI / 2; 
            screenTexture.repeat.x = -1; 
            
            child.material = new THREE.MeshBasicMaterial({ 
                map: screenTexture,
                color: 0xffffff 
            });
            console.log("Pantalla activada.");
        }
    });
}, undefined, (error) => console.error(error));

// ---  RAYCASTER (CLIC EN TV) ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const modal = document.getElementById('tv-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

window.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    
    // IMPORTANTE: Permitir clic solo si es dentro del área del canvas
    // Esto evita conflictos con los botones del HTML
    if (event.clientX < rect.left || event.clientX > rect.right || 
        event.clientY < rect.top || event.clientY > rect.bottom) {
        return;
    }

    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    if (setupModel) {
        const intersects = raycaster.intersectObjects(setupModel.children, true);

        if (intersects.length > 0) {
            const objectName = intersects[0].object.name;
            // Aquí siempre hay que asegurarnos que el nombre sea como el de Blender
            if (objectName.includes('TelevisiónBienestarLOL')) {
                if(modal) modal.style.display = 'flex';
            }
        }
    }
});

if(closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// --- BOTÓN DE LUZ ---
const lightBtn = document.getElementById('light-toggle');
let lightsOn = true;

if(lightBtn){
    lightBtn.addEventListener('click', () => {
        lightsOn = !lightsOn;
        if(lightsOn) {
            scene.add(spotLight);
            ambientLight.intensity = 0.6;
            lightBtn.style.opacity = "1";
        } else {
            scene.remove(spotLight);
            ambientLight.intensity = 0.1; 
            lightBtn.style.opacity = "0.5";
        }
    });
}

// --- LOOP PRINCIPAL ---
const tick = (currentTime) => {
    // INOTA OJO: controls.update() debe llamarse en cada frame si enableDamping es true
    controls.update();

    if (currentTime - lastTypeTime > typingSpeed) {
        const currentMessage = textMessages[currentMessageIndex];
        
        if (isDeleting) {
            charIndex--;
            typingSpeed = 50; 
        } else {
            charIndex++;
            typingSpeed = 150; 
        }

        drawScreenContent(currentMessage.substring(0, charIndex));

        if (!isDeleting && charIndex === currentMessage.length) {
            typingSpeed = 2000; 
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentMessageIndex = (currentMessageIndex + 1) % textMessages.length;
            typingSpeed = 500; 
        }
        
        lastTypeTime = currentTime;
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
tick(0);

// ---  RESPONSIVIDAD ---
window.addEventListener('resize', () => {
    const container = document.querySelector('.canvas-container');
    // Manejo robusto del tamaño panta
    const width = container ? container.clientWidth : window.innerWidth;
    const height = container ? container.clientHeight : window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});