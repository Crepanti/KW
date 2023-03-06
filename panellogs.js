var logi = "";
var resetBtn = null;

customLog = function(message, color) {
  logtime = $('#server_time').text();
  var logi = localStorage.getItem('logi') || '';
  logi = `<span style="padding-left: 10px; color: ${color};">${logtime}: ` + message + `<br></span>` + logi;
  content.innerHTML = `> <span style="color: white;">${logi}</span>`;
  localStorage.setItem('logi', logi);
};

function getLogs() {
  var logi = localStorage.getItem('logi') || '';
  var logsWithColor = logi.replace(/color:/g, 'color: silver;');
  return logsWithColor;
}

var panel = document.createElement("div");
panel.setAttribute("id", "panel");
panel.style.width = "440px";
panel.style.maxWidth = "440px";
panel.style.height = "350px";
panel.style.maxHeight = "350px";
panel.style.position = "fixed";
panel.style.left = "12%";
panel.style.top = "80%";
panel.style.transform = "translate(-50%, -50%)";
panel.style.backgroundColor = "rgba(128,128,128, 0)";
panel.style.border = "1px solid #333";
panel.style.overflow = "auto";
document.body.appendChild(panel);


var logs = document.createElement("div");
logs.setAttribute("id", "logs");
logs.innerHTML = `<center><span class="style" style="color: #46a6de;">LOGI</span></center>`;
logs.style.padding = "5px";
logs.style.textAlign = "center";
logs.style.fontSize = "large";
panel.appendChild(logs);

var content = document.createElement("div");
content.setAttribute("id", "content");
content.innerHTML = ``;
content.innerHTML = getLogs();
panel.appendChild(content);

var resetBtn = document.createElement("div");
resetBtn.setAttribute("id", "resetBtn");
resetBtn.innerHTML = `<b>X</b>`;
resetBtn.style.position = "absolute";
resetBtn.style.top = "0";
resetBtn.style.right = "0";
resetBtn.style.padding = "5px 10px";
resetBtn.style.backgroundColor = "#46a6de";
resetBtn.style.color = "white";
resetBtn.style.borderRadius = "50%";
resetBtn.style.border = "none";
resetBtn.style.width = "30px";
resetBtn.style.height = "30px";
resetBtn.style.textAlign = "center";
resetBtn.style.cursor = "pointer";

resetBtn.addEventListener("click", function() {
  logtime = $('#server_time').text();
  logi = "";
  content.innerHTML = `> <span style="color: white;">${logtime}: Raporty Wyczyszczone</span>`;
  localStorage.removeItem('logi');
});

panel.appendChild(resetBtn);