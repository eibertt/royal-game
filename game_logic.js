// --- VARIABLES DE ESTADO ---
let coins = parseInt(localStorage.getItem('tcoins')) || 0;
let energy = 100;
let mode = 'home'; 

// --- ACTUALIZACIÓN DE INTERFAZ ---
function updateUI() {
    const coinTxt = document.getElementById('coin-txt');
    const energyBar = document.getElementById('energy-bar');
    
    if(coinTxt) coinTxt.innerText = Math.floor(coins).toLocaleString();
    if(energyBar) {
        energyBar.style.width = energy + "%";
        // Cambio de color por fatiga
        energyBar.style.background = energy < 20 ? "#ff3333" : "linear-gradient(90deg, #0f0, #008800)";
    }
}

// --- LÓGICA DE MINADO ---
function mineAutomatic() {
    if(mode === 'earnings') {
        coins += 1.5; // Minado pasivo por segundo
        saveData();
    }
    
    // Recuperación de energía siempre activa
    if(energy < 100) energy += 0.5;
    updateUI();
}

function saveData() {
    localStorage.setItem('tcoins', coins);
}

// Iniciar bucle de juego
setInterval(mineAutomatic, 1000);
