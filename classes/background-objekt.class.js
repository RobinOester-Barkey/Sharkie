class BackgroundObject extends movableObjekt {
    width = 480;
    height = 720;

    /**
     * Erstellt ein neues Hintergrundobjekt mit einem Bild aus dem angegebenen Pfad.
     * @param {string} imagePath - Der Pfad zum Bild, das für das Hintergrundobjekt geladen werden soll.
     * @param {number} x - Die X-Position, an der das Hintergrundobjekt platziert werden soll.
     * @param {number} y - Die Y-Position, an der das Hintergrundobjekt platziert werden soll.
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
}
