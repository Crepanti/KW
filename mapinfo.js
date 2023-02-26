GAME.endQuest = function(quest_end){
  JQS.qcc.hide();
  $('#field_q_'+quest_end).fadeOut();
  var anyQuestsCompleted = false; // zmienna przechowująca informację o tym, czy chociaż jedno zadanie zostało zakończone

  for(var ind in this.map_quests){
    if(this.map_quests.hasOwnProperty(ind)){
      var len=this.map_quests[ind].length;
      for(var i=0;i<len;i++){
        if(this.map_quests[ind][i].qb_id==quest_end){
          this.map_quests[ind][i].end=1;
        }
      }
      this.map_quests[ind] = this.map_quests[ind].filter(function(quest) {
        return quest.end != 1;
      });
      // Sprawdź, czy lista zadań dla danej części mapy jest pusta
      if(this.map_quests[ind].length === 0){
        anyQuestsCompleted = true;
      }
    }
  }
  
  // Wywołaj funkcję updateQuestNames(), jeśli co najmniej jedno zadanie zostało zakończone
  if (anyQuestsCompleted) {
    updateQuestNames();
  }
};

GAME.moveQuest = function(quest_move){
	if(this.char_data.loc==quest_move.loc){
		JQS.qcc.hide();
		$('#field_q_'+quest_move.qb_id).fadeOut();
		for(var ind in this.map_quests){
			if(this.map_quests.hasOwnProperty(ind)){
				var len=this.map_quests[ind].length;
				for(var i=0;i<len;i++){
					if(this.map_quests[ind][i].qb_id==quest_move.qb_id){
						this.map_quests[ind][i].move={new_x:quest_move.x,new_y:quest_move.y,start:this.getmTime(),duration:300};
					}
				}
			}
		}
	}
	else this.endQuest(quest_move.qb_id);
  updateQuestNames();
}

// Utwórz element div
const div = document.createElement("div");

// Ustaw styl elementu div
div.style.position = "fixed";
div.style.bottom = "0";
div.style.right = "0";
div.style.width = "24.1%";
div.style.height = "76%";
div.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Ustaw przezroczysty kolor tła
div.style.border = "3px solid white"; // Dodaj białą ramkę o grubości 3 pikseli

// Dodaj element div do ciała strony
document.body.appendChild(div);

// Utwórz element div dla nagłówka
const header = document.createElement("div");

// Ustaw styl elementu header
header.style.position = "absolute";
header.style.top = "0";
header.style.left = "0";
header.style.width = "100%";
header.style.padding = "7px 0";
header.style.textAlign = "center";
header.style.backgroundColor = "rgba(20, 20, 19)";
header.style.color = "white";
header.style.fontSize = "14px";
header.style.fontWeight = "bold";

div.appendChild(header);

// Utwórz element div dla tekstu
const text = document.createElement("div");

// Ustaw styl elementu text
text.style.position = "absolute";
text.style.top = "60px";
text.style.left = "0px";
text.style.fontSize = "14px";
text.style.color = "white";

div.appendChild(text);

questCoordinates = [];

function updateQuestNames() {
  if (typeof GAME.char_data !== 'undefined') {
    const quests = GAME.map_quests;
    let questNames = '';

    for (let key in quests) {
      if (quests.hasOwnProperty(key)) {
        const modifiedKey = key.replace('_', ' | ');
        parts = modifiedKey.split(" | ");
        const x = parts[0]; // X
        const y = parts[1]; // Y
        questCoordinates[key] = { x, y };
    
        if (quests[key] && quests[key].length > 0) {
          for (let quest of quests[key]) {
            if (quest && typeof quest === 'object' && Object.keys(quest).length > 0 && quest.name) {
              questNames += '<button class="active newBtn option left" onclick="goQuest(' + x + ', ' + y + ')">IDŹ</button> ' + ' [ ' + x + ' | ' + y + ' ]' + ': ' + quest.name + '<br>';
            }
          }
        }
      }
    }

    text.innerHTML = questNames;
  }
}


function goQuest(x, y) {
  if (GAME.char_data.x !== x || GAME.char_data.y !== y) {
    if (GAME.char_data.x > x) {
      GAME.map_move(8); // Poruszanie się w lewo
    } else if (GAME.char_data.x < x) {
      GAME.map_move(7); // Poruszanie się w prawo
    } else if (GAME.char_data.y > y) {
      GAME.map_move(2); // Poruszanie się w górę
    } else if (GAME.char_data.y < y) {
      GAME.map_move(1); // Poruszanie się w dół
    }
    
    setTimeout(function() {
      goQuest(x, y);
    }, 50);
  }
}

let _mapQuests = GAME.map_quests;

Object.defineProperty(GAME, "map_quests", {
  get: function() {
    return _mapQuests;
  },
  set: function(value) {
    _mapQuests = value;
    updateQuestNames();
    textorek();
  }
});

function textorek() {
  textoro = $('#drag_con').find('.sep3').parent().clone().html(function() {
    return $(this).contents().filter(function() {
      return this.tagName !== 'B';
    });
  }).html();
header.innerHTML = '[ GŁÓWNA ]' + textoro;
}

setInterval(function() {
  if (typeof textoro === 'undefined' || textoro === '') {
    textorek();
  }
}, 30000);
