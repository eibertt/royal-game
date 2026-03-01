/* TITAN B - CORE LOGIC V2.0 */

// 1. Variables de Estado
let coins = 0;
let xp = 0;
let level = 1;
let heat = 0;
let isOverheated = false;

// 2. Configuración de Evolución (Socio: Piloto en 3 días)
const xpRequirements = [0, 4500, 30000, 150000, 750000];
const ranks = ["", "RECLUTA", "PILOTO", "COMANDANTE", "GENERAL", "TITÁN DORADO"];

// 3. Función de Minado (Clic)
function handleTap(event) {
    if (isOverheated) return;

    // Ganancia base
    coins += 1 * level;
    xp += 1;
    heat += 5; // Genera calor

    // Efectos Visuales Brillantes
    createSmokeEffect(event);
    updateUI();
    checkEvolution();

    // Lógica de Sobrecarga
    if (heat >= 100) triggerOverheat();
}

// 4. Efecto de Humo Neón al Clicar
function createSmokeEffect(e) {
    const container = document.getElementById('game-container');
    const smoke = document.createElement('div');
    smoke.className = 'smoke-particle';
    
    // Posición cerca del clic
    smoke.style.left = `${e.clientX - 15}px`;
    smoke.style.top = `${e.clientY - 15}px`;
    
    container.appendChild(smoke);
    setTimeout(() => smoke.remove(), 1200);
}

// 5. Sistema de Enfriamiento y Sobrecarga
function triggerOverheat() {
    isOverheated = true;
    document.getElementById('system-status').innerText = "SOBRECARGA";
    document.getElementById('heat-ring').classList.add('critical-mode');
    
    let cooling = setInterval(() => {
        heat -= 10;
        if (heat <= 0) {
            heat = 0;
            isOverheated = false;
            clearInterval(cooling);
            document.getElementById('system-status').innerText = "ESTABLE";
            document.getElementById('heat-ring').classList.remove('critical-mode');
        }
        updateUI();
    }, 500);
}

// 6. Evolución de Rango
function checkEvolution() {
    if (level < 5 && xp >= xpRequirements[level]) {
        level++;
        document.getElementById('robot-display').src = `robot${level}.png`;
        // Efecto de brillo de evolución
        document.getElementById('robot-display').style.filter = "brightness(3) drop-shadow(0 0 30px gold)";
        setTimeout(() => {
            document.getElementById('robot-display').style.filter = "drop-shadow(0 0 20px var(--hologram-blue))";
        }, 1000);
    }
}

// 7. Actualización de Interfaz
function updateUI() {
    document.getElementById('coin-balance').innerText = Math.floor(coins).toLocaleString();
    document.getElementById('rank-display').innerText = ranks[level];
    document.getElementById('xp-text').innerText = `XP: ${xp} / ${xpRequirements[level] || 'MAX'}`;
    
    // Actualizar barra de progreso
    let progress = (xp / xpRequirements[level]) * 100;
    document.getElementById('xp-bar').style.width = `${progress}%`;
}

// 8. Producción Pasiva (Naves USDT)
setInterval(() => {
    // Aquí se sumará la producción de ships_db.json en el futuro
    // Por ahora, una base de simulación
    if (level > 1) coins += 0.5; 
    updateUI();
}, 3600);
