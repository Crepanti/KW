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