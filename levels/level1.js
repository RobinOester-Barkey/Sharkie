let level1;
function initLevel1() {

level1 = new Level (
    [
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new Fish(),
        new JallyFish(),
        new JallyFish(),
        new JallyFish(),
        new JallyFish(),
        new JallyFish()
    ],
    [
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/4.Fondo 2/D1.png', 0, 0),
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/3.Fondo 1/D1.png', 0, 0),
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/D1.png', 0, 0),
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/4.Fondo 2/D2.png', 720, 0),
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/3.Fondo 1/D2.png', 720, 0),
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/D2.png', 719, 0),

        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/4.Fondo 2/D1.png', 720*2, 0),
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/3.Fondo 1/D1.png', 720*2, 0),
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/D1.png', 719*2, 0),
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/4.Fondo 2/D2.png', 720*3, 0),
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/3.Fondo 1/D2.png', 720*3, 0),
        new BackgroundObject('./img/Alternative Grafiken - Sharkie/3. Background/Layers/2. Floor/D2.png', 719*3, 0)
    ],
    [
        new Water('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/5. Water/d1.png',0,0),
        new Water('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/5. Water/d2.png',719,0),

        new Water('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/5. Water/d1.png',1438,0),
        new Water('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/5. Water/d2.png',2157,0),

        new Water('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/5. Water/d1.png',2876,0),
        new Water('./img/Alternative Grafiken - Sharkie/3. Background/Legacy/Layers/5. Water/d2.png',3595,0)
    ],
    [
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison()
    ],
    [
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins()
    ]
)
};