/* TITAN B - CASINO & SLOTS LOGIC */

const CASINO_CONFIG = {
    costoGiro: 500, // T-Coins
    jackpotUSDT: 1.0,
    probabilidades: {
        nada: 0.50,       // 50% de perder
        tcoins_x2: 0.30,  // 30% gana 1000
        xp_boost: 0.15,   // 15% sube XP rápido
        usdt_win: 0.05    // 5% de ganar 1 USDT
    }
};

function jugarRuleta() {
    if (coins < CASINO_CONFIG.costoGiro) {
        mostrarErrorHolografico("T-COINS INSUFICIENTES");
        return;
    }

    // Cobro de entrada
    coins -= CASINO_CONFIG.costoGiro;
    updateUI();

    // Animación de Giro (Brillo Neón)
    aplicarEfectoGiro();

    setTimeout(() => {
        const resultado = calcularResultado();
        entregarPremio(resultado);
    }, 2000); // 2 segundos de suspenso brillante
}

function calcularResultado() {
    const azar = Math.random();
    if (azar < CASINO_CONFIG.probabilidades.usdt_win) return "JACKPOT";
    if (azar < CASINO_CONFIG.probabilidades.xp_boost + CASINO_CONFIG.probabilidades.usdt_win) return "XP_BOOST";
    if (azar < 0.85) return "TCOINS_WIN";
    return "LOSE";
}

function entregarPremio(tipo) {
    const display = document.getElementById('system-status');
    
    switch(tipo) {
        case "JACKPOT":
            coins += 0; // Se paga en USDT manualmente o vía API
            display.innerText = "¡GANASTE 1 USDT!";
            display.style.color = "var(--gold)";
            // Aquí activaríamos el aura dorada del robot temporalmente
            break;
        case "TCOINS_WIN":
            coins += 1000;
            display.innerText = "+1000 T-COINS";
            display.style.color = "var(--hologram-blue)";
            break;
        case "XP_BOOST":
            xp += 500; // Ayuda a llegar a Piloto más rápido
            display.innerText = "+500 XP BONUS";
            display.style.color = "var(--hologram-pink)";
            break;
        default:
            display.innerText = "SUERTE LA PRÓXIMA";
            display.style.color = "#555";
    }
    updateUI();
}
