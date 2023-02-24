BOT = {
    chars:[],
    timeout:5000,
}

function updateTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  
  if ((minutes === 0 || minutes === 2 || minutes === 4) && date.getSeconds() === 5) {
    main2();
  }
}

BOT.GetChars = function(){
    for(i=0; i<GAME.player_chars; i++){
        char = $("li[data-option=select_char]").eq(i);
        BOT.chars.push({id: char.attr("data-char_id"), source: 'select_char'});
    }
    $("li[data-option=select_zast]").each(function() {
        BOT.chars.push({id: $(this).attr("data-char_id"), source: 'select_zast'});
    });
}();

BOT.Start = function(){
    if (this.chars.length > 0) {
        for (let i = 0; i < this.chars.length; i++) {
            let char_id = parseInt(this.chars[i].id);
            let source = this.chars[i].source;
            if (source === 'select_char') {
                setTimeout(function(){ BOT.LogIn(char_id); }, i * this.timeout);
            } else if (source === 'select_zast') {
                setTimeout(function(){ BOT.LogIn(char_id, 1); }, i * this.timeout);
            }
        }
        setTimeout(function(){ BOT.LogIn(BOT.chars[0].id); }, this.chars.length * this.timeout);
    }
}

BOT.LogIn = function(char_id, type = 0){
    checkCodes();
    let orders = {a:2,char_id:char_id};
    if (type === 1) {
        orders.type = 1;
    }
    GAME.emitOrder(orders);
    setTimeout(function(){  GAME.emitOrder(order); }, 2000);
    setTimeout(function(){  GAME.emitOrder({a:8,type:5,doublec:$("#train_upgrade_double").is(':checked'),multi:$("#train_upgrade_multi").is(':checked'),code:kody,apud:'vzaaa'}); }, 4000);
}



async function main2() {
    await checkCodes();
      const stat = parseInt(statSelect.value);
      const duration = parseInt(durationSelect.value);
      order.stat = stat;
      order.duration = duration;
      BOT.Start();
}


setInterval(updateTime, 1000); // Wywołuj co sekunde




const panelek = document.createElement('div');

panelek.style.position = 'fixed';
panelek.style.top = '30px';
panelek.style.left = '0px';
panelek.style.padding = '10px';
panelek.style.background = '#1c1c1c';
panelek.style.border = '1px solid #444';
panelek.style.borderRadius = '5px';
panelek.style.color = '#fff';
panelek.style.fontSize = '16px';
panelek.style.zIndex = '9999';
panelek.style.width = '200px';

let isDragging = false;
let startX, startY, initialX, initialY;

panelek.addEventListener('mousedown', function(e) {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  initialX = panelek.offsetLeft;
  initialY = panelek.offsetTop;
});

panelek.addEventListener('mouseup', function() {
  isDragging = false;
});

panelek.addEventListener('mousemove', function(e) {
  if (isDragging) {
    e.preventDefault();
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    panelek.style.left = `${initialX + dx}px`;
    panelek.style.top = `${initialY + dy}px`;
  }
});

const statLabel = document.createElement('label');
statLabel.textContent = 'STATYSTYKA:';
statLabel.style.display = 'block';
statLabel.style.marginBottom = '5px';

const statSelect = document.createElement('select');
const statOptions = ['Siła', 'Szybkość', 'Wytrzymałość', 'Siła Woli', 'Energia KI', 'Wtajemniczenie'];
for (let i = 0; i < statOptions.length; i++) {
  const option = document.createElement('option');
  option.value = i+1;
  option.text = statOptions[i];
  statSelect.appendChild(option);
}
statSelect.style.display = 'block';
statSelect.style.marginBottom = '10px';
statSelect.style.width = '100%';
statSelect.style.padding = '5px';
statSelect.style.borderRadius = '5px';
statSelect.style.background = '#444';
statSelect.style.color = '#fff';
statSelect.style.border = 'none';

const durationLabel = document.createElement('label');
durationLabel.textContent = 'CZAS:';
durationLabel.style.display = 'block';
durationLabel.style.marginBottom = '5px';

const durationSelect = document.createElement('select');
for (let i = 1; i <= 12; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.text = i + " godz.";
  durationSelect.appendChild(option);
}
durationSelect.style.display = 'block';
durationSelect.style.marginBottom = '10px';
durationSelect.style.width = '100%';
durationSelect.style.padding = '5px';
durationSelect.style.borderRadius = '5px';
durationSelect.style.background = '#444';
durationSelect.style.color = '#fff';
durationSelect.style.border = 'none';

statSelect.addEventListener('change', function() {
  order.stat = parseInt(this.value);
});

durationSelect.addEventListener('change', function() {
  order.duration = parseInt(this.value);
});

const order = {
  a: 8,
  type: 2,
  stat: 1,
  duration: 1,
  code: kody,
  master: 0
};

panelek.appendChild(statLabel);
panelek.appendChild(statSelect);
panelek.appendChild(durationLabel);
panelek.appendChild(durationSelect);

document.body.appendChild(panelek);

log("Skrypt Multi.js Załadowany Poprawnie")