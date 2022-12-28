/* TEMPLATE */
const $css = "#gh_game_helper {min-width:100px; padding:5px; border:solid gray 1px; background:rgba(22, 22, 93, 0.81); color:gold; position: fixed; top: 40px; right: 5px; z-index:5;}#gh_game_helper .gh_button {cursor:pointer;text-align:center; border-bottom:solid gray 1px;}";
const $html = "<div class='gh_button gh_pvp'>START<b class='gh_status red'>START</b></div>";

$('body').append("<div id='gh_game_helper'>"+$html+"</div>").append("<style>"+$css+"</style>");


$('#gh_game_helper .gh_pvp').click(() => {
	if (stop) {
		$('#gh_game_helper .gh_pvp')
		$(".gh_pvp .gh_status").removeClass("red").addClass("green").html("START");
		stop = false
        caseNumber = 0;
        start();
	} else {
		$('#gh_game_helper .gh_pvp')
		$(".gh_pvp .gh_status").removeClass("green").addClass("red").html("START");
		stop = true
	}
});

GAME.emitOrder = function(data){GAME.socket.emit('ga',data);}

var caseNumber = 0;
var wait = 3000;
var stop = true;

function start(){
    if(!stop){
	action();
    window.setTimeout(start,wait);
    }  else{
    window.setTimeout(start,wait);
    }
}

function action(){
    switch (caseNumber) {
        case 0:
        caseNumber++;
        console.log('1')
        setTimeout(5000);
        break;
        case 1:
        caseNumber++;
        console.log('2')
        setTimeout(5000);
        break;
        case 2:
        caseNumber++;
        setTimeout(5000);
        break;
    }
}

setInterval(() => {
    
}, interval);