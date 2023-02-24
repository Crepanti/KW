setInterval(() => {
     checkTR();
       }, 10000 * 1 * 1);
var checkSSJ= true;  

	   function checkTR()
{
	if(checkSSJ && GAME.quick_opts.ssj)
	{
		if($("#ssj_bar")[0].attributes[2].value=="display: none;")
		{
			GAME.emitOrder({a: 18, type: 5, tech_id: GAME.quick_opts.ssj[0]});
			customLog("Włączono SSJ")
			return true;
		}
		else if ($('#ssj_status').text()=="--:--:--"){
			GAME.emitOrder({a:18,type:6});     //wylacza ssj
			customLog("Wyłączono SSJ")
			window.setTimeout(checkTR,100);
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}

customLog("Skrypt (SSJ.js) załadowano Poprawnie!")
