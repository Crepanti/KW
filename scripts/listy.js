var scr = document.createElement("script");
scr.type="text/javascript";
scr.innerHTML = `GAME.emitOrder = (data) => GAME.socket.emit('ga',data);
var pvm_killed=0;
var born=2;
var wait=60;
var wait_tp=500;
var wait_speed=70;
var loc;
var killed=false;
var Path=[];
var matrix=[];
var killed1=true;
var tp=true;
var Map=0;
var tabela99;
var gk=GAME.pid;
const $css = "#gh_game_helper {min-width:100px; padding:5px; border:solid gray 1px; background:rgba(22, 22, 93, 0.81); color:gold; position: fixed; top: 40px; right: 5px; z-index:5;}#gh_game_helper .gh_button {cursor:pointer;text-align:center; border-bottom:solid gray 1px;}#pvm_killed{cursor:pointer;text-align:center; border-bottom:solid gray 1px;text-align:center;}";
const $html = "<div class='gh_button gh_listy'>Listy <b class='gh_status red'>Off</b></div><div class='gh_button gh_G'> G <b class='gh_status green'>On</b></div><div class='gh_button gh_U'>U <b class='gh_status red'>Off</b></div><div class='gh_button gh_S'> S <b class='gh_status red'>Off</b></div></div><div class='gh_button gh_H'>H <b class='gh_status red'>Off</b></div><div class='pvm_killed'>Wykonane listy: <b>0</b></div>";

$('body').append("<div id='gh_game_helper'><div id='pvm_killed'>"+$html+"</div>").append("<style>"+$css+"</style>");

/* ACTIONS */
$('#gh_game_helper .gh_listy').click(() => {
	if (stop) {
		$('#gh_game_helper .gh_listy')
		$(".gh_listy .gh_status").removeClass("red").addClass("green").html("On");
		stop = false;
        Load();
	} else {
		$('#gh_game_helper .gh_listy')
		$(".gh_listy .gh_status").removeClass("green").addClass("red").html("Off");
		stop = true;
	}
});
$('#gh_game_helper .gh_S').click(() => {
	if (born && stop) {
		$('#gh_game_helper .gh_S')
		$(".gh_S .gh_status").removeClass("red").addClass("green").html("On");
        born=4;
		$(".gh_U .gh_status").removeClass("green").addClass("red").html("Off");
        $(".gh_G .gh_status").removeClass("green").addClass("red").html("Off");
        $(".gh_H .gh_status").removeClass("green").addClass("red").html("Off");
	} else {
		$('#gh_game_helper .gh_S')
		$(".gh_S .gh_status").removeClass("green").addClass("red").html("Off");
        GAME.komunikat("Zatrzymaj skrypt")
	}
});
$('#gh_game_helper .gh_U').click(() => {
	if (born && stop) {
		$('#gh_game_helper .gh_U')
		$(".gh_U .gh_status").removeClass("red").addClass("green").html("On");
        born=3;
		$(".gh_G .gh_status").removeClass("green").addClass("red").html("Off");
        $(".gh_S .gh_status").removeClass("green").addClass("red").html("Off");
        $(".gh_H .gh_status").removeClass("green").addClass("red").html("Off");
	} else {
		$('#gh_game_helper .gh_U')
		$(".gh_U .gh_status").removeClass("green").addClass("red").html("Off");
        GAME.komunikat("Zatrzymaj skrypt")
	}
});
$('#gh_game_helper .gh_G').click(() => {
	if (born && stop) {
		$('#gh_game_helper .gh_G')
		$(".gh_G .gh_status").removeClass("red").addClass("green").html("On");
        born=2;
		$(".gh_U .gh_status").removeClass("green").addClass("red").html("Off");
        $(".gh_S .gh_status").removeClass("green").addClass("red").html("Off");
        $(".gh_H .gh_status").removeClass("green").addClass("red").html("Off");
	} else {
		$('#gh_game_helper .gh_G')
		$(".gh_G .gh_status").removeClass("green").addClass("red").html("Off");
        GAME.komunikat("Zatrzymaj skrypt")
	}	
});
$('#gh_game_helper .gh_H').click(() => {
	if (born && stop) {
		$('#gh_game_helper .gh_H')
		$(".gh_H .gh_status").removeClass("red").addClass("green").html("On");
        born=5;
		$(".gh_U .gh_status").removeClass("green").addClass("red").html("Off");
        $(".gh_S .gh_status").removeClass("green").addClass("red").html("Off");
        $(".gh_G .gh_status").removeClass("green").addClass("red").html("Off");
	} else {
		$('#gh_game_helper .gh_H')
		$(".gh_H .gh_status").removeClass("green").addClass("red").html("Off");
        GAME.komunikat("Zatrzymaj skrypt")
	}	
});

function UpdateKilledCounter(num){
    $(".pvm_killed b").text(num);
}
function Load(){
    if(!stop && tabela99.includes(gk)){
    GAME.emitOrder({a:32,type:0});
    window.setTimeout(CheckLocation,wait);
} else {
    stop=true;
}
}
function CheckLocation(){
    loc=parseInt(document.getElementsByClassName("green option")[born+1].getAttributeNode("data-loc").value);
    if(GAME.char_data.loc!=loc && !stop && !GAME.is_loading && tabela99.includes(gk)){
        GAME.emitOrder({a:12,type:18,loc:loc});
        tp=true;
        window.setTimeout(Kill,wait_tp);
    } else if(GAME.char_data.loc==loc&&killed1 && !tp && !GAME.is_loading && tabela99.includes(gk)){
        GAME.emitOrder({a:12,type:18,loc:loc});
        killed1=false;
        window.setTimeout(Kill,wait_tp);
    } else {
        window.setTimeout(Kill,wait);
    }
}
function Kill(){
    GAME.emitOrder({a:32,type:0});
    if($('button[data-wanted="'+born+'"]').html() && !GAME.is_loading && tabela99.includes(gk)){
        GAME.emitOrder({a:32,type:2,wanted:born});
        pvm_killed++;
        killed=true;
        killed1=true;
        UpdateKilledCounter(pvm_killed);
        window.setTimeout(Collect,wait);
    } else if(GAME.char_data.x==GAME.map_wanteds.x && GAME.char_data.y==GAME.map_wanteds.y && !killed && document.getElementById("special_list_con").childElementCount>0 && !GAME.is_loading && tabela99.includes(gk)){
        GAME.emitOrder({a:32,type:1,wanted_id:born,quick:1});
        pvm_killed++;
        killed=true;
        killed1=true;
        UpdateKilledCounter(pvm_killed);
        window.setTimeout(Collect,wait*2);
    } else {
        window.setTimeout(CreateMatrix,wait);
    }
}
function Collect(){
    if(killed && !GAME.is_loading && tabela99.includes(gk)){
        GAME.emitOrder({a:32,type:2,wanted:born});
        killed=false;
        Path=[];
        matrix=0;
        killed=false;
        tp=false;
        window.setTimeout(Load,wait*2);
    } else {
        window.setTimeout(Load,wait);
    }
}
function FindMapcell(){
    var mapcell = Object.keys(GAME).find(z=> GAME[z] && GAME[z]['1_1']);
    Object.defineProperty(GAME,'mapcell',{
        get: function(){ return GAME[mapcell]; },
        enumerable: true,
        configurable: true
    });

    return GAME.mapcell;
}
function CreateMatrix(){
    if(GAME.char_data.loc==loc && !stop && tabela99.includes(gk)){
    matrix = [];
    Map = FindMapcell();
    
    for(var i=0; i<parseInt(GAME.map.max_y); i++){
        matrix[i] = [];
        for(var j=0; j<parseInt(GAME.map.max_x); j++){
            if(Map[parseInt(j+1)+'_'+parseInt(i+1)].m==1){
                matrix[i][j] = 1;
            }else{
                matrix[i][j]=0
            }
        }
    }
    window.setTimeout(Go,wait);
}else {
    window.setTimeout(Load,wait);
}
}
function CreateMatrix1(){
    matrix = [];
    Map = FindMapcell();
    
    for(var i=0; i<parseInt(GAME.map.max_y); i++){
        matrix[i] = [];
        for(var j=0; j<parseInt(GAME.map.max_x); j++){
            if(Map[parseInt(j+1)+'_'+parseInt(i+1)].m==1){
                matrix[i][j] = 1;
            }else{
                matrix[i][j]=0
            }
        }
    }
}
function Go(){
	loc=parseInt(document.getElementsByClassName("green option")[born+1].getAttributeNode("data-loc").value);
    if(GAME.char_data.x!=GAME.map_wanteds.x && GAME.char_data.loc==loc && !stop || GAME.char_data.y!=GAME.map_wanteds.y && GAME.char_data.loc==loc && !stop && tabela99.includes(gk)){
	CreateMatrix1();
	easystar.setGrid(matrix);
    
    PathID = easystar.findPath(GAME.char_data.x-1, GAME.char_data.y-1, parseInt(GAME.map_wanteds.x)-1, parseInt(GAME.map_wanteds.y)-1, function(path){
        
        if(path === null){
            window.setTimeout(Load,wait);
            console.log("Path was not found");
        }else{
            if(path[0].x == GAME.char_data.x-1 && path[0].y == GAME.char_data.y-1){
                path.shift();
            }
            
            Path = path;
            Move();
            
        }
    });
    
    easystar.calculate();
} else {
    window.setTimeout(Load,wait);
}
}
function Move(){
	loc=parseInt(document.getElementsByClassName("green option")[born+1].getAttributeNode("data-loc").value);
    if(!stop && !GAME.is_loading && tabela99.includes(gk)){
        if(Path[0].x > GAME.char_data.x-1 && Path[0].y == GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:7,vo:GAME.map_options.vo}); // prawo
            window.setTimeout(Next,wait_speed);
        }else if(Path[0].x < GAME.char_data.x-1 && Path[0].y == GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:8,vo:GAME.map_options.vo}); // lewo
            window.setTimeout(Next,wait_speed);
        }else if(Path[0].x == GAME.char_data.x-1 && Path[0].y > GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:1,vo:GAME.map_options.vo}); // dół
            window.setTimeout(Next,wait_speed);
        }else if(Path[0].x == GAME.char_data.x-1 && Path[0].y < GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:2,vo:GAME.map_options.vo}); // góra
            window.setTimeout(Next,wait_speed);
        }else if(Path[0].x > GAME.char_data.x-1 && Path[0].y > GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:3,vo:GAME.map_options.vo}); // dół - prawo
            window.setTimeout(Next,wait_speed);
        }else if(Path[0].x < GAME.char_data.x-1 && Path[0].y < GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:6,vo:GAME.map_options.vo}); // góra - lewo
            window.setTimeout(Next,wait_speed);
        }else if(Path[0].x > GAME.char_data.x-1 && Path[0].y < GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:5,vo:GAME.map_options.vo}); // góra - prawo
            window.setTimeout(Next,wait_speed);
        }else if(Path[0].x < GAME.char_data.x-1 && Path[0].y > GAME.char_data.y-1){
            GAME.emitOrder({a:4,dir:4,vo:GAME.map_options.vo}); // dół - lewo
            window.setTimeout(Next,wait_speed);
        }else{
            window.setTimeout(Load,wait);
        }
    }
}
function Next(){
	loc=parseInt(document.getElementsByClassName("green option")[born+1].getAttributeNode("data-loc").value);
    if(Path.length-1 > 0 && tabela99.includes(gk)){
        Path.shift();
        Move();
    }else{
        Path=[];
        matrix=0;
        window.setTimeout(Load,wait);
    }
}

LoadES = function(){
    esjs = document.createElement('script');
    esjs.src = 'https://cdn.jsdelivr.net/npm/easystarjs@0.4.3/bin/easystar-0.4.3.min.js';
    esjs.onload = () => {
        easystar = new EasyStar.js();
      easystar.enableDiagonals();

easystar.setAcceptableTiles([1]);

        $("#BOT_control").show();
    }
    document.head.append(esjs);
}();
`
document.body.appendChild(scr)
document.body.removeChild(scr)

console.log("Skrypt (Listy.js) załadowano Poprawnie!")