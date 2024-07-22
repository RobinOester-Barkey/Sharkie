let canvas;
let world;
let keyboard = new Keyboard();


/**
 * Initialisiert das Spiel beim ersten Laden.
 * Setzt das Spiel zurück und startet Level 1.
 */
function init() {
    mobileButtonsAdd();
    initLevel1();
    let startgame = document.getElementById('content');
    startgame.innerHTML = '';
    startgame.classList.add('d-none')
    document.getElementById('canvas').classList.remove('d-none')
    document.getElementById('mute').classList.remove('d-none')

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard)
    if (SoundOn == false) {
        world.turnSoundOf();
    }

    preventContextMenu('moveLeftMobile');
    preventContextMenu('attackMobile');
    preventContextMenu('moveRightMobile');
    preventContextMenu('moveUpMobileL');
    preventContextMenu('moveDownMobileL');
    preventContextMenu('moveUpMobileR');
    preventContextMenu('moveDownMobileR');
};


/**
 * Zeigt den Startbildschirm des Spiels an.
 * Enthält Start- und Anweisungsschaltflächen.
 */
function startGame() {

    let startgame = document.getElementById('content');

    startgame.innerHTML = startGameHtml;
};


/**
 * Startet das Spiel erneut (wird bei Try Again aufgerufen).
 */
function tryAgain() {
    init();
};


/**
 * Funktionen für mobile Steuerung.
 * Setzt die Tastatureigenschaften basierend auf dem Touch-Ereignis.
 * @param {boolean} isPressed - Gibt an, ob die Taste gedrückt ist.
 */
function moveRightMobile(isPressed) {
    keyboard.RIGHT = isPressed;
}

function moveUpMobileL(isPressed) {
    keyboard.DOWN = isPressed;
}

function moveDownMobileL(isPressed) {
    keyboard.UP = isPressed;
}

function moveUpMobileR(isPressed) {
    keyboard.DOWN = isPressed;
}

function moveDownMobileR(isPressed) {
    keyboard.UP = isPressed;
}

function moveLeftMobile(isPressed) {
    keyboard.LEFT = isPressed;
}

function attackMobile(isPressed) {
    keyboard.SPACE = isPressed;
}


/**
 * Überwacht Tastatureingaben und setzt entsprechende Eigenschaften in der Tastaturklasse.
 * @param {KeyboardEvent} e - Das Tastaturevent, das ausgelöst wurde.
 */
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) keyboard.RIGHT = true;
    if (e.keyCode == 37) keyboard.LEFT = true;
    if (e.keyCode == 40) keyboard.UP = true;
    if (e.keyCode == 38) keyboard.DOWN = true;
    if (e.keyCode == 32) keyboard.SPACE = true;
});


/**
 * Überwacht das Loslassen der Tasten und setzt entsprechende Eigenschaften zurück.
 * @param {KeyboardEvent} e - Das Tastaturevent, das ausgelöst wurde.
 */
document.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) keyboard.RIGHT = false;
    if (e.keyCode == 37) keyboard.LEFT = false;
    if (e.keyCode == 40) keyboard.UP = false;
    if (e.keyCode == 38) keyboard.DOWN = false;
    if (e.keyCode == 32) keyboard.SPACE = false;
});


/**
 * Zeigt den Game Over-Bildschirm an, spielt den Soundeffekt ab und versteckt das Canvas.
 */
function gameOver() {
    let gameoverSound = new Audio('audio/gameover.mp3');
    if (SoundOn == true) {
        gameoverSound.play();
    }

    mobileButtonsRemove()

    canvas = document.getElementById('canvas');
    canvas.classList.add('d-none');

    let startgame = document.getElementById('content');
    startgame.innerHTML = '';
    startgame.classList.remove('d-none')


    const gameover = document.getElementById('content');
    gameover.innerHTML = gameOverHtml;
}


/**
 * Stoppt alle Intervalle und zeigt den Gewinnbildschirm an.
 * @param {number} number - Die Nummer des Ergebnisses (1 für Game Over, 2 für Gewinn).
 */
function clearAllIntervals(number) {
    let index = number;
    for (let i = 1; i < 9999; i++) window.clearInterval(i);

    if (index == 1) {
        gameOver();
    }
    if (index == 2) {
        win();
    }

}


/**
 * Zeigt den Gewinnbildschirm an und versteckt das Canvas.
 */
function win() {

    mobileButtonsRemove();

    canvas = document.getElementById('canvas');
    canvas.classList.add('d-none');

    let startgame = document.getElementById('content');
    startgame.innerHTML = '';
    startgame.classList.remove('d-none')

    const win = document.getElementById('content');
    win.innerHTML = winHtml;
};


/**
 * Überprüft die Bildschirmorientierung und zeigt eine Meldung an, falls das Gerät gedreht werden muss.
 */
function checkOrientation() {

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;


    const isMobile = screenWidth < 600;


    const isPortrait = screenHeight > screenWidth;


    if (isMobile && isPortrait) {
        document.getElementById('rotateMessage').style.display = 'block';
    } else {
        document.getElementById('rotateMessage').style.display = 'none';
    }
};


function mobileButtonsRemove() {
    document.getElementById('moveLeftMobile').classList.add('d-none');
    document.getElementById('attackMobile').classList.add('d-none');
    document.getElementById('moveRightMobile').classList.add('d-none');
    document.getElementById('moveUpMobileR').classList.add('d-none');
    document.getElementById('moveDownMobileR').classList.add('d-none');
    document.getElementById('moveUpMobileL').classList.add('d-none');
    document.getElementById('moveDownMobileL').classList.add('d-none');
}

function mobileButtonsAdd() {
    document.getElementById('moveLeftMobile').classList.remove('d-none');
    document.getElementById('attackMobile').classList.remove('d-none');
    document.getElementById('moveRightMobile').classList.remove('d-none');
    document.getElementById('moveUpMobileR').classList.remove('d-none');
    document.getElementById('moveDownMobileR').classList.remove('d-none');
    document.getElementById('moveUpMobileL').classList.remove('d-none');
    document.getElementById('moveDownMobileL').classList.remove('d-none');
}


window.addEventListener('resize', checkOrientation);
window.addEventListener('DOMContentLoaded', checkOrientation);


let SoundOn = true


/**
 * Gibt an, ob der Sound eingeschaltet ist oder nicht.
 * @type {boolean}
 */
function toggleMute() {
    if (SoundOn == true) {
        world.turnSoundOf();
        document.getElementById('muteIcon').src = './img/Alternative Grafiken - Sharkie/3. Background/volume_off_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';
        SoundOn = false;
    } else {
        world.turnSoundOn();
        document.getElementById('muteIcon').src = './img/Alternative Grafiken - Sharkie/3. Background/volume_mute_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';
        SoundOn = true;
    }
};

/**
 * Verhindert das Öffnen des Kontextmenüs bei den angegebenen Buttons.
 * @param {string} buttonId - Die ID des Buttons, bei dem das Kontextmenü verhindert werden soll.
 */
function preventContextMenu(buttonId) {
    document.getElementById(buttonId).addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
};