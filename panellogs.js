var logi = ""

console.log = function(message) {
    logtime = $('#server_time').text()
    logi = `<span style="padding-left: 10px;">${logtime}: ` + message + `<br></span>` + logi;
    content.innerHTML = `> <span style="color: white;">${logi}</span>`;
}

var panel = document.createElement("div");
panel.setAttribute("id", "panel");
panel.style.width = "440px";
panel.style.maxWidth = "440px";
panel.style.height = "350px";
panel.style.maxHeight = "350px";
panel.style.position = "fixed";
panel.style.left = "12%";
panel.style.top = "70%";
panel.style.transform = "translate(-50%, -50%)";
panel.style.backgroundColor = "rgba(128,128,128, 0.1)";
panel.style.border = "3px solid #333";
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
panel.appendChild(content);

$('#logs').mousedown(function() {
  $('#panel').draggable();
});
$('#logs').mouseup(function() {
  $('#panel').draggable('destroy');
});