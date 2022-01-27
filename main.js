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
    let pink_btn = document.querySelector('.pink');
    let yellow_btn = document.querySelector('.yellow');
    let purple_btn = document.querySelector('.purple');
    let blue_btn = document.querySelector('.blue');
    let all_btn = [pink_btn, yellow_btn, purple_btn, blue_btn];
    let current_color = '';
    let user_current_color = '';

    
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
        current_color = colors[Math.floor(colors.length * Math.random())];
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
        console.log('user : ' + user_current_color);
    }

    function userTurn() {
        console.log('your turn');
        let choice = document.querySelector('.pie');
        user_colors.push(current_color);
        pink_btn.addEventListener('click', function(e) {
            pink_btn.classList.add('push-on');
            pink_snd.play();
            user_current_color = 'pink';
        });
        yellow_btn.addEventListener('click', function(e) {
            yellow_btn.classList.add('push-on');
            yellow_snd.play();
            user_current_color = 'yellow';
        });
        purple_btn.addEventListener('click', function(e) {
            purple_btn.classList.add('push-on');
            purple_snd.play();
            user_current_color = 'purple';
        });
        blue_btn.addEventListener('click', function(e) {
            blue_btn.classList.add('push-on');
            blue_snd.play();
            user_current_color = 'blue';
        });
        setTimeout(pushOff, 2000);
        return user_current_color;
    }
    
    function pushOff() {
        alert('test');
        all_btn.forEach(function(e) {
            e.classList.remove('push-on');
        });
    }
});