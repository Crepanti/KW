let wojny = setInterval(() => {
    if(parseInt($('#clan_war_cnt').text()) < 3 && GAME.server==19){
GAME.emitOrder({a:39,type:24,shorts:"ALP"})};
 }, 60000);
