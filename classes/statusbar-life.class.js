class StatusBarLife extends DrawableObjects {
    percentage = 100;

    imagesLife = [
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/100_  copia 2.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/80_  copia 3.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/60_  copia 3.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/40_  copia 3.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/20_ copia 4.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Life/0_  copia 3.png'
    ];

    /**
     * Erzeugt eine Instanz der StatusBarLife-Klasse.
     */
    constructor() {
        super();
        this.loadImages(this.imagesLife);
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 200;
        this.setPercentage(100);
    }

    /**
     * Ändert das Bild der Statusleiste basierend auf dem aktuellen Prozentsatz.
     * 
     * @param {number} percentage - Der aktuelle Prozentsatz des Lebens.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.imagesLife[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
    }

    /**
     * Bestimmt den Bildindex basierend auf dem aktuellen Prozentsatz.
     * 
     * @returns {number} - Der Index des Bildes, das angezeigt werden soll.
     */
    resolveImageIndex() {
        if (this.percentage === 100) {
            return 0;
        } else if (this.percentage > 80) {
            return 1;
        } else if (this.percentage > 60) {
            return 2;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 4;
        } else {
            return 5;
        }
    }
}
