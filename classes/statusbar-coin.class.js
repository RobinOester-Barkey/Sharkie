class StatusBarCoin extends DrawableObjects {
    percentage = 0;

    imagesCoin = [
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/100_ copia 4.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/80_  copia 4.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/60_  copia 4.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/40_  copia 4.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/20_  copia 2.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/green/Coin/0_  copia 4.png'
    ];

    /**
     * Erzeugt eine Instanz der StatusBarCoin-Klasse.
     */
    constructor() {
        super();
        this.loadImages(this.imagesCoin);
        this.x = 0;
        this.y = 40;
        this.width = 50;
        this.height = 200;
        this.setPercentage(0);
    }

    /**
     * Ändert das Bild der Statusleiste basierend auf dem aktuellen Prozentsatz.
     * 
     * @param {number} percentage - Der aktuelle Prozentsatz der Münzen.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.imagesCoin[this.resolveImageIndex()];
        this.img = this.imageCache[imagePath];
    }

    /**
     * Bestimmt den Bildindex basierend auf dem aktuellen Prozentsatz.
     * 
     * @returns {number} - Der Index des Bildes, das angezeigt werden soll.
     */
    resolveImageIndex() {
        if (this.percentage > 100) {
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
