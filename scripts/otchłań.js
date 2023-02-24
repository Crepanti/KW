setInterval(() => {
     soulFight();
       }, 10000 * 1 * 1);

var buttonArray = $( "button[data-option='arena_attack']");
arenaPlayerIndex = 1;
waitArena2 = 1000;

function soulFight(){
GAME.emitOrder({a:59,type:0});
if($("#ss_cd_still")[0].style[0]=="display"){
customLog("Walka w Otchłani");
window.setTimeout(soulFightGameFunction,waitArena2);
window.setTimeout(closeFight,waitArena2*2);

}
window.setTimeout(waitArena2);
}
function soulFightGameFunction(){
GAME.emitOrder({a:59,type:1})
}
function closeFight(){
clearInterval(GAME.fight_timer);
$('#fight_view').fadeOut();
}

customLog("Skrypt (Otchłań.js) załadowano Poprawnie!")