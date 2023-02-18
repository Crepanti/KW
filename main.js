let aktywki = document.getElementById('aktywki')
aktywki.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/aktywki1.js'],
  });
});
let kodowanie = document.getElementById('kodowanie')
kodowanie.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/kodowanie1.js'],
  });
});
let insty = document.getElementById('insty')
insty.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/insty1.js'],
  });
});
let arena = document.getElementById('arena')
arena.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/arena1.js'],
  });
});
let Glebia = document.getElementById('Glebia')
Glebia.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/Glebia1.js'],
  });
});
let klanowe = document.getElementById('klanowe')
klanowe.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/klanowe1.js'],
  });
});
let listy = document.getElementById('listy')
listy.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/listy1.js'],
  });
});
let misty = document.getElementById('misty')
misty.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/misty21.js'],
  });
});
let otchłań = document.getElementById('otchłań')
otchłań.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/otchłań1.js'],
  });
});
let PD = document.getElementById('PD')
PD.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/PD1.js'],
  });
});
let SSJ = document.getElementById('SSJ')
SSJ.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/SSJ1.js'],
  });
});
let tuty = document.getElementById('tuty')
tuty.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/tuty1.js'],
  });
});
let tutyexp = document.getElementById('tutyexp')
tutyexp.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/tutyexp1.js'],
  });
});
let wyprawy = document.getElementById('wyprawy')
wyprawy.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/wyprawy1.js'],
  });
});
let zbijanie = document.getElementById('zbijanie')
zbijanie.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/zbijanie1.js'],
  });
});
let kw = document.getElementById('kw')
kw.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/kw1.js'],
  });
});
let wojny = document.getElementById('wojny')
wojny.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/wojny1.js'],
  });
});
let kody = document.getElementById('kody')
kody.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/kody1.js'],
  });
});
let bezmulti = document.getElementById('bezmulti')
bezmulti.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['scripts/bezmulti1.js'],
  });
});