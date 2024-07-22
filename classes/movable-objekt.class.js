class movableObjekt extends DrawableObjects {
    world;
    speed = 0.15;
    otherDirection = false;
    lastHit = 0;
    coinSound = new Audio('audio/Coin.mp3');
    poisonSound = new Audio('audio/collectpoison.mp3');
    hitSound = new Audio('audio/hit.mp3');
    keyboard;

    /**
     * Führt einen Treffer auf das Objekt aus und aktualisiert die Energie entsprechend.
     * @param {number} number - Die Art des Treffers (1 oder 2).
     */
    hit(number) {
        this.hitFrom = number;
        if (this.world.playSound == true) {
            this.hitSound.play();
        }
        if (this.energy < 0) {
            this.energy = 0;
        }
        if (this.hitFrom == 1) {
            this.energy -= 10;
        } else if (this.hitFrom == 2) {
            this.energy -= 40;
        } else {
            this.lastHit = new Date().getTime();
        }
    };

    /**
     * Überprüft, ob das Objekt kürzlich verletzt wurde (innerhalb der letzten Sekunde).
     * @returns {boolean} True, wenn das Objekt kürzlich verletzt wurde, andernfalls False.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    };

    /**
     * Überprüft, ob das Objekt tot ist (Energie unter Null).
     * @returns {boolean} True, wenn das Objekt tot ist, andernfalls False.
     */
    isDead() {
        return this.energy < 0;
    };

    /**
     * Bewegt das Objekt nach links.
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    };

    /**
     * Bewegt das Objekt nach rechts.
     */
    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60);
    };

    /**
     * Spielt eine Animation ab, indem die Bilder aus dem angegebenen Array durchlaufen werden.
     * @param {Array} images - Die Bilder, die für die Animation verwendet werden sollen.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    };

    /**
     * Startet eine Animation, indem die Bilder aus dem angegebenen Array durchlaufen werden, bis alle Bilder durchlaufen sind.
     * @param {Array} images - Die Bilder, die für die Animation verwendet werden sollen.
     */
    startAnimation(images) {
        let currentImage = 0;
        const interval = setInterval(() => {
            let path = images[currentImage % images.length];
            this.img = this.imageCache[path];
            currentImage++;

            if (currentImage >= images.length) {
                clearInterval(interval);
                this.isAttacking = false;
            }
        }, 1000 / 24);
    }

    /**
     * Überprüft, ob das Objekt mit einem anderen Objekt kollidiert.
     * @param {DrawableObjects} mo - Das andere bewegliche Objekt, mit dem die Kollision überprüft wird.
     * @returns {boolean} True, wenn eine Kollision vorliegt, andernfalls False.
     */
    isColliding(mo) {
        return this.x + this.width * 0.8 > mo.x &&
            this.y + this.height * 0.7 > mo.y &&
            this.x < mo.x &&
            this.y + 85 < mo.y * 0.9 + mo.height * 0.9;
    };

    /**
     * Sammelt Münzen und aktualisiert den Münzzähler.
     */
    collectCoins() {
        this.collectedCoins += 10;
        if (this.world.playSound == true) {
            this.coinSound.play();
        };
    };

    /**
     * Sammelt Gift und aktualisiert den Giftzähler.
     */
    collectPoison() {
        if (this.collectedPoison > 5) {
            return;
        } else {
            this.collectedPoison += 1;
            if (this.world.playSound == true) {
                this.poisonSound.play();
            };
        };
    };
}
