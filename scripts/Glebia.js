GAME.emit = function (_0x132b9e, _0x2163f3, _0x4ae6e7) {
  if (!this.is_loading || _0x4ae6e7) {
    this.load_start()
    this.socket.emit(_0x132b9e, _0x2163f3)
  } else {
    if (this.debug) {
      console.log('failed order', _0x132b9e, _0x2163f3)
    }
  }
}
GAME.emitOrder = function (_0x39743c, _0x1854ad = false) {
  this.emit('ga', _0x39743c, _0x1854ad)
}
GAME.initiate = function () {
  $('#player_login').text(this.login)
  $('#game_win').show()
  this.char_id == 0 && this.pid > 0 && this.emitOrder({ a: 1 })
  var _0x38e2fb = this.servers.length,
    _0x271d0c = ''
  for (var _0x461362 = 0; _0x461362 < _0x38e2fb; _0x461362++) {
    _0x271d0c +=
      '<option value="' +
      this.servers[_0x461362] +
      '">' +
      LNG['server' + this.servers[_0x461362]] +
      '</option>'
  }
  $('#available_servers').html(_0x271d0c)
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
  wait = 11,
  wait2 = 1,
  czekajpvp = 150,
  licznik = 0,
  zmyl = 0,
  antybot = false,
  stop = true,
  dogory = false,
  loc,
  move1 = false,
  move2 = false,
  move3 = false,
  tabelka = [1, 2, 4],
  adimp = false,
  i = 0,
  d = 0,
  licznik2 = 0,
  wojny = false,
  wojnabogowie = false,
  wojnademony = false,
  wojnasaiyan = false,
  wojnarr = false,
  jestembogiem = false,
  jestemkrolem = false,
  jestemimperatorem = false,
  jestemdemonem = true,
  w = 0,
  ilewojen,
  rr = false,
  saiyan = false,
  god = false,
  demon = false,
  WK = false,
  gk = GAME.pid
const VERSION = 'v0.1.3',
  $css =
    '#gh_game_helper {min-width:100px; padding:5px; border:solid white 3px; background:black; color:white; position: fixed; top: 40px; right: 5px; z-index:5;}#gh_game_helper .gh_button {cursor:pointer;text-align:center}',
  $html =
    "<div class='gh_button gh_pvp'>PVP <b class='gh_status red'>Off</b></div><div class='gh_button gh_wi'>WI <b class='gh_status red'>Off</b></div>"
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
var tabela99
function start() {
  stop === false &&
    tabela99.includes(gk) &&
    ($('#player_list_con').find('[data-option=load_more_players]').click(),
    GAME.clan_wars.length < 20 &&
      GAME.char_data.klan_id == 12 &&
      GAME.emitOrder({
        a: 39,
        type: 24,
        shorts:
          'POWER;QslA;GODS;DESIRE;CONTRA;MMM;Legend;ODR;9uP;Mocarz;CURSED;DIVINE;Senju;9OYAL;aRED;LOST;Nakama;VD;WT;GoS;PSK;10evils;Heroes;TP;5S;DEATH;Boobs;Angels;KNIGHT;9DL;WND;10OYAL;Heroes;WeAre;8BO;CORE;Piwo;NaKacu;HsO;PWAI;PoD;10ES;BFKILL;PFY',
      }),
    GAME.clan_wars.length < 10 &&
      GAME.server == 9 &&
      GAME.emitOrder({
        a: 39,
        type: 24,
        shorts:
          'Royal;Devils;KG;LEGION;DuoLin;NGNL;biedra;PGR;CN;NDL;SuP;Senju;KChK;Reb;BFKILL;AF;Ever;SC;ARE;PF;MR',
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
    !GAME.is_loading && !stop && tabela99.includes(gk)
      ? !GAME.is_loading && tabela99.includes(gk)
        ? !checkAntyBot() ||
          (!GAME.is_loading && !stop && tabela99.includes(gk))
          ? _0x4f2573()
          : window.setTimeout(idziewgore, 6000)
        : window.setTimeout(start, wait)
      : window.setTimeout(start, wait))
  function _0x4f2573() {
    switch (caseNumber) {
      case 0:
        caseNumber++, check_position_x()
        break
      case 1:
        caseNumber++, check_position_y()
        break
      case 2:
        caseNumber++, check_players()
        break
      case 3:
        caseNumber++, kill_players()
        break
      case 4:
        caseNumber++, check_players2()
        break
      case 5:
        caseNumber++, check_location()
        break
      case 6:
        caseNumber++, go()
        break
      case 7:
        caseNumber++, wojny1()
        break
      case 8:
        caseNumber++, check_war()
        break
      case 9:
        ;(caseNumber = 0), w_w2()
        break
      default:
    }
  }
}
function go() {
  var _0xa8089d = GAME.char_data.x,
    _0x1f9c74 = GAME.char_data.y
  if (_0xa8089d == 11 && _0x1f9c74 == 11 && dogory && loc == 1) {
    cofanie2()
  } else {
    if (_0xa8089d == 15 && _0x1f9c74 == 15 && move3 && loc == 2) {
      cofanie()
    } else {
      if (_0xa8089d == 2 && _0x1f9c74 == 11 && loc == 1 && move1) {
        przejdz()
        window.setTimeout(go_right, 1000)
      } else {
        if (_0xa8089d == 1 && _0x1f9c74 == 1 && loc == 2 && move3) {
          przejdz()
          window.setTimeout(go_right, 1000)
        } else {
          if (
            (_0xa8089d == 7 && _0x1f9c74 == 7 && loc == 2 && move2) ||
            (_0xa8089d == 9 && _0x1f9c74 == 7 && loc == 2 && move2)
          ) {
            prawodol()
          } else {
            if (
              (_0xa8089d == 8 && _0x1f9c74 == 8 && loc == 2 && move2) ||
              (_0xa8089d == 10 && _0x1f9c74 == 8 && loc == 2 && move2)
            ) {
              prawogora()
            } else {
              if (_0xa8089d == 10 && _0x1f9c74 == 11 && loc == 1) {
                dogory = true
                go_right()
              } else {
                if (_0xa8089d == 10 && _0x1f9c74 == 2 && loc == 1) {
                  dogory = false
                  go_left()
                } else {
                  if (_0xa8089d == 5 && _0x1f9c74 == 10 && loc == 1) {
                    move1 = true
                    go_left()
                  } else {
                    if (_0xa8089d == 10 && _0x1f9c74 == 10 && loc == 1) {
                      move1 = true
                      go_left()
                    } else {
                      if (_0xa8089d == 3 && _0x1f9c74 == 1 && loc == 2) {
                        move1 = false
                        go_right()
                      } else {
                        if (_0xa8089d == 3 && _0x1f9c74 == 10 && loc == 1) {
                          lewodol()
                        } else {
                          if (_0xa8089d == 2 && _0x1f9c74 == 8 && loc == 1) {
                            prawodol()
                          } else {
                            if (
                              (_0xa8089d == 11 &&
                                _0x1f9c74 == 11 &&
                                loc == 1) ||
                              (_0xa8089d == 15 && _0x1f9c74 == 15 && loc == 2)
                            ) {
                              go_up()
                            } else {
                              if (
                                _0xa8089d == 5 &&
                                _0x1f9c74 == 7 &&
                                loc == 2
                              ) {
                                move2 = true
                                go_right()
                              } else {
                                if (
                                  _0xa8089d == 13 &&
                                  _0x1f9c74 == 7 &&
                                  loc == 2
                                ) {
                                  move2 = false
                                  go_right()
                                } else {
                                  if (
                                    _0xa8089d == 12 &&
                                    _0x1f9c74 == 15 &&
                                    loc == 2
                                  ) {
                                    move3 = true
                                    go_right()
                                  } else {
                                    if (
                                      _0xa8089d == 5 &&
                                      _0x1f9c74 == 11 &&
                                      loc == 1
                                    ) {
                                      move3 = false
                                      go_right()
                                    } else {
                                      if (
                                        _0xa8089d == 10 &&
                                        _0x1f9c74 == 15 &&
                                        loc == 2
                                      ) {
                                        move3 = true
                                        go_right()
                                      } else {
                                        if (
                                          _0xa8089d == 7 &&
                                          _0x1f9c74 == 11 &&
                                          loc == 1
                                        ) {
                                          move3 = false
                                          go_right()
                                        } else {
                                          if (
                                            _0xa8089d == 7 &&
                                            _0x1f9c74 == 7 &&
                                            loc == 2
                                          ) {
                                            go_down()
                                          } else {
                                            if (
                                              (_0xa8089d < 11 &&
                                                _0x1f9c74 % 2 !== 0 &&
                                                loc == 1) ||
                                              (_0xa8089d < 15 &&
                                                _0x1f9c74 % 2 !== 0 &&
                                                loc == 2)
                                            ) {
                                              go_right()
                                            } else {
                                              if (
                                                (_0xa8089d > 2 &&
                                                  _0x1f9c74 % 2 == 0 &&
                                                  loc == 1) ||
                                                (_0xa8089d > 1 &&
                                                  _0x1f9c74 % 2 == 0 &&
                                                  loc == 2)
                                              ) {
                                                go_left()
                                              } else {
                                                ;((_0xa8089d == 11 &&
                                                  loc == 1) ||
                                                  (_0xa8089d == 2 &&
                                                    loc == 1) ||
                                                  (_0xa8089d == 3 &&
                                                    _0x1f9c74 == 9 &&
                                                    loc == 1) ||
                                                  (_0xa8089d == 1 &&
                                                    loc == 2) ||
                                                  (_0xa8089d == 15 &&
                                                    loc == 2) ||
                                                  (_0xa8089d == 7 &&
                                                    _0x1f9c74 == 7 &&
                                                    loc == 2)) &&
                                                  go_down()
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
                }
              }
            }
          }
        }
      }
    }
  }
}
function cofanie() {
  y = GAME.char_data.y
  y <= 1
    ? window.setTimeout(start, wait)
    : (GAME.emitOrder({
        a: 4,
        dir: 6,
        vo: GAME.map_options.vo,
      }),
      window.setTimeout(cofanie, 100))
}
function cofanie2() {
  y = GAME.char_data.y
  y <= 2
    ? window.setTimeout(start, wait)
    : (GAME.emitOrder({
        a: 4,
        dir: 2,
        vo: GAME.map_options.vo,
      }),
      (move1 = true),
      window.setTimeout(cofanie2, 100))
}
function prawodol() {
  GAME.emitOrder({
    a: 4,
    dir: 3,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait)
}
function prawogora() {
  GAME.emitOrder({
    a: 4,
    dir: 5,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait)
}
function lewodol() {
  GAME.emitOrder({
    a: 4,
    dir: 4,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait)
}
function go_up() {
  GAME.emitOrder({
    a: 4,
    dir: 2,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait)
}
function go_down() {
  GAME.emitOrder({
    a: 4,
    dir: 1,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait)
}
function go_left() {
  GAME.emitOrder({
    a: 4,
    dir: 8,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait)
}
function go_right() {
  GAME.emitOrder({
    a: 4,
    dir: 7,
    vo: GAME.map_options.vo,
  })
  window.setTimeout(start, wait)
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
          (parseInt(tabb[2]) <= 20 && parseInt(tabb[1]) <= 0)
            ? window.setTimeout(check_players, 3300)
            : window.setTimeout(start, czekajpvp / 2))
        : window.setTimeout(start, czekajpvp / 2))
    : window.setTimeout(start, wait)
}
function check_players2() {
  var _0x2eccaf = $('#player_list_con').find(
      '.player button[data-option=pvp_attack][data-quick=1]:not(.initial_hide_forced)'
    ),
    _0x38ff9b = $('#player_list_con').find(
      '.player button[data-option=gpvp_attack][data-quick=1]:not(.initial_hide_forced)'
    )
  kill_players1()
  window.setTimeout(
    start,
    (czekajpvp * (_0x2eccaf.length + _0x38ff9b.length) * 3) / 2 + wait / 2
  )
  licznik = 0
}
function kill_players() {
  var _0x444cff = $('#player_list_con').find(
      '.player button[data-option=pvp_attack][data-quick=1]:not(.initial_hide_forced)'
    ),
    _0x95cdc4 = $('#player_list_con').find(
      '.player button[data-option=gpvp_attack][data-quick=1]:not(.initial_hide_forced)'
    )
  if (
    $('#player_list_con').find('[data-option=load_more_players]').length == 1
  ) {
    $('#player_list_con').find('[data-option=load_more_players]').click()
    window.setTimeout(kill_players, 150)
  } else {
    if (_0x444cff.length + _0x95cdc4.length == 0) {
      kill_players1()
      window.setTimeout(
        start,
        czekajpvp * (_0x444cff.length + _0x95cdc4.length) * 2 + wait / 2
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
function przejdz() {
  GAME.emitOrder({
    a: 6,
    tpid: 0,
  })
  window.setTimeout(stop, 1000)
  move3 = false
  move1 = false
}
function check_location() {
  if ($('#map_name').text() === 'Głębia') {
    loc = 1
    window.setTimeout(start, wait)
  } else {
    $('#map_name').text() === 'Głębia Rajskiej Sali'
      ? ((loc = 2), window.setTimeout(start, wait))
      : ((loc = 7), window.setTimeout(start, wait))
  }
}
function w_w() {
  window.setTimeout(start, wait)
}
function check_war() {
  window.setTimeout(start, wait)
}
function w_w2() {
  window.setTimeout(start, wait)
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
    window.setTimeout(start, wait)
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
      window.setTimeout(start, wait)
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
        window.setTimeout(start, wait)
      } else {
        !GAME.emp_enemies.includes(4) &&
        ![GAME.char_data.empire].includes(4) &&
        adimp
          ? (GAME.emitOrder({
              a: 50,
              type: 7,
              target: 4,
            }),
            window.setTimeout(start, wait))
          : window.setTimeout(start, wait)
      }
    }
  }
}
start()

customLog("Skrypt (Głębia.js) załadowano Poprawnie!", "orange")