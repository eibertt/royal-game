/** TITAN B - GALAXY ENGINE (Procedural Stars & Nebulae) */
const canvas = document.getElementById('galaxy-bg');
const ctx = canvas.getContext('2d');

let width, height, stars = [], nebulae = [];

// Configuración de la Galaxia
const STAR_COUNT = 150;
const NEBULA_COUNT = 3;

class Star {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.speed = Math.random() * 0.2 + 0.05; // Movimiento muy lento
        this.opacity = Math.random() * 0.8 + 0.2;
    }
    update() {
        this.y += this.speed;
        // Si sale por abajo, reaparece arriba
        if (this.y > height) {
            this.y = 0;
            this.x = Math.random() * width;
        }
    }
    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class Nebula {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 300 + 200;
        // Colores Tácticos (Cian y Fucsia muy suaves)
        this.color = Math.random() > 0.5 ? 'rgba(0, 229, 255, 0.03)' : 'rgba(255, 0, 222, 0.02)';
    }
    draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initGalaxy() {
    resize();
    for (let i = 0; i < STAR_COUNT; i++) stars.push(new Star());
    for (let i = 0; i < NEBULA_COUNT; i++) nebulae.push(new Nebula());
    animateGalaxy();
}

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

function animateGalaxy() {
    // Limpiamos con el fondo degradado del CSS (alpha transparente)
    ctx.clearRect(0, 0, width, height);

    // Dibujar Nebulosas (Fondo)
    nebulae.forEach(n => n.draw());

    // Actualizar y Dibujar Estrellas
    stars.forEach(s => {
        s.update();
        s.draw();
    });

    requestAnimationFrame(animateGalaxy);
}

// Eventos
window.addEventListener('resize', resize);
window.addEventListener('load', initGalaxy);
