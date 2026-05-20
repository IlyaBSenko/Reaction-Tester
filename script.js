let gameState = 'Rules';

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        console.log(gameState) // debug
        if (gameState === 'Rules') {
            gameState = 'Waiting';
            document.getElementById('Rules').style.display = 'none';
            document.getElementById('Game').style.display = 'flex';
        } else if (gameState === 'Waiting') {
            // wait for box to change color
        } else if (gameState === 'Reacting') {
            gameState = 'Game-Over';
            document.getElementById('Game').style.display = 'none';
            document.getElementById('Game-Over').style.display = 'block';
        } else if (gameState === 'Game-Over') {
            gameState = 'Waiting';
            document.getElementById('Game-Over').style.display = 'none';
            document.getElementById('Game').style.display = 'flex';
        }
    }
})