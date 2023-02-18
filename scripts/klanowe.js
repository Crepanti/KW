
let bufki2 = setInterval(() => {
let bufki = setInterval(() => {
	 if(GAME.char_id == 0){
	 } else if(GAME.klan_data==undefined){
		 GAME.emitOrder({a:39,type:0});
	 } else if(GAME.klan_data.war_buff == 20){
		 clearInterval(bufki);
	 } else if(GAME.klan_data.war_buff < 20 && GAME.clan_laws.buffer==1){
		 GAME.emitOrder({a:39,type:26});
	 } else { 
	 }
 }, 100);
 
 let bufki1 = setInterval(() => {
	 if(GAME.char_id == 0){
	 } else if(GAME.klan_data==undefined){
		 GAME.emitOrder({a:39,type:0});
	 } else if(GAME.klan_data.prp_buff == 8){
		 clearInterval(bufki1);
	 } else if(GAME.klan_data.prp_buff < 8 && GAME.clan_laws.buffer==1){
		 GAME.emitOrder({a:39,type:29});
	 } else { 
	 }
 }, 100);
  }, 5000);
