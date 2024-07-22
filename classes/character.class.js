class Character extends movableObjekt {

    imagesSwimming = [
        './img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/2.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/3.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/4.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/5.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/6.png'
    ];


    imagesDead = [
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/1.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/2.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/3.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/4.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/5.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/6.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/7.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/8.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/9.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/10.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/11.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];


    imagesHurt = [
        './img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/5.Hurt/1.Poisoned/3.png'
    ];


    imagesAttack = [
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];


    imagesIdle = [
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/1.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/2.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/3.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/4.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/5.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/6.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/7.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/8.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/9.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/10.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/11.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/12.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/13.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/14.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/15.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/16.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/17.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/1.IDLE/18.png'
    ];


    imagesFinSlap = [
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/1.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/2.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/3.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/4.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/5.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/6.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/7.png',
        './img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/8.png'
    ];


    height = 180;
    width = 180;
    world;
    energy = 100;
    collectedCoins = 0;
    collectedPoison = 1;
    collectedCoinIndices = [];
    isAttacking = false;
    attackTimer = false;


    constructor() {
        super().loadImage('./img/Alternative Grafiken - Sharkie/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.imagesSwimming);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesFinSlap);
        this.animate();
    };


     /**
     * Startet die Animations-Loops für Bewegung und Tauchen.
     */
    animate() {
        setInterval(() => {
            this.movement()
            this.finAttack()
        }), 1000 / 24;


        setInterval(() => {
            this.divAnimation()
        }, 125);
    };


    /**
     * Führt einen Flossenangriff aus, wenn die Bedingungen erfüllt sind.
     */
    finAttack() {
        if (this.world.keyboard.RIGHT && this.world.keyboard.LEFT && !this.attackTimer && !this.isAttacking) {
            this.playAnimation(this.imagesFinSlap);
            this.isAttacking = true;
            this.attackTimer = true;
            setTimeout(() => {
                this.attackTimer = false;
                this.isAttacking = false;
            }, 1000);
        };
    };


     /**
     * Behandelt die Bewegung der Figur basierend auf Tastatureingaben.
     */
    movement() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed + 0.5;
            this.otherDirection = false;
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed + 0.5;
            this.otherDirection = true;
        }
        if (this.world.keyboard.UP && this.y < 320) {
            this.y += this.speed + 0.5;
        }
        if (this.world.keyboard.DOWN && this.y > -85) {
            this.y -= this.speed + 0.5;
        }
        this.world.camera_x = -this.x;
    };


    /**
     * Behandelt Animationen basierend auf dem Zustand der Figur und den Eingaben.
     */
    divAnimation() {
        if (this.isDead()) {
            this.playAnimation(this.imagesDead);
            this.world.gameMusic.pause();
            clearAllIntervals(1);
        } else if (this.isHurt()) {
            this.startAnimation(this.imagesHurt);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN || this.world.keyboard.LEFT) {
            this.playAnimation(this.imagesSwimming);
        } else if (this.world.keyboard.SPACE && !this.isAttacking && this.collectedPoison > 0) {
            this.isAttacking = true;
            this.startAnimation(this.imagesAttack);
        } else {
            this.playAnimation(this.imagesIdle);
        }
    };


    /**
     * Definiert die Trefferbox für den Flossen-Schlag-Angriff.
     * @returns {{x: number, y: number, width: number, height: number}} Die Koordinaten und Dimensionen der Trefferbox.
     */
    finSlapHitBox() {
        let range = 8;
        if (this.otherDirection) {
            return {
                x: this.x - range,
                y: this.y + 50,
                width: range,
                height: this.height
            };
        } else {
            return {
                x: this.x + this.width * 0.8,
                y: this.y,
                width: range,
                height: this.height * 0.7
            };
        }
    };


    /**
     * Überprüft, ob der Flossen-Schlag-Angriff einen Feind trifft.
     * @param {Enemy} enemy - Das Feindobjekt, gegen das überprüft werden soll.
     * @returns {boolean} True, wenn der Flossen-Schlag-Angriff den Feind trifft, ansonsten False.
     */
    isFinSlapHitting(enemy) {
        let hitBox = this.finSlapHitBox();
        return hitBox.x < enemy.x + enemy.width &&
            hitBox.x + hitBox.width > enemy.x &&
            hitBox.y < enemy.y + enemy.height &&
            hitBox.y + hitBox.height > enemy.y;
    };
};