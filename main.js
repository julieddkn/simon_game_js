/*jshint esversion: 6 */


/*

var array ai_colors
var array user_colors

- start -> random color + sound -> add array ai
(changer le text du btn)
- user turn -> 
    add array user, check match des deux array
    if correct, ai turn
    if wrong, game over, red screen
*/


document.addEventListener('DOMContentLoaded', () => {

    const start = document.querySelector('#btn-start');
    let colors = ['pink', 'yellow', 'purple', 'blue'];
    let ai_colors = [];
    let user_colors = [];
    let pink_snd = new Audio("sounds/pink.mp3");
    let yellow_snd = new Audio("sounds/yellow.mp3");
    let purple_snd = new Audio("sounds/purple.mp3");
    let blue_snd = new Audio("sounds/blue.mp3");
    
    start.addEventListener('click', function(e) {
        let ai_colors = [];
        let user_colors = [];
        newGame();
    });
    
    function newGame() {
        let score = 0;
        document.querySelector('.score').innerHTML = 'Current score : ' + score;
        start.innerHTML = 'New game';
        aiTurn();
    }
    
    function aiTurn() {
        let current_color = colors[Math.floor(colors.length * Math.random())];
        ai_colors.push(current_color);
        console.log(ai_colors);
        console.log(current_color);
        switch (current_color) {
            case 'pink':
                pink_snd.play();
                break;
            case 'yellow':
                yellow_snd.play();
                break;
            case 'purple':
                purple_snd.play();
                break;
            case 'blue':
                blue_snd.play();
                break;
        }
        userTurn();
    }

    function userTurn() {
        console.log('your turn');
        let choice = document.querySelector('.pie');
        let color = 
        if (choice.classList.contains())
    }

});