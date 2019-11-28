var start=false;
var death = false;
var play = false;

function startGame(event){
        start = true;

        document.getElementById("state").innerHTML = start;
}

function winGame(event){
        if(start){
                location.href = 'goal.html';
        }
}













