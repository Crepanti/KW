var scr = document.createElement("script");
scr.type="text/javascript";
scr.innerHTML = `
$(".btn_small_gold.option[data-option='clan_assist']:visible").each( function() {
  console.log($(this).data('tid'), $(this).data('target'))
GAME.socket.emit('ga',{a:39,type:55,tid:$(this).data('tid'),target:$(this).data('target')})
})
`
document.body.appendChild(scr)
document.body.removeChild(scr)
