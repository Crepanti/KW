/*/ const div = document.createElement("div");

div.style.position = "fixed";
div.style.bottom = "0";
div.style.right = "0";
div.style.width = "24.1%";
div.style.height = "76%";
div.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
div.style.border = "3px solid white"

document.body.appendChild(div);

const header = document.createElement("div");

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
header.innerHTML = "SOLUCJA"

div.appendChild(header);

const text = document.createElement("div");

text.style.position = "absolute";
text.style.top = "60px";
text.style.left = "0px";
text.style.fontSize = "14px";
text.style.color = "white";

div.appendChild(text);

if (GAME.char_data.loc === "904") {
  text.innerHTML = "Solucja";
} else if (GAME.char_data.loc === "Lokacja2") {
  text.innerHTML = "Solucja dla Lokacja2";
} else {
  text.innerHTML = "Solucja dla innych lokacji";
} 

/*/