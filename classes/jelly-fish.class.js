class JallyFish extends movableObjekt {
    height = 60;
    width = 60;

    imagesSwimming = [
        './img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];

    imagesDead = [
        './img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ];

    movingUP = false;
    movingDown = true;

    constructor() {
        super().loadImage('./img/Alternative Grafiken - Sharkie/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png')
        this.loadImages(this.imagesDead);

        this.x = 250 + Math.random() * 1500;
        this.y = Math.random() * 440;
        this.speed = 0.25;

        this.loadImages(this.imagesSwimming);

        this.animate();
    }


    /**
     * Startet die Bewegungs- und Schwimmanimation der Qualle.
     * Bewegt die Qualle horizontal nach links und vertikal auf und ab.
     */
    animate() {
        this.moveLeft();

        this.animationInterval = setInterval(() => {
            this.playAnimation(this.imagesSwimming);
        }, 200);

        this.movementInterval = setInterval(() => {
            if (this.y <= 40) {
                this.movingUp = false;
                this.movingDown = true;
            } else if (this.y >= 440) {
                this.movingDown = false;
                this.movingUp = true;
            }

            if (this.movingUp) {
                this.y -= this.speed;
            } else if (this.movingDown) {
                this.y += this.speed;
            }
        }, 1000 / 60);
    }


    /**
     * Führt den Sterbevorgang der Qualle durch.
     * Stoppt die Animationen und entfernt die Qualle aus der Feindesliste der Welt.
     */
    die() {
        clearInterval(this.animationInterval);
        clearInterval(this.movementInterval);

        this.playAnimation(this.imagesDead);

        setTimeout(() => {
            const index = world.level.enemies.indexOf(this);
            if (index > -1) {
                world.level.enemies.splice(index, 1);
            }
        }, this.imagesDead.length * 50);
    }

};