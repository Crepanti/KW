let arenaAttempts = 1;

var arenaxxx = setInterval(() => {
      killArena();
       }, 2000 * 1 * 1);

function killArena(){
      GAME.emitOrder({a:46,type:0});
      var gk=GAME.pid;
      var aaa = $("#arena_players").find(".player button"+"[data-option=arena_attack]"+"[data-quick=1]"+":not(.initial_hide_forced)");
      var aaaa = parseInt(aaa.attr("data-index"));
      if(aaa.length > 0 && GAME.timed == 0){
             GAME.socket.emit('ga',{a:46, type:1, index:aaaa, quick:1});
             customLog(`Zaatakowano gracza na Arenie (x${arenaAttempts})`)
             arenaAttempts++;
      }
}

customLog(`Skrypt (Arena.js) załadowano Poprawnie!`)