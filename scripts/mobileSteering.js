var onlongtouch, timer, buttonID;
var touchduration = 120; //length of time we want the user to touch before we do something

function touchstart(e) {
    if (e.cancelable) e.preventDefault();
    buttonID = e.target.parentElement.parentElement.id;

    switch (buttonID) {
        case 'leftArrow':
            game.moveSide(false);
            break;
        case 'rightArrow':
            game.moveSide(true);
            break;
        case 'downArrow':
            game.moveDown();
            if (!game.gameOver) {
                game.score++
            }
            break;
        case 'upArrow':
            game.rotate();
            break;
        case 'playBtn': // TODO add gameover functionality
            if (game.gameOver) {
                game.gameOver = false;
                gameLoop();
                downTick();
            }
            break;
        case 'plusBtn':
            if (game.gameOver && game.level >= 0 && game.level + 1 <= 20) {
                game.level++;
                updateUI();
            }
            break;
        case 'minusBtn':
            if (game.gameOver && game.level - 1 >= 0 && game.level <= 20) {
                game.level--;
                updateUI();
            }
            break;
    }
    timer = setInterval(onlongtouch, touchduration);
}

function touchend() {
    //stops short touches from firing the event
    if (timer) {
        clearInterval(timer);
        buttonID = null;
    }
}

function onlongtouch() {
    console.log(timer)

    switch (buttonID) {
        case 'leftArrow':
            game.moveSide(false);
            break;
        case 'rightArrow':
            game.moveSide(true);
            break;
        case 'downArrow':
            game.moveDown();
            if (!game.gameOver) {
                game.score++
            }
            break;
        case 'upArrow':
            game.rotate();
            break;
        case 'playBtn': // TODO add gameover functionality
            if (game.gameOver) {
                game.gameOver = false;
                gameLoop();
                downTick();
            }
            break;
        case 'plusBtn':
            if (game.gameOver && game.level >= 0 && game.level + 1 <= 20) {
                game.level++;
                updateUI();
            }
            break;
        case 'minusBtn':
            if (game.gameOver && game.level - 1 >= 0 && game.level <= 20) {
                game.level--;
                updateUI();
            }
            break;
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    keyboards.forEach(keyboard => keyboard.addEventListener("touchstart", touchstart))
    keyboards.forEach(keyboard => keyboard.addEventListener("touchend", touchend))
    keyboards.forEach(keyboard => keyboard.addEventListener('touchmove', e => e.preventDefault()))
});