var p;
GAME.socket.emit('ga',{a:49,type:0});
setTimeout(() => { aktywki(); }, 500); 
function aktywki(){
	GAME.socket.emit('ga',{a:49,type:0});
	p = parseInt($('#char_activity').text());
	if(document.querySelector("#act_prizes").children[0].classList.value!='act_prize ' && document.querySelector("#act_prizes").children[1].classList.value!='act_prize ' && document.querySelector("#act_prizes").children[2].classList.value!='act_prize ' && document.querySelector("#act_prizes").children[3].classList.value!='act_prize ' && document.querySelector("#act_prizes").children[4].classList.value!='act_prize '){
		customLog("Odebrano wszystkie aktywności");
	} else if(p >= 25 && document.querySelector("#act_prizes").children[0].classList.value=='act_prize '){
		GAME.socket.emit('ga',{a:49,type:1,ind:0});
		window.setTimeout(aktywki,500);
	} else if (p >= 50 && document.querySelector("#act_prizes").children[1].classList.value=='act_prize '){
		GAME.socket.emit('ga',{a:49,type:1,ind:1});
		window.setTimeout(aktywki,500);
	} else if (p >= 75 && document.querySelector("#act_prizes").children[2].classList.value=='act_prize '){
		GAME.socket.emit('ga',{a:49,type:1,ind:2});
		window.setTimeout(aktywki,500);
	} else if (p >= 100 && document.querySelector("#act_prizes").children[3].classList.value=='act_prize '){
		GAME.socket.emit('ga',{a:49,type:1,ind:3});
		window.setTimeout(aktywki,500);
	} else if (p >= 150 && document.querySelector("#act_prizes").children[4].classList.value=='act_prize '){
		GAME.socket.emit('ga',{a:49,type:1,ind:4});
		window.setTimeout(aktywki,500);
	} else{
		window.setTimeout(aktywki,500);
	}
}