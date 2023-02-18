kom_clear();
var kom='<div class="quest_desc">&raquo; '+LNG.lab372+':<br /><div class="game_input"><input id="promo_code" type="text" value="miko2021" /></div><br /><br /><div id="promo_captcha" class="captcha_container"></div><br /><button class="option newBtn" data-option="promo_code_go">OK</button></div>';
GAME.komunikat(kom);
option_bind();
GAME.load_captcha('#promo_captcha','promo_captcha',0,1);