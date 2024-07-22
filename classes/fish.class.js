class Fish extends movableObjekt {
    height = 50;
    width = 50;

    imagesSwimming = [
        './img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ];

    imagesDead = [
        './img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png'
    ];

    constructor() {
        super().loadImage('./img/Alternative Grafiken - Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png')
        this.loadImages(this.imagesDead);

        this.x = 250 + Math.random() * 1800;
        this.y = Math.random() * 440;
        this.speed = 0.15 + Math.random() * 0.25;

        this.loadImages(this.imagesSwimming);

        this.animate();
    }


    /**
     * Startet die Bewegungsanimation des Feindes.
     */
    animate() {
        this.moveLeft();

        this.animationInterval = setInterval(() => {
            this.playAnimation(this.imagesSwimming);
        }, 150);
    }


     /**
     * Führt den Sterbevorgang des Feindes durch.
     * Beendet die Animation und entfernt den Feind aus der Feindesliste der Welt.
     */
    die() {
        clearInterval(this.animationInterval);

        this.img = this.imageCache[this.imagesDead];

        setTimeout(() => {
            const index = world.level.enemies.indexOf(this);
            if (index > -1) {
                world.level.enemies.splice(index, 1);
            }
        }, 150);
    }

};