var en;
GAME.socket.emit('ga',{a:44,type:0});
setTimeout(() => { insty(); }, 500); 
function insty(){
	if (en==undefined){
		GAME.socket.emit('ga',{a:44,type:0});
		window.setTimeout(insty,100);
	} else if (en==0){
		GAME.socket.emit('ga',{a:44,type:0});
		GAME.socket.emit('ga',{a:44,type:9,emp:id});
		window.setTimeout(insty,100);
	} else if (GAME.char_data.icd_1 < 2){
		GAME.socket.emit('ga',{a:44,type:0});
		GAME.socket.emit('ga',{a:44,type:8,emp:id,inst:1});
		window.setTimeout(insty,100);
	} else if (GAME.char_data.icd_2 < 2){
		GAME.socket.emit('ga',{a:44,type:0});
		GAME.socket.emit('ga',{a:44,type:8,emp:id,inst:2});
		window.setTimeout(insty,100);
	} else if (GAME.char_data.icd_3 < 2){
		GAME.socket.emit('ga',{a:44,type:0});
		GAME.socket.emit('ga',{a:44,type:8,emp:id,inst:3});
		window.setTimeout(insty,100);
	} else if (GAME.char_data.icd_4 < 2){
		GAME.socket.emit('ga',{a:44,type:0});
		GAME.socket.emit('ga',{a:44,type:8,emp:id,inst:4});
		window.setTimeout(insty,100);
	} else if (GAME.char_data.icd_5 < 2){
		GAME.socket.emit('ga',{a:44,type:0});
		GAME.socket.emit('ga',{a:44,type:8,emp:id,inst:5});
		window.setTimeout(insty,100);
	} else if (GAME.char_data.icd_6 < 2){
		GAME.socket.emit('ga',{a:44,type:0});
		GAME.socket.emit('ga',{a:44,type:8,emp:id,inst:6});
		window.setTimeout(insty,100);
	} else {
		customLog("Wykonano wszystkie instancje")
	}
}