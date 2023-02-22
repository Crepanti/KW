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
header.style.backgroundColor = "#46a6de";
header.style.color = "white";
header.style.fontSize = "14px";
header.style.fontWeight = "bold";

div.appendChild(header);

// Utwórz element div dla tekstu
const text = document.createElement("div");

// Ustaw styl elementu text
text.style.position = "absolute";
text.style.top = "50px";
text.style.left = "0px";
text.style.fontSize = "14px";
text.style.color = "white";

div.appendChild(text);

function updateQuestNames() {
  if (typeof GAME.char_data !== 'undefined') {
    const quests = GAME.map_quests;
    let questNames = '';

    for (let key in quests) {
      if (quests.hasOwnProperty(key)) {
        const modifiedKey = key.replace('_', ' | ');

        for (let quest of quests[key]) {
          questNames += '<button class="active newBtn option left" onclick="GoQuest()">IDŹ</button> ' + ' [ ' + modifiedKey + ' ]' + ': ' + quest.name + '<br>';
        }
      }
    }

    // Show the quest names in the text element
    text.innerHTML = questNames;
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
  }
});

function textorek() {
  const textoro = $('#drag_con').find('.sep3').parent().clone().find('b').replaceWith(function() {
    return $(this).contents();
  }).end().html();
header.innerHTML = '[ GŁÓWNA ]' + textoro;
}

setInterval(function() {
  textorek();
}, 5000);