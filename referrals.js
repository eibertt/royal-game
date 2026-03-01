/* TITAN B - SISTEMA DE ALIANZAS (REFERIDOS) */

const REFERRAL_BONUS = 1000; // T-Coins por cada amigo
const COMMISSION_PERCENT = 0.10; // 10% de lo que el amigo mine

function generarLinkReferido(userId) {
    return `https://t.me/TuBotTitanB?start=${userId}`;
}

function reclamarBonoReferido(referidoId) {
    // Lógica para sumar 1000 T-Coins al usuario que invitó
    coins += REFERRAL_BONUS;
    
    // Efecto visual de "Conexión Establecida"
    const status = document.getElementById('system-status');
    status.innerText = "NUEVO ALIADO: +1000 T-COINS";
    status.style.color = "var(--hologram-blue)";
    
    updateUI();
}

// Esta función correrá en segundo plano cada hora
function procesarComisiones(amigosActivos) {
    let comisionTotal = amigosActivos * 50; // Simulación de 10% de minado pasivo
    coins += comisionTotal;
    updateUI();
}
