
class Coins extends movableObjekt {
    height = 40;
    width = 40;
    world;

    imagesCoin = [
        './img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/1.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/2.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/3.png',
        './img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/4.png'
    ];

    constructor(value) {
        super().loadImage('./img/Alternative Grafiken - Sharkie/4. Marcadores/1. Coins/1.png');
        this.value = value;
        this.x = 250 + Math.random() * 2000;
        this.y = 50 + Math.random() * 400;
        this.speed = 0.15 + Math.random() * 0.25;
        this.loadImages(this.imagesCoin);
        this.animate();
    }

    /**
     * Führt die Animation der Münzen aus, indem die Bilder der Münzen in einem Intervall geändert werden.
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesCoin);
        }, 200);
    }
}
