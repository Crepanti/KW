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
header.style.fontSize = "16px";
header.style.fontWeight = "bold";

header.innerHTML = `Zadania`;
div.appendChild(header);

// Utwórz element div dla tekstu
const text = document.createElement("div");

// Ustaw styl elementu text
text.style.position = "absolute";
text.style.top = "50px";
text.style.left = "0px";
text.style.fontSize = "12px";
text.style.color = "white";

function textorek() {
const textoro = $('#drag_con').find('.sep3').parent()[0].textContent;
text.innerHTML = textoro;
}
let prevLoc = GAME.char_data.loc;

function updateQuestNames() {
    if (GAME.char_data.loc !== prevLoc) {
    prevLoc = GAME.char_data.loc;
    const quests = GAME.map_quests;
    let questNames = '';

for (let key in quests) {
    if (quests.hasOwnProperty(key)) {
      const modifiedKey = key.replace('_', ' | ');
      
      for (let quest of quests[key]) {
        questNames += '[ ' + modifiedKey + ' ]' + ': ' + quest.name + '<br>';
      }
    }
  }
    }
}

div.appendChild(text);

setInterval(function() {
    textorek();
  }, 1000);