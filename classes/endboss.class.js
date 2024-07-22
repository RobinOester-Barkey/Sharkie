class Endboss extends movableObjekt {
    width = 400;
    height = 400;
    y = 0;
    speed = 1.2;
    winSound = new Audio('audio/win.mp3');

    imagesSpawn = [
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/10.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    imagesSwimming = [
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/1.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/2.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/3.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/4.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/5.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/6.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/7.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/8.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/9.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/10.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/11.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/12.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    imagesDead = [
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    imagesHurt = [
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/1.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/2.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/2.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/3.png',
        './img/Alternative Grafiken - Sharkie/2.Enemy/3 Final Enemy/Hurt/4.png'
    ]

    hadFirstContact = false;
    bubbleHits = 0;
    movingLeft = false;
    movingRight = false;
    spawned = false;

    constructor(world) {
        super().loadImage(this.imagesSwimming[0]);
        this.world = world;
        this.loadImages(this.imagesSwimming);
        this.loadImages(this.imagesSpawn);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.x = 2400;
    };
    

    /**
     * Bewegt den Endboss nach links.
     */
    moveEndbossLeft() {
        this.x -= this.speed;
    };


    /**
     * Bewegt den Endboss nach rechts.
     */
    moveEndbossRight() {
        this.x += this.speed;
    };


    /**
     * Animiert den Spawn des Endbosses.
     * @param {function} callback - Eine optionale Callback-Funktion, die nach dem Spawn aufgerufen wird.
     * @returns {Promise<void>} Ein Promise, das aufgelöst wird, sobald die Spawn-Animation abgeschlossen ist.
     */
    animateSpawn(callback) {
        let spawnInterval = setInterval(() => {
            this.playAnimation(this.imagesSpawn);
        }, 170);
    
        let animationDuration = this.imagesSpawn.length * 230;
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                clearInterval(spawnInterval);
                this.spawned = true;
                if (callback) callback();
                resolve();
            }, animationDuration);
        });
    };


    /**
     * Zeigt die Verletzungs-Animation des Endbosses an.
     * @returns {Promise<void>} Ein Promise, das aufgelöst wird, sobald die Verletzungs-Animation abgeschlossen ist.
     */
    displayHurtAnimation() {
        return new Promise((resolve) => {
            this.playAnimation(this.imagesHurt);
            const originalSpeed = this.speed;
            this.speed = 0;
            setTimeout(() => {
                this.speed = originalSpeed;
                resolve();
            }, 400);
        });
    };
    

    /**
     * Startet die Bewegung des Endbosses.
     * Bewegt den Endboss abhängig von seiner Position nach links und rechts.
     */
    startMoving() {
        setInterval(() => {
            this.playAnimation(this.imagesSwimming);
        }, 150);

        setInterval(() => {
            if (this.x > 200 && !this.movingRight) {
                this.moveEndbossLeft();
                this.otherDirection = false;
                this.movingLeft = true;
                this.movingRight = false;
            } else if (this.x <= 200) {
                this.movingLeft = false;
                this.movingRight = true;
            }

            if (this.x < 2200 && this.movingRight) {
                this.moveEndbossRight();
                this.otherDirection = true;
            } else if (this.x >= 2200) {
                this.movingRight = false;
                this.movingLeft = true;
            }
        }, 1000 / 60);
    }
};
