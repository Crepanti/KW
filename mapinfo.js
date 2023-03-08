const places = [
  "Pałac Wszechmogącego",
  "Studnia życzeń",
  "Siedziba Czterech Szkół",
  "Siedziba Imperium",
  "Planeta Klanowa",
  "Prywatna Planeta",
  "Wieczny Mrok",
  "Zamarznięte Jezioro",
  "Alternatywny Pałac Wszechmogącego",
  "Wnętrze Cerbera",
  "Niebiański pałac",
  "Knieja",
  "Planeta Bogow - Wschód",
  "Zniszczone Miasto - Wschód",
  "Bezimmiena Planeta",
  "Pola Kaishin",
  "Planeta Potaufeu",
  "Planeta Vestria - Centrum",
  "Planeta Beerusa",
  "Dom Urunai Baby",
  "Kraniec",
  "Obrzeża Areny",
  "Centrum Wszechświata",
  "Zachodnia Stolica",
  "Pobojowisko Skaliste"
];


GAME.endQuest = function(quest_end){
  JQS.qcc.hide();
  $('#field_q_'+quest_end).fadeOut();
  var anyQuestsCompleted = false; 

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
      if(this.map_quests[ind].length === 0){
        anyQuestsCompleted = true;
      }
    }
  }
  
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




/*
ZADANIA CODZIENNE
*/

function wykonano(event) {
  const button = event.target;
  const doneImage = document.createElement("img");
  doneImage.src = "/gfx/layout/done.png";
  doneImage.width = 16;
  doneImage.height = 16;
  button.appendChild(doneImage);
}

function quest2() {
console.log("")
}

function quest3() {
console.log("")
}

const daily = document.createElement("div");

daily.style.position = "fixed";
daily.style.bottom = "35.7%";
daily.style.right = "0";
daily.style.width = "24.1%";
daily.style.height = "40%";
daily.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
daily.style.border = "2px solid white";

document.body.appendChild(daily);

const dailyheader = document.createElement("div");

dailyheader.style.position = "absolute";
dailyheader.style.top = "0";
dailyheader.style.left = "0";
dailyheader.style.width = "100%";
dailyheader.style.padding = "7px 0";
dailyheader.style.textAlign = "center";
dailyheader.style.color = "white";
dailyheader.style.fontSize = "14px";
dailyheader.style.fontWeight = "bold";
dailyheader.innerHTML = "ZADANIA CODZIENNE [Ukończono: 0]"

daily.appendChild(dailyheader);

const dailytext = document.createElement("div");

places.forEach(place => {
  const button = document.createElement("button");
  button.innerHTML = `${place}`;
  button.style.backgroundColor = "transparent";
  button.style.border = "2px solid white";
  button.style.color = "white";
  button.style.opacity = "0.7";
  button.style.padding = "8px 8px";
  button.style.fontSize = "12px";
  button.style.marginLeft = "7px";
  dailytext.appendChild(button);

if (place === "Pałac Wszechmogącego") {
  button.addEventListener("click", wykonano);
} else if (place === "Studnia życzeń") {
  button.addEventListener("click", quest2);
} else if (place === "Siedziba Czterech Szkół") {
  button.addEventListener("click", quest3);
}
});

dailytext.style.position = "absolute";
dailytext.style.top = "40px";
dailytext.style.left = "0px";
dailytext.style.fontSize = "14px";
dailytext.style.color = "white";

daily.appendChild(dailytext);

/*
FABUŁA I QUESTY LOKACJI
*/


const div = document.createElement("div");

div.style.position = "fixed";
div.style.bottom = "0";
div.style.right = "0";
div.style.width = "24.1%";
div.style.height = "35%";
div.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
div.style.border = "2px solid white";

document.body.appendChild(div);



const header = document.createElement("div");

header.style.position = "absolute";
header.style.top = "0";
header.style.left = "0";
header.style.width = "100%";
header.style.padding = "7px 0";
header.style.textAlign = "center";
header.style.color = "white";
header.style.fontSize = "14px";
header.style.fontWeight = "bold";
header.innerHTML = ""

div.appendChild(header);



const text = document.createElement("div");

text.style.position = "absolute";
text.style.top = "60px";
text.style.left = "0px";
text.style.fontSize = "14px";
text.style.color = "white";

div.appendChild(text);

questCoordinates = [];

function createGoButton(x, y) {
  const button = document.createElement("button");
  button.innerHTML = "IDŹ";
  button.style.backgroundColor = "transparent";
  button.style.border = "2px solid white";
  button.style.color = "white";
  button.style.opacity = "0.7";
  button.style.padding = "5px 10px";
  button.style.fontSize = "12px";
  button.style.marginLeft = "7px";
  button.dataset.x = x;
  button.dataset.y = y;
  return button;
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.tagName === 'BUTTON') {
    const x = event.target.dataset.x;
    const y = event.target.dataset.y;
    if (x && y) {
      goQuest(x, y);
    }
  }
});

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
              const button = createGoButton(x, y);
              questNames += button.outerHTML + '   [ ' + x + ' | ' + y + ' ]' + ' ' + quest.name + '<br>';
            }
          }
        }
      }
    }

    text.innerHTML = questNames;
  }
}


function goQuest(x, y) {
  var currentX = Math.round(GAME.char_data.x);
  var currentY = Math.round(GAME.char_data.y);

  var distance = Math.sqrt(Math.pow(currentX - x, 2) + Math.pow(currentY - y, 2));

  if (distance > 0.5) { // Sprawdzamy, czy postać jest wystarczająco blisko celu
    if (currentX > x) {
      GAME.map_move(8); // Poruszanie się w lewo
    } else if (currentX < x) {
      GAME.map_move(7); // Poruszanie się w prawo
    } else if (currentY > y) {
      GAME.map_move(2); // Poruszanie się w górę
    } else if (currentY < y) {
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
header.innerHTML = 'Misja Fabularna:' + textoro;
}

setInterval(function() {
  textorek();
  if (typeof textoro === 'undefined' || textoro === '') {
    textorek();
  }
}, 1000);
