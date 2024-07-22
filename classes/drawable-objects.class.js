
class DrawableObjects {

    img;
    imageCache = {};
    currentImage = 0;
    x = 0;
    y = 150;
    height = 150;
    width = 200;

    /**
     * Lädt ein Bild aus dem angegebenen Pfad.
     * @param {string} path - Der Pfad zum Bild, das geladen werden soll.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    /**
     * Lädt eine Liste von Bildern aus den angegebenen Pfaden in den Cache.
     * @param {string[]} arr - Ein Array von Pfaden zu den Bildern, die geladen werden sollen.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    };

    /**
     * Zeichnet das aktuelle Bild auf den angegebenen Canvas-Kontext.
     * @param {CanvasRenderingContext2D} ctx - Der Canvas-Kontext, auf dem das Bild gezeichnet werden soll.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
    };
};
