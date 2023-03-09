GAME.emitOrder = (data) => GAME.socket.emit('ga',data);

var alttech;

var minipanel = document.createElement("div");
minipanel.setAttribute("id", "minipanel");
minipanel.style.width = "440px";
minipanel.style.maxWidth = "440px";
minipanel.style.height = "180px";
minipanel.style.maxHeight = "180px";
minipanel.style.position = "fixed";
minipanel.style.left = "12%";
minipanel.style.top = "50%";
minipanel.style.transform = "translate(-50%, -50%)";
minipanel.style.backgroundColor = "rgba(128,128,128, 0)";
minipanel.style.border = "1px solid #333";
minipanel.style.overflow = "auto";
document.body.appendChild(minipanel);


var panelname = document.createElement("div");
panelname.setAttribute("id", "panelname");
panelname.innerHTML = `<center><span class="style" style="color: #46a6de;">PANEL</span></center>`;
panelname.style.padding = "5px";
panelname.style.textAlign = "center";
panelname.style.fontSize = "large";
minipanel.appendChild(panelname);

var contpanel = document.createElement("div");
contpanel.setAttribute("id", "contpanel");
contpanel.style.marginLeft = "7px";
minipanel.appendChild(contpanel);

const button = document.createElement("button");
button.innerHTML = "<b>AUTO: OFF</b>";
button.style.backgroundColor = "transparent";
button.style.border = "1px solid red";
button.style.color = "red";
button.style.opacity = "0.7";
button.style.padding = "5px 5px";
button.style.fontSize = "10px";
button.style.marginLeft = "7px";


button.addEventListener('click', function() {
    button.style.color = "green";
    button.innerHTML = "<b>AUTO: ON</b>";
    button.style.border = "1px solid green";
    setInterval(function() {
        if ($('#tech_list2').find('.timer').text() === '') {
          GAME.emitOrder({a:18, type:8, tech_id:134});
        }
      }, 10000);
});

      
function panelTimer() {
    if ($('#tech_list2').find('.timer').text() === '') {
        GAME.emitOrder({a:18, type:1});
      }
      
    alttech = $('#tech_list2').find('.timer').text()
    contpanel.innerHTML = `<span style="color: white;"> Mroczna Aura: ${alttech}</span>` ;
    contpanel.appendChild(button);
    }

setInterval(panelTimer, 1000);
