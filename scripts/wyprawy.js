async function wyprawkie() {
	if (GAME.char_tables.timed_actions[0] === undefined || GAME.char_tables.timed_actions[1] === undefined) {
    	await checkCodes();
      GAME.emitOrder({a:10,type:2,ct:0,code:kody});
      customLog("Wyprawa Rozpoczęta: " + kody)
 	kom_clear();
 }
}

setInterval(wyprawkie, 5000); // Wywołuj co 5 sekund

customLog("Skrypt (Wyprawy.js) załadowano Poprawnie!")