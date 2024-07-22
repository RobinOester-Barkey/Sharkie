class ThrowableObject extends movableObjekt {

    constructor(x, y){
        super().loadImage('./img/Alternative Grafiken - Sharkie/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png')
        this.x = x;
        this.y = y;
        this.height = 30;
        this.width = 30;
        this.throw();
    };


    /**
     * Führt die Wurfanimation des Objekts aus.
     * Das Objekt bewegt sich diagonal nach oben rechts.
     */
    throw() {
        setInterval(() => {
                this.x += 6;
                this.y -= 1;
        }, 25)
    };


    /**
     * Überprüft, ob das werfbare Objekt mit einem anderen beweglichen Objekt kollidiert.
     * @param {movableObjekt} mo - Das bewegliche Objekt, mit dem die Kollision überprüft werden soll.
     * @returns {boolean} True, wenn eine Kollision festgestellt wird, ansonsten False.
     */
    isCollidingWith(mo) {
        return this.x + this.width > mo.x &&
               this.y + this.height > mo.y &&
               this.x < mo.x + mo.width &&
               this.y < mo.y + mo.height;
    };
};