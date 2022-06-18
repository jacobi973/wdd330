window.addEventListener('keydown', function(e) {
    console.log('hello')
    if (e.key === 65) {
        console.log('hleo')
        e.preventDefault();
        var space = document.getElementById('space');
        space.style.display = 'none';
        var game = document.getElementById('game');
        game.style.display = 'block';
    }
});
console.log('Hello');

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });