/* TITAN B - GLOBAL CONFIGURATION */
const CONFIG = {
    GAME: {
        VERSION: "2.0.0",
        NAME: "TITAN B - ODYSSEY",
        REFRESH_RATE: 60 // FPS
    },
    ECONOMY: {
        COIN_NAME: "T-Coins",
        CURRENCY: "USDT",
        SHIPS: [
            { id: 'scout', name: 'Scout C-1', price: 1, rate: 100 },
            { id: 'miner', name: 'Heavy Miner', price: 5, rate: 600 },
            { id: 'titan', name: 'TITAN A-15', price: 15, rate: 2500 }
        ],
        REFERRAL_BONUS: 5000 // T-Coins por referido
    },
    SYSTEM: {
        ADMIN_WALLET: "UQCa4JhWm99Dv9SfeW2fYskEd8VXY-SdJdrWY0auqx5Fm4j9",
        MIN_WITHDRAW: 5
    }
};
