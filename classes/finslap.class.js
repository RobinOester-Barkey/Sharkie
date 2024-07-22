class FinSlapObject extends movableObjekt {
    constructor(x, y, direction) {
        super().loadImage('./img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Fin slap/1.png');
        this.x = x;
        this.y = y + 50;
        this.height = 50;
        this.width = 100;
        this.direction = direction;
        this.slapping();
    }

    /**
     * Führt die Bewegung des Objekts aus, indem es seine X-Koordinate basierend auf der angegebenen Richtung ändert.
     */
    slapping() {
        let speed = 10;
        if (this.direction === 'left') {
            speed = -10;
        }
        setInterval(() => {
            this.x += speed;
        }, 25);
    }

    /**
     * Überprüft, ob dieses Objekt mit einem anderen beweglichen Objekt kollidiert.
     * 
     * @param {object} mo - Das andere bewegliche Objekt.
     * @returns {boolean} - True, wenn eine Kollision vorliegt, andernfalls false.
     */
    isCollidingWith(mo) {
        return this.x + this.width > mo.x &&
               this.y + this.height > mo.y &&
               this.x < mo.x + mo.width &&
               this.y < mo.y + mo.height;
    }
}
