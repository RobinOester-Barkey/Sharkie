class World {
    statusbarlife = new StatusBarLife();
    statusbarcoin = new StatusBarCoin();
    statusbarpoison = new StatusBarPoison();
    throwableObjects = [];
    character = new Character();
    endboss = null;
    gameMusic = new Audio('audio/game_music.mp3');
    killFish = new Audio('audio/kill-fish.mp3');
    winSound = new Audio('audio/win.mp3');
    playSound = true;
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    /**
     * @constructor
     * @param {HTMLCanvasElement} canvas - Das Canvas-Element, auf dem das Spiel gerendert wird.
     * @param {Object} keyboard - Ein Objekt, das die Tastatureingaben des Spielers enthält.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    };


    /**
     * Schaltet den Spiel-Sound aus und pausiert die Hintergrundmusik.
     */
    turnSoundOf() {
        this.playSound = false;
        this.gameMusic.pause();
    };


    /**
     * Schaltet den Spiel-Sound ein und spielt die Hintergrundmusik ab.
     */
    turnSoundOn() {
        this.playSound = true;
        this.gameMusic.play();
    };


    /**
     * Startet das Spiel-Loop, das Kollisionen überprüft und Updates durchführt.
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkEndbossSpawn();
        }, 200);
    };


    /**
     * Überprüft und handhabt das Werfen von Objekten durch den Spieler.
     */
    checkThrowObjects() {
        if (this.keyboard.SPACE && this.character.collectedPoison > 0) {
            this.character.collectedPoison--;
            this.statusbarpoison.setPercentage(this.character.collectedPoison);
            let bubble = new ThrowableObject(this.character.x + 100, this.character.y + 80);
            this.throwableObjects.push(bubble);
        }
    };


    /**
     * Überprüft alle Kollisionen in der Spielwelt.
     */
    checkCollisions() {
        this.checkCharacterEnemyCollisions();
        this.checkCharacterEndbossCollision();
        this.checkCharacterCoinCollision();
        this.checkCharacterPoisonCollision();
        this.checkThrowableObjectsCollisions();
    };


    /**
     * Überprüft Kollisionen zwischen dem Spieler und den Gegnern.
     */
    checkCharacterEnemyCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(1);
                this.statusbarlife.setPercentage(this.character.energy);
            }

            if (this.character.isFinSlapHitting(enemy) && this.character.isAttacking) {
                enemy.die();
                if (this.playSound) {
                    this.killFish.play();
                }
            }
        });
    };


    /**
     * Überprüft Kollisionen zwischen dem Spieler und dem Endboss.
     */
    checkCharacterEndbossCollision() {
        if (this.endboss && this.character.isColliding(this.endboss)) {
            this.character.hit(2);
            this.statusbarlife.setPercentage(this.character.energy);
        }
    };


    /**
     * Überprüft Kollisionen zwischen dem Spieler und Münzen.
     */
    checkCharacterCoinCollision() {
        this.level.coins.forEach((coin, coinIndex) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins();
                this.statusbarcoin.setPercentage(this.character.collectedCoins);
                this.level.coins.splice(coinIndex, 1);
            }
        });
    };


    /**
     * Überprüft Kollisionen zwischen dem Spieler und Gift.
     */
    checkCharacterPoisonCollision() {
        this.level.poison.forEach((poison, poisonIndex) => {
            if (this.character.isColliding(poison) && this.character.collectedPoison <= 5) {
                this.character.collectPoison();
                this.statusbarpoison.setPercentage(this.character.collectedPoison);
                this.level.poison.splice(poisonIndex, 1);
            }
        });
    };


    /**
     * Überprüft Kollisionen zwischen werfbaren Objekten und Gegnern/Endboss.
     */
    checkThrowableObjectsCollisions() {
        this.checkThrowableObjectsEnemiesCollision();
        this.checkThrowableObjectsEndbossCollision();
        this.checkThrowableObjectsFinSlapCollision();
    };


    /**
     * Überprüft Kollisionen zwischen werfbaren Objekten und Gegnern.
     */
    checkThrowableObjectsEnemiesCollision() {
        this.throwableObjects.forEach((object, objectIndex) => {
            this.level.enemies.forEach((enemy) => {
                if (object.isCollidingWith(enemy)) {
                    if (this.playSound) {
                        this.killFish.play();
                    }
                    this.throwableObjects.splice(objectIndex, 1);
                    enemy.die();
                }
            });
        });
    };


    /**
     * Überprüft Kollisionen zwischen werfbaren Objekten und dem Endboss.
     */
    checkThrowableObjectsEndbossCollision() {
        if (this.endboss) {
            this.throwableObjects.forEach((object, objectIndex) => {
                if (object.isCollidingWith(this.endboss)) {
                    this.throwableObjects.splice(objectIndex, 1);
                    this.endboss.bubbleHits++;
                    this.endboss.displayHurtAnimation().then(() => {
                        if (this.endboss.bubbleHits >= 4) {
                            this.gameMusic.pause();
                            if (this.playSound) {
                                this.endboss.winSound.play();
                            }
                            clearAllIntervals(2);
                        }
                    });
                }
            });
        }
    };


    /**
     * Überprüft Kollisionen zwischen FinSlap-Objekten und Gegnern/Endboss.
     */
    checkThrowableObjectsFinSlapCollision() {
        this.throwableObjects.forEach((object, objectIndex) => {
            if (object instanceof FinSlapObject) {
                this.level.enemies.forEach((enemy) => {
                    if (object.isCollidingWith(enemy)) {
                        if (this.playSound) {
                            this.killFish.play();
                        }
                        this.throwableObjects.splice(objectIndex, 1);
                        enemy.die();
                    }
                });

                if (this.endboss && this.character.isAttacking && this.character.isFinSlapHitting(this.endboss)) {
                    this.endboss.bubbleHits++;
                    this.endboss.displayHurtAnimation().then(() => {
                        if (this.endboss.bubbleHits >= 4) {
                            this.gameMusic.pause();
                            if (this.playSound) {
                                this.endboss.winSound.play();
                            }
                            clearAllIntervals(2);
                        }
                    });
                }
            }
        });
    };


    /**
     * Initialisiert die Welt und setzt die Referenzen für die Spielfigur und die Hintergrundmusik.
     */
    setWorld() {
        this.character.world = this;
        this.gameMusic.play();
    };


    /**
     * Überprüft, ob der Endboss gespawnt werden soll basierend auf der X-Position des Spielers.
     */
    checkEndbossSpawn() {
        if (this.character.x >= 1500 && !this.endboss) {
            this.spawnEndboss();
        }
    };


    /**
     * Spawnt den Endboss und startet seine Einführungsanimation.
     */
    spawnEndboss() {
        this.endboss = new Endboss(this);
        this.endboss.animateSpawn()
            .then(() => {
                this.endboss.startMoving();
            })
            .catch((error) => {
                console.error('Fehler bei der Animation des Endboss-Spawns:', error);
            });
    };


    /**
     * Zeichnet alle Objekte und Elemente auf dem Canvas basierend auf der aktuellen Spielwelt.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.water);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusbarlife);
        this.addToMap(this.statusbarcoin);
        this.addToMap(this.statusbarpoison);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        if (this.endboss && this.endboss.spawned) {
            this.addToMap(this.endboss);
        }
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.poison);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };


    /**
     * Fügt eine Liste von Objekten zur Darstellung auf dem Canvas hinzu.
     * @param {Array} objects - Eine Liste von Objekten, die gezeichnet werden sollen.
     */
    addObjectsToMap(objects) {
        objects.forEach((O) => {
            this.addToMap(O);
        });
    };


    /**
     * Fügt ein einzelnes Objekt zur Darstellung auf dem Canvas hinzu.
     * @param {Object} mo - Das Objekt, das gezeichnet werden soll.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    };


    /**
     * Spiegelt das Bild eines Objekts horizontal.
     * @param {Object} mo - Das Objekt, dessen Bild gespiegelt werden soll.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    };


    /**
     * Stellt das Bild eines Objekts nach dem Spiegeln wieder her.
     * @param {Object} mo - Das Objekt, dessen Bild wiederhergestellt werden soll.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    };

};
