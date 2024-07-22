class Poison extends movableObjekt {
    height = 40;
    width = 40;
    world;

    imagesPoison = [
        './img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/1.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/2.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/3.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/4.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/5.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/6.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/7.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/8.png'
    ];

    /**
     * Erzeugt eine Instanz der Poison-Klasse.
     */
    constructor() {
        super().loadImage('./img/Alternative Grafiken - Sharkie/4. Marcadores/Posión/Animada/1.png');
        this.x = 250 + Math.random() * 2000;
        this.y = 50 + Math.random() * 400;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.imagesPoison);
        this.animate();
    }

    /**
     * Führt die Animation des Giftobjekts aus, indem die Bilder in einem Intervall geändert werden.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesPoison);
        }, 150);
    }
}
