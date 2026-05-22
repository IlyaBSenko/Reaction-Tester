let gameState = 'Rules';
let colorChangeTime = 0;


function startTimer() {
    let randomDelay = Math.random() * (7500 - 5000) + 5000;
    setTimeout(function() {
        document.getElementById('Box').style.backgroundColor = '#f1e05a' 
        colorChangeTime = performance.now(); // right when box changes color
        gameState = 'Reacting';
    }, randomDelay);
}

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        console.log(gameState) // debug
        if (gameState === 'Rules') {
            gameState = 'Waiting';
            document.getElementById('Rules').style.display = 'none';
            document.getElementById('Game').style.display = 'flex';
            let highScore = parseFloat(localStorage.getItem('High Score'));
            if (highScore) {
                document.getElementById('game-high-score-disp').textContent = `High Score: ${highScore.toFixed(2)} ms`;
            }
            startTimer();
        } else if (gameState === 'Waiting') {
        } else if (gameState === 'Reacting') {
            let reactionTime = performance.now() - colorChangeTime;
            let savedScore = parseFloat(localStorage.getItem('High Score'));
            // let parsed = parseFloat(savedScore).toFixed(2);
            if (!savedScore || reactionTime < savedScore) {
                localStorage.setItem('High Score', reactionTime);
            }

            let highScore = parseFloat(localStorage.getItem('High Score')).toFixed(2);
            document.getElementById('reaction-time-display').textContent = `Reaction Speed: ${reactionTime.toFixed(2)} ms`;
            document.getElementById('high-score-display').textContent = `High Score: ${highScore} ms`;
            gameState = 'Game-Over';
            document.getElementById('Game').style.display = 'none';
            document.getElementById('Game-Over').style.display = 'block';
        } else if (gameState === 'Game-Over') {
            gameState = 'Waiting';
            document.getElementById('Game-Over').style.display = 'none';
            document.getElementById('Game').style.display = 'flex';
            document.getElementById('Box').style.backgroundColor = '#663399';
            let highScore = parseFloat(localStorage.getItem('High Score')).toFixed(2);
            document.getElementById('game-high-score-disp').textContent = `High Score: ${highScore} ms`;
            startTimer();
        }
    }
})