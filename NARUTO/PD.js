GAME.emit = function (_0x311fbe, _0x171be6, _0x3ff7b7) {
  if (!this.is_loading || _0x3ff7b7) {
    this.load_start()
    this.socket.emit(_0x311fbe, _0x171be6)
  } else {
    if (this.debug) {
      console.log('failed order', _0x311fbe, _0x171be6)
    }
  }
}
GAME.emitOrder = function (_0x56ad68, _0x4541c8 = false) {
  this.emit('ga', _0x56ad68, _0x4541c8)
}
GAME.initiate = function () {
  $('#player_login').text(this.login)
  $('#game_win').show()
  this.char_id == 0 && this.pid > 0 && this.emitOrder({ a: 1 })
  var _0x1afff0 = this.servers.length,
    _0xffb899 = ''
  for (var _0x2541fe = 0; _0x2541fe < _0x1afff0; _0x2541fe++) {
    _0xffb899 +=
      '<option value="' +
      this.servers[_0x2541fe] +
      '">' +
      LNG['server' + this.servers[_0x2541fe]] +
      '</option>'
  }
  $('#available_servers').html(_0xffb899)
  $('#available_servers option[value=' + this.server + ']').prop(
    'selected',
    true
  )
}
$(document).bind('keydown', '1', function () {
  return (
    JQS.chm.is(':focus') == false && $('#gh_game_helper .gh_pvp').click(), false
  )
})
var caseNumber = 0,
  wait = 20,
  wait2 = 1,
  czekajpvp = 200,
  licznik = 0,
  antybot = false,
  stop = true,
  dogory = false,
  loc,
  tabelka = [1, 2, 4],
  adimp = false,
  i = 0,
  d = 0,
  g = 1,
  tele = false,
  gk = GAME.pid,
  w = 0
  var kodysa = true // kody
  var kodyse = false // kody
  const $css =
    '#gh_game_helper {min-width:100px; padding:5px; border:solid white 3px; background:black; color:white; position: fixed; top: 40px; right: 5px; z-index:5;}#gh_game_helper .gh_button {cursor:pointer;text-align:center;}',
  $html =
    "<div class='gh_button gh_pvp'>PVP <b class='gh_status red'>Off</b></div><div class='gh_button gh_wi'>WI <b class='gh_status red'>Off</b></div>-------------------<div class='gh_button gh_kodys'>Kody <b class='gh_status red'>Off</b></div>"
$('body')
  .append("<div id='gh_game_helper'>" + $html + '</div>')
  .append('<style>' + $css + '</style>')
$('#gh_game_helper .gh_pvp').click(() => {
  stop
    ? ($('#gh_game_helper .gh_pvp'),
      $('.gh_pvp .gh_status').removeClass('red').addClass('green').html('On'),
      (stop = false),
      start())
    : ($('#gh_game_helper .gh_pvp'),
      $('.gh_pvp .gh_status').removeClass('green').addClass('red').html('Off'),
      (stop = true))
})
$('#gh_game_helper .gh_wi').click(() => {
  adimp
    ? ($('#gh_game_helper .gh_wi'),
      $('.gh_wi .gh_status').removeClass('green').addClass('red').html('Off'),
      (adimp = false))
    : ($('#gh_game_helper .gh_wi'),
      $('.gh_wi .gh_status').removeClass('red').addClass('green').html('On'),
      (adimp = true))
})
$('#gh_game_helper .gh_kodys').click(() => {
  if (kodysa) {
    $('#gh_game_helper .gh_kodys')
    $(".gh_kodys .gh_status").removeClass("red").addClass("green").html("On");
    kodyse = true;
    kodysa = false; 
  } else {
    $('#gh_game_helper .gh_kodys')
    $(".gh_kodys .gh_status").removeClass("green").addClass("red").html("Off");
    kodyse = false;
    kodysa = true; 
  }
});

function updateTime() {
  const date = new Date();
  if (kodyse && date.getMinutes() === 0 && date.getSeconds() === 5) {
    main5();
  }

  if (kodyse && date.getMinutes() === 59 && (date.getSeconds() === 50)) {
    stop = true;
  }
}

