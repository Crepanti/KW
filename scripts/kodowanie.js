function updateTime() {
  if (GAME.char_tables.timed_actions[0] === undefined) {
    const date = new Date();
    if (date.getMinutes() === 0 && date.getSeconds() === 5) {
      main2();
    }
  } else {
    const date = new Date();
    if (date.getMinutes() === 0 && date.getSeconds() === 5) {
      main1();
    }
  }
}

async function main2() {
    await checkCodes();
    GAME.emitOrder({a:8,type:2,stat:1,duration:1,code:kody,master:0});
    console.log("Trening odpalony: " + kody)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await checkCodes();
    GAME.emitOrder({a:8,type:5,doublec:$("#train_upgrade_double").is(':checked'),multi:$("#train_upgrade_multi").is(':checked'),code:kody,apud:'vzaaa'});
    console.log("Ulepszono trening: " + kody)
    setTimeout(() => {GAME.ask_confirm(15,{a:8,type:3});}, 2000)
    setTimeout(() => {GAME.emitOrder(GAME.confirm_order);}, 3000)
    setTimeout(() => {kom_clear();}, 4000)
}

async function main1() {
    await checkCodes();
    GAME.emitOrder({a:8,type:5,doublec:$("#train_upgrade_double").is(':checked'),multi:$("#train_upgrade_multi").is(':checked'),code:kody,apud:'vzaaa'});
    console.log("Ulepszono trening: " + kody)
    setTimeout(kom_clear, 2000);
}


setInterval(updateTime, 1000); // Wywołuj co sekunde

console.log("Skrypt (Kodowanie.js) załadowano Poprawnie!")