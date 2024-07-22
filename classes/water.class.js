class Water extends movableObjekt {
    width = 480;
    height = 720;

    /**
     * Erstellt ein neues Wasserobjekt mit einem Bild aus dem angegebenen Pfad.
     * Startet außerdem die Animation des Wasserobjekts.
     * @param {string} imagePath - Der Pfad zum Bild, das für das Wasserobjekt geladen werden soll.
     * @param {number} x - Die X-Position, an der das Wasserobjekt platziert werden soll.
     * @param {number} y - Die Y-Position, an der das Wasserobjekt platziert werden soll.
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;

        this.animate();
    }

    /**
     * Startet die Animation des Wasserobjekts.
     * In diesem Fall bewegt sich das Wasserobjekt nach links.
     */
    animate() {
        this.moveLeft();
    }
}