async function main5() {
  stop = true

  await checkCodes();

  setTimeout(() => {
    GAME.emitOrder({a:8,type:2,stat:1,duration:1,code:kody});
    }, 3000);

  setTimeout(async () => {
    await checkCodes();
    }, 5000);

  setTimeout(() => {
    GAME.emitOrder({
    a: 8,
    type: 5,
    doublec: $("#train_upgrade_double").is(':checked'),
    multi: $("#train_upgrade_multi").is(':checked'),
    code: kody,
    apud: 'vzaaa'
    });
    }, 8000);

  setTimeout(() => {
    GAME.emitOrder({
    e: 0,
    a: 8,
    type: 3
    });
    }, 10000);

  setTimeout(() => {
    stop = false;
    }, 13000);

    setTimeout(() => {
    start();
    }, 14000);
}

var tabela99
function start() {
  stop === false &&
    tabela99.includes(gk) &&
    ($('#player_list_con').find('[data-option=load_more_players]').click(),
    parseInt($('#clan_war_cnt').text()) < 2 &&
      GAME.server == 19 &&
      GAME.char_data.klan_id != 0 &&
      GAME.char_data.klan_rent == 0 &&
      GAME.emitOrder({
        a: 39,
        type: 24,
        shorts: 'ALP;GRIM',
      }),
    parseInt($('#clan_war_cnt').text()) < 4 &&
      GAME.server == 16 &&
      GAME.char_data.klan_rent == 0 &&
      GAME.emitOrder({
        a: 39,
        type: 24,
        shorts: 'TAKA;LALA;AFK;LOL',
      }),
    parseInt($('#clan_war_cnt').text()) < 8 &&
      GAME.server == 17 &&
      GAME.emitOrder({
        a: 39,
        type: 24,
        shorts: 'ABCA;BTL;SSJ;FaH;Super;ESP;DEST;NAS;SDS',
      }),
    parseInt($('#clan_war_cnt').text()) < 5 &&
      GAME.server == 18 &&
      GAME.emitOrder({
        a: 39,
        type: 24,
        shorts: 'lego;Domin;las;jad;Legion',
      }),
    ((parseInt($('#clan_war_cnt').text()) < 25 &&
      GAME.server == 1 &&
      GAME.char_data.klan_id == 3542) ||
      (parseInt($('#clan_war_cnt').text()) < 20 &&
        GAME.server == 1 &&
        GAME.char_data.klan_id == 3434) ||
      (parseInt($('#clan_war_cnt').text()) < 20 &&
        GAME.server == 1 &&
        GAME.char_data.klan_id == 10314)) &&
      GAME.emitOrder({
        a: 39,
        type: 24,
        shorts:
          'fdsfsd;DK;PAKT;ZONG;DEMON;DOME;Legend;FRSPG;Saiyan;UVM;Ramizb;DARK;Shadow;MoOEn;MWars;LWDB;GM;Soul;JSKA;Say;Ssc;ZSCH;BDS;gimme;SSJL;SDS;CORP;PT;ROYALE;LEGION;BSS;BTK;WBB;LORDS;KNIGHT;LSSJ;BHD;ABCDEG;SzMR;GSayan;SKS',
      }),
    parseInt($('#clan_war_cnt').text()) < 20 &&
      GAME.server == 1 &&
      GAME.char_data.klan_id == 25617 &&
      GAME.emitOrder({
        a: 39,
        type: 24,
        shorts:
          'fdsfsd;DK;PAKT;ZONG;DEMON;DOME;FRSPG;Saiyan;UVM;Ramizb;DARK;Shadow;MoOEn;MWars;LWDB;GM;Soul;JSKA;Say;Ssc;ZSCH;BDS;gimme;SSJL',
      }),
    parseInt($('#clan_war_cnt').text()) < 20 &&
      GAME.char_data.klan_id == 12 &&
      GAME.emitOrder({
        a: 39,
        type: 24,
        shorts:
          'kal;punk;len;lgbt;sofa;STAR;cyc;Angels;ROYAL;KNIGHT;6DW;DIVINE;DT;SPARTA;CHLEB;Error;LF;9L;9DL;8BO;Kaeru',
      }),
    parseInt($('#clan_war_cnt').text()) < 7 &&
      GAME.char_data.klan_id == 6 &&
      GAME.emitOrder({
        a: 39,
        type: 24,
        shorts: 'cyc;kal;sofa;lgbt;len;punk;star',
      }),
    !GAME.is_loading && !stop && tabela99.includes(gk)
      ? !GAME.is_loading && tabela99.includes(gk)
        ? !checkAntyBot() ||
          (!GAME.is_loading && !stop && tabela99.includes(gk))
          ? _0x92ce15()
          : window.setTimeout(idziewgore, 6000)
        : window.setTimeout(start, wait)
      : window.setTimeout(start, wait))
  function _0x92ce15() {
    switch (caseNumber) {
      case 0:
        caseNumber++, check_position_x()
        break
      case 1:
        caseNumber++, check_position_y()
        break
      case 2:
        caseNumber++, check()
        break
      case 3:
        caseNumber++, check_players()
        break
      case 4:
        caseNumber++, kill_players()
        break
      case 5:
        caseNumber++, check_players2()
        break
      case 6:
        caseNumber++, wojny1()
        break
      case 7:
        caseNumber++, check_location()
        break
      case 8:
        ;(caseNumber = 0), go()
        break
      case 9:
        ;(caseNumber = 0), go()
        break
      default:
    }
  }
}
function check_position_x() {
  x = GAME.char_data.x
  window.setTimeout(start, wait)
}
function check_position_y() {
  y = GAME.char_data.y
  window.setTimeout(start, wait)
}
function checkAntyBot() {
  return GAME.premiumData === undefined || GAME.premiumData === null
    ? false
    : ((obecnyy = $('#map_y').text()),
      (obecnyx = $('#map_x').text()),
      (tab = GAME.premiumData),
      (tab1 = Object.entries(tab)),
      (dlugosctablicy = tab1.length),
      (tab2 = tab1[dlugosctablicy - 1]),
      (tab3 = tab2[0].split('_')),
      (koordx = parseInt(tab3[0])),
      (koordy = parseInt(tab3[1])),
      true)
}
function idziewgore() {
  y = parseInt($('#map_y').text())
  if (y < koordy) {
    GAME.map_move(1)
    window.setTimeout(idziewboki, waitzagadka)
  } else {
    if (y > koordy) {
      GAME.map_move(2)
      window.setTimeout(idziewboki, waitzagadka)
    } else {
      y == koordy && window.setTimeout(idziewboki, waitzagadka)
    }
  }
}
function idziewboki() {
  x = parseInt($('#map_x').text())
  if (x < koordx) {
    GAME.map_move(7)
    window.setTimeout(idziewgore, waitzagadka)
  } else {
    if (x > koordx) {
      GAME.map_move(8)
      window.setTimeout(idziewgore, waitzagadka)
    } else {
      x == koordx && y == koordy
        ? window.setTimeout(powrot, waitzagadka)
        : window.setTimeout(idziewgore, waitzagadka)
    }
  }
}
function powrot() {
  x = parseInt($('#map_x').text())
  if (x < obecnyx) {
    GAME.map_move(7)
    window.setTimeout(powrot2, waitzagadka)
  } else {
    if (x > obecnyx) {
      GAME.map_move(8)
      window.setTimeout(powrot2, waitzagadka)
    } else {
      x == obecnyx && window.setTimeout(powrot2, waitzagadka)
    }
  }
}
function powrot2() {
  y = parseInt($('#map_y').text())
  if (y < obecnyy) {
    GAME.map_move(1)
    window.setTimeout(powrot, waitzagadka)
  } else {
    if (y > obecnyy) {
      GAME.map_move(2)
      window.setTimeout(powrot, waitzagadka)
    } else {
      y == obecnyy && x == obecnyx
        ? window.setTimeout(start, waitzagadka)
        : window.setTimeout(powrot, waitzagadka)
    }
  }
}
function check_players() {
  $('#player_list_con').find('[data-option=load_more_players]').click()
  0 < document.getElementById('player_list_con').childElementCount
    ? ((y = GAME.char_data.y),
      (tabb = document
        .getElementById('player_list_con')
        .children[0].children[1].children[0].textContent.split(':')),
      document.getElementById('player_list_con').children[0].children[1]
        .childElementCount == 3
        ? ((tabb = document
            .getElementById('player_list_con')
            .children[0].children[1].children[0].textContent.split(':')),
          (parseInt(tabb[1]) <= 0 && y == 2) ||
          (parseInt(tabb[2]) <= 20 && parseInt(tabb[1]) <= 0) ||
          (parseInt(tabb[1]) <= 1 && y == 2 && parseInt(tabb[2]) <= 20)
            ? window.setTimeout(check_players, 3300)
            : window.setTimeout(start, czekajpvp / 2))
        : window.setTimeout(start, czekajpvp / 2))
    : window.setTimeout(start, wait)
}
function check_players2() {
  var _0xd1d0e2 = $('#player_list_con').find(
      '.player button[data-option=pvp_attack][data-quick=1]:not(.initial_hide_forced)'
    ),
    _0xbb55d0 = $('#player_list_con').find(
      '.player button[data-option=gpvp_attack][data-quick=1]:not(.initial_hide_forced)'
    )
  kill_players1()
  window.setTimeout(
    start,
    (czekajpvp * (_0xd1d0e2.length + _0xbb55d0.length) * 3) / 2 + wait
  )
  licznik = 0
}
function kill_players() {
  var _0x183c34 = $('#player_list_con').find(
      '.player button[data-option=pvp_attack][data-quick=1]:not(.initial_hide_forced)'
    ),
    _0x26fa7a = $('#player_list_con').find(
      '.player button[data-option=gpvp_attack][data-quick=1]:not(.initial_hide_forced)'
    )
  if (
    $('#player_list_con').find('[data-option=load_more_players]').length == 1
  ) {
    $('#player_list_con').find('[data-option=load_more_players]').click()
    window.setTimeout(kill_players, 150)
  } else {
    if (_0x183c34.length + _0x26fa7a.length == 0) {
      kill_players1()
      window.setTimeout(
        start,
        czekajpvp * (_0x183c34.length + _0x26fa7a.length) + wait
      )
    } else {
      licznik < document.getElementById('player_list_con').childElementCount
        ? document.getElementById('player_list_con').children[licznik]
            .children[1].children[0].attributes[1].value === 'gpvp_attack' ||
          document.getElementById('player_list_con').children[licznik]
            .children[1].children[1].attributes[1].value === 'gpvp_attack'
          ? (GAME.socket.emit('ga', {
              a: 24,
              type: 1,
              char_id:
                document.getElementById('player_list_con').children[licznik]
                  .children[0].children[1].attributes[2].value,
              quick: 1,
            }),
            licznik++,
            window.setTimeout(kill_players, czekajpvp))
          : (GAME.socket.emit('ga', {
              a: 24,
              char_id:
                document.getElementById('player_list_con').children[licznik]
                  .children[1].children[1].attributes[2].value,
              quick: 1,
            }),
            licznik++,
            window.setTimeout(kill_players, czekajpvp))
        : (window.setTimeout(start, wait), (licznik = 0), kom_clear())
    }
  }
}
function wojny1() {
  if (
    !GAME.emp_enemies.includes(1) &&
    ![GAME.char_data.empire].includes(1) &&
    adimp
  ) {
    GAME.emitOrder({
      a: 50,
      type: 7,
      target: 1,
    })
    window.setTimeout(start, 200)
  } else {
    if (
      !GAME.emp_enemies.includes(2) &&
      ![GAME.char_data.empire].includes(2) &&
      adimp
    ) {
      GAME.emitOrder({
        a: 50,
        type: 7,
        target: 2,
      })
      window.setTimeout(start, 200)
    } else {
      if (
        !GAME.emp_enemies.includes(3) &&
        ![GAME.char_data.empire].includes(3) &&
        adimp
      ) {
        GAME.emitOrder({
          a: 50,
          type: 7,
          target: 3,
        })
        window.setTimeout(start, 200)
      } else {
        !GAME.emp_enemies.includes(4) &&
        ![GAME.char_data.empire].includes(4) &&
        adimp
          ? (GAME.emitOrder({
              a: 50,
              type: 7,
              target: 4,
            }),
            window.setTimeout(start, 200))
          : window.setTimeout(start, wait)
      }
    }
  }
}
function zejdz() {
  GAME.emitOrder({ a: 16 })
  window.setTimeout(teleport, 2000)
}
function go() {
  var _0x3c09d5 = GAME.char_data.x,
    _0x38f7ef = GAME.char_data.y
  if (_0x3c09d5 == 14 && _0x38f7ef == 14 && loc === 1) {
    zejdz()
    g = 2
    tele = true
  } else {
    if (_0x3c09d5 == 14 && _0x38f7ef == 14 && loc === 2) {
      zejdz()
      g = 3
      tele = true
    } else {
      if (_0x3c09d5 == 14 && _0x38f7ef == 14 && loc === 3) {
        zejdz()
        g = 4
        tele = true
      } else {
        if (_0x3c09d5 == 14 && _0x38f7ef == 14 && loc === 4) {
          zejdz()
          g = 1
          tele = true
        } else {
          if (loc === 7) {
            zejdz()
            tele = true
          } else {
            if (
              (_0x3c09d5 == 8 && _0x38f7ef == 4 && loc == 4) ||
              (_0x3c09d5 == 8 && _0x38f7ef == 6 && loc == 4) ||
              (_0x3c09d5 == 12 && _0x38f7ef == 7 && loc == 1) ||
              (_0x3c09d5 == 12 && _0x38f7ef == 9 && loc == 1) ||
              (_0x3c09d5 == 4 && _0x38f7ef == 8 && loc == 1) ||
              (_0x3c09d5 == 4 && _0x38f7ef == 10 && loc == 1) ||
              (_0x3c09d5 == 7 && _0x38f7ef == 13 && loc == 3) ||
              (_0x3c09d5 == 8 && _0x38f7ef == 5 && loc == 2) ||
              (_0x3c09d5 == 8 && _0x38f7ef == 7 && loc == 2) ||
              (_0x3c09d5 == 3 && _0x38f7ef == 9 && loc == 5)
            ) {
              go_down()
            } else {
              if (
                (_0x3c09d5 == 8 && _0x38f7ef == 5 && loc == 4) ||
                (_0x3c09d5 == 8 && _0x38f7ef == 7 && loc == 4)
              ) {
                go_left()
              } else {
                if (
                  (_0x3c09d5 == 5 && _0x38f7ef == 11 && loc == 1) ||
                  (_0x3c09d5 == 5 && _0x38f7ef == 10 && loc == 1) ||
                  (_0x3c09d5 == 5 && _0x38f7ef == 9 && loc == 1) ||
                  (_0x3c09d5 == 5 && _0x38f7ef == 8 && loc == 1)
                ) {
                  go_up()
                } else {
                  if (
                    (_0x3c09d5 == 8 && _0x38f7ef == 6 && loc == 2) ||
                    (_0x3c09d5 == 8 && _0x38f7ef == 8 && loc == 2)
                  ) {
                    go_right()
                  } else {
                    if (_0x3c09d5 == 2 && _0x38f7ef == 11 && loc == 3) {
                      cofanie()
                    } else {
                      if (
                        (_0x3c09d5 == 7 &&
                          _0x38f7ef == 7 &&
                          loc == 6 &&
                          dogory) ||
                        (_0x3c09d5 == 9 && _0x38f7ef == 7 && loc == 6 && dogory)
                      ) {
                        prawodol()
                      } else {
                        if (
                          (_0x3c09d5 == 8 &&
                            _0x38f7ef == 8 &&
                            loc == 6 &&
                            dogory) ||
                          (_0x3c09d5 == 10 &&
                            _0x38f7ef == 8 &&
                            loc == 6 &&
                            dogory)
                        ) {
                          prawogora()
                        } else {
                          if (
                            (_0x3c09d5 < 14 && _0x38f7ef % 2 == 0 && loc < 5) ||
                            (_0x3c09d5 < 15 &&
                              _0x38f7ef % 2 !== 0 &&
                              loc == 6) ||
                            (_0x3c09d5 < 11 && _0x38f7ef % 2 == 0 && loc == 5)
                          ) {
                            go_right()
                          } else {
                            if (
                              (_0x38f7ef % 2 !== 0 &&
                                _0x3c09d5 > 2 &&
                                loc < 6) ||
                              (_0x3c09d5 > 1 &&
                                _0x38f7ef % 2 == 0 &&
                                loc == 6) ||
                              (_0x3c09d5 == 2 && loc == 6)
                            ) {
                              go_left()
                            } else {
                              _0x3c09d5 == 14 ||
                              (_0x3c09d5 == 2 && loc < 5) ||
                              (_0x3c09d5 == 15 && loc == 6) ||
                              _0x3c09d5 == 1 ||
                              (_0x3c09d5 == 11 && loc == 5) ||
                              (_0x3c09d5 == 2 && loc == 5)
                                ? go_down()
                                : window.setTimeout(start, wait)
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function teleport() {
  tele
    ? (GAME.emitOrder({
        a: 50,
        type: 5,
        e: g,
      }),
      window.setTimeout(start, 2000),
      (tele = false))
    : window.setTimeout(start, wait)
}
function check_location() {
  if (GAME.char_data.loc == 351) {
    loc = 4
    bylem4 = true
    window.setTimeout(start, wait)
  } else {
    if (GAME.char_data.loc == 350) {
      loc = 3
      bylem3 = true
      window.setTimeout(start, wait)
    } else {
      if (GAME.char_data.loc == 349) {
        loc = 2
        bylem2 = true
        window.setTimeout(start, wait)
      } else {
        GAME.char_data.loc == 348
          ? ((loc = 1), (bylem1 = true), window.setTimeout(start, wait))
          : ((loc = 7), window.setTimeout(start, wait))
      }
    }
  }
}
function cofanie() {
  x = GAME.char_data.x
  x >= 7
    ? go_down()
    : (GAME.emitOrder({
        a: 4,
        dir: 7,
        vo: GAME.map_options.vo,
      }),
      window.setTimeout(cofanie, 150))
}
function prawodol() {
  GAME.emitOrder({
    a: 4,
    dir: 3,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait2)
}
function prawogora() {
  GAME.emitOrder({
    a: 4,
    dir: 5,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait2)
}
function go_up() {
  GAME.emitOrder({
    a: 4,
    dir: 2,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait2)
}
function go_down() {
  GAME.emitOrder({
    a: 4,
    dir: 1,
    vo: GAME.map_options.vo,
  })
  shouldbey = parseInt(y) + 1
  window.setTimeout(start, wait2)
}
function go_left() {
  GAME.emitOrder({
    a: 4,
    dir: 8,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait2)
}
function go_right() {
  GAME.emitOrder({
    a: 4,
    dir: 7,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait2)
}
function check() {
  var _0x135517 = parseInt($('#emp_war_cnt').text()),
    _0x504400 = GAME.emp_enemies
  if (w < _0x135517) {
    if (
      document.getElementById('ewar_list').children[w].lastChild.textContent ===
      '--:--:--'
    ) {
      if (_0x504400[w] == 1) {
        if (loc == 1) {
        }
        window.setTimeout(check, wait)
      } else {
        if (_0x504400[w] == 2) {
          if (loc == 2) {
          }
          window.setTimeout(check, wait)
        } else {
          if (_0x504400[w] == 3) {
            if (loc == 3) {
            }
            window.setTimeout(check, wait)
          } else {
            if (_0x504400[w] == 4) {
              if (loc == 4) {
              }
              window.setTimeout(check, wait)
            }
          }
        }
      }
    } else {
      w++
      window.setTimeout(check, wait)
    }
  } else {
    w = 0
    window.setTimeout(start, wait)
  }
}
start()

setInterval(() => { updateTime()}, 1000);