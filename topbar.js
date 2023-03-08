var latency = 0; // Ping

var targetDiv = document.getElementById("top_bar").getElementsByClassName("adv")[0];
var parent = targetDiv.parentNode;
parent.removeChild(targetDiv);

var newDiv = document.createElement("div");
newDiv.className = "adv";
parent.appendChild(newDiv);

function updateTimer() {
  if(GAME.char_id!=0 && GAME.char_data.level!=0){
  //HANDLARZ
  var currentDate = new Date();
  var targetDay = 6; // Sobota
  var targetHour = 20;
  var targetMinute = 0;
  var targetSecond = 0;
  if (currentDate.getDay() === targetDay && currentDate.getHours() < targetHour) {
  var targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), targetHour, targetMinute, targetSecond);
  } else {
  var targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (targetDay + 7 - currentDate.getDay()) % 7, targetHour, targetMinute, targetSecond);
  }

  var timeLeft = targetDate.getTime() - currentDate.getTime();
  var hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
  hoursLeft = hoursLeft.toString().padStart(2, '0');
  var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  minutesLeft = minutesLeft.toString().padStart(2, '0');
  var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
  secondsLeft = secondsLeft.toString().padStart(2, '0');
  
  var handlarz = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
  if(handlarz.indexOf("-") !== -1){
  handlarz = "Aktywny";
  }

  //PING
  GAME.socket.on('pong', function(ms) {
  latency = ms;
  });

  // INSTANCJE
  var icd_codes = [];

  try {
    icd_codes = [
      GAME.char_data.icd_1,
      GAME.char_data.icd_2,
      GAME.char_data.icd_3,
      GAME.char_data.icd_4,
      GAME.char_data.icd_5,
      GAME.char_data.icd_6
    ];
  } catch (err) {
  }

  sum = icd_codes.reduce(function(a, b) {
    return a + b;
  }, 0);

  // SMOCZE KULE
  if ($(`#mdbp_${GAME.char_data.reborn}`).find('.timer').length) {
    element = $(`#mdbp_${GAME.char_data.reborn}`).find('.timer').text();
  } else {
    element = "MOŻNA ZEBRAĆ";
  }

  // AKTYWNOŚĆ
  var active = "0";
  var akt_codes = [];

  // PLANETY
  planety = $(`#clan_inner_stelep`).find('.timer').text();

  try {
  active = $('#char_activity').text();
  akt_codes = [
    document.querySelector("#act_prizes").children[0].classList.value == 'act_prize disabled',
    document.querySelector("#act_prizes").children[1].classList.value == 'act_prize disabled',
    document.querySelector("#act_prizes").children[2].classList.value == 'act_prize disabled',
    document.querySelector("#act_prizes").children[3].classList.value == 'act_prize disabled',
    document.querySelector("#act_prizes").children[4].classList.value == 'act_prize disabled'
  ];
 } catch (err) {
  active = "0";
  akt_codes = [];
 }

  received = akt_codes.reduce(function(a, b) {
    return a + b;
  }, 0);

  // PODSUMOWANIE
  newDiv.innerHTML = `
  <span class="divstyle" style="color: #46a6de;">Smocze Kule:</span> ${element} | 
  <span class="divstyle" style="color: #46a6de;">Handlarz:</span> ${handlarz} | 
  <span class="divstyle" style="color: #46a6de;">Planety:</span> ${planety} | 
  <span class="divstyle" style="color: #46a6de;">Aktywność:</span> ${active} / ${180} (${received}/${5}) | 
  <span class="divstyle" style="color: #46a6de;">Instancje:</span> ${sum} / ${12} | 
  <span class="divstyle" style="color: #46a6de;">Ping:</span> <span id="latencyy">${latency}</span>
  `;
}}

//NANIEŚ DANE
GAME.cached_data = function() {
  this.emitCalls = [{
      a: 33, // Smocze Kule
      type: 0
    },
    {
      a: 49, // Aktywność
      type: 0
    },
    {
      a: 29, // Instancje
      type: 0
    },
    {
      a: 39, // Klan
      type: 35
    },
    {
      a: 18, // Alt Transformacja
      type: 1
    }
  ];
  var pos = $('#char_buffs').offset();
  pos.left -= 75;
  pos.top -= 75;
  this.char_buffs_pos = pos;
  this.emitCalls.forEach(function(data) {
  GAME.socket.emit('ga', data);
  });
}

// WYKONUJ
setInterval(updateTimer, 1000);
setTimeout(GAME.cached_data, 5000);
