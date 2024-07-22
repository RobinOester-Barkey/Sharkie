class StatusBarPoison extends DrawableObjects {
    percentage = 1;

    imagesPoison = [
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/poisoned bubbles/0_ copia 2.png'
    ];

    /**
     * Erzeugt eine Instanz der StatusBarPoison-Klasse.
     */
    constructor() {
        super();
        this.loadImages(this.imagesPoison);
        this.x = 0;
        this.y = 80;
        this.width = 50;
        this.height = 200;
        this.setPercentage(1);
    }

    /**
     * Ändert das Bild der Statusleiste basierend auf dem aktuellen Prozentsatz.
     * 
     * @param {number} percentage - Der aktuelle Prozentsatz des Giftstatus.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.imagesPoison[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
    }

    /**
     * Bestimmt den Bildindex basierend auf dem aktuellen Prozentsatz.
     * 
     * @returns {number} - Der Index des Bildes, das angezeigt werden soll.
     */
    resolveImageIndex() {
        if (this.percentage > 5) {
            return 0;
        } else if (this.percentage > 4) {
            return 1;
        } else if (this.percentage > 2) {
            return 2;
        } else if (this.percentage > 1) {
            return 3;
        } else if (this.percentage > 0) {
            return 4;
        } else {
            return 5;
        }
    }
}
