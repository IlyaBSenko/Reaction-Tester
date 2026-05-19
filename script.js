document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        document.getElementById('Rules').style.display = 'none';
        document.getElementById('Game').style.display = 'block';
    }
})