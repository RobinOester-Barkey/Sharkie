class Level {
    enemies;
    backgroundObjects;
    poison;
    coins;
    water;
    level_end_x = 2154;

    /**
     * Erstellt ein neues Level mit den angegebenen Spielobjekten.
     * @param {Array} enemies - Array der Gegner im Level.
     * @param {Array} backgroundObjects - Array der Hintergrundobjekte im Level.
     * @param {Water} water - Das Wasserobjekt im Level.
     * @param {Array} poison - Array der Giftobjekte im Level.
     * @param {Array} coins - Array der Münzobjekte im Level.
     */
    constructor(enemies, backgroundObjects, water, poison, coins) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.poison = poison;
        this.coins = coins;
        this.water = water;
    }
}
