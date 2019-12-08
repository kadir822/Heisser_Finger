var x,y;
function initialize(){
	var socket = io.connect();

	socket.on("position", function(data){
        elem.style.left = (`${data.x}` *2)+ "px";
        elem.style.top = (`${data.y}` * 2)+ "px";

        console.log( `${data.x}`);
        console.log( `${data.y}`);
    });
}