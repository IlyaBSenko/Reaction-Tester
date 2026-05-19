let gameState = 'Rules';

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        if (gameState === 'Rules') {
            gameState = 'Game';
            document.getElementById('Rules').style.display = 'none';
            document.getElementById('Game').style.display = 'block';
        } else if (gameState === 'Game') {
            gameState = 'Game-Over';
            document.getElementById('Game').style.display = 'none';
            document.getElementById('Game-Over').style.display = 'block';
        } else if (gameState === 'Game-Over') {
            gameState = 'Game';
            document.getElementById('Game-Over').style.display = 'none';
            document.getElementById('Game').style.display = 'block';
        }
    }
})