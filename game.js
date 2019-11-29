var start=false;
var death = false;
var play = false;
const pat = document.getElementById('drawPath');
const gameField = document.getElementById('gameField');


function startGame(event){
        start = true;
        //document.getElementById("state").innerHTML = start;
        
}

function winGame(event){
        if(start){
                location.href = 'goal.html';
        }
}