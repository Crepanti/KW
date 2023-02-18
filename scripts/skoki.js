GAME.emit = function(order,data,force){
	if(!this.is_loading||force){
		this.load_start();
		this.socket.emit(order,data);
	}
	else if(this.debug) console.log('failed order',order,data);
}
GAME.emitOrder = function(data,force=false){
	this.emit('ga',data,force);
}
GAME.initiate = function(){
	$('#player_login').text(this.login);
	$('#game_win').show();
	if(this.char_id==0&&this.pid>0){
		this.emitOrder({a:1});
	}
	var len=this.servers.length,con='';
	for(var i=0;i<len;i++){
		con+='<option value="'+this.servers[i]+'">'+LNG['server'+this.servers[i]]+'</option>';
	}
	$('#available_servers').html(con);
	$('#available_servers option[value='+this.server+']').prop('selected',true);
}

var tabela99;
var gk=GAME.pid;

setInterval(() => {
	if(GAME.char_tables.timed_actions[0]==undefined && tabela99.includes(gk) || GAME.char_tables.timed_actions[1]==undefined && GAME.char_data.bonus16>GAME.getTime() && tabela99.includes(gk))
     GAME.emitOrder({a:10,type:2,ct:1,code:solution.join("")});
    reloadSVGcaptcha();
 kom_clear();
       }, 5000);


