;(function () {
  let _0x169b25
  function _0x59e6f7() {
    if (!_0x169b25) {
      _0x169b25 = Object.keys(GAME).find(
        (_0x53344f) => GAME[_0x53344f] && GAME[_0x53344f]['1_1']
      )
    }
    return _0x169b25
  }
  Object.defineProperty(GAME, 'mapcell', {
    get: function () {
      return GAME[_0x59e6f7()]
    },
  })
})()
GAME.emit = function (_0x2e92cb, _0x201cca, _0x151c12) {
  if (!this.is_loading || _0x151c12) {
    this.load_start()
    this.socket.emit(_0x2e92cb, _0x201cca)
  } else {
    if (this.debug) {
      console.log('failed order', _0x2e92cb, _0x201cca)
    }
  }
}
GAME.emitOrder = function (_0x2461df, _0x1acccb = false) {
  this.emit('ga', _0x2461df, _0x1acccb)
}
GAME.initiate = function () {
  $('#player_login').text(this.login)
  $('#game_win').show()
  this.char_id == 0 && this.pid > 0 && this.emitOrder({ a: 1 })
  var _0x5708ec = this.servers.length,
    _0x831905 = ''
  for (var _0x472c16 = 0; _0x472c16 < _0x5708ec; _0x472c16++) {
    _0x831905 +=
      '<option value="' +
      this.servers[_0x472c16] +
      '">' +
      LNG['server' + this.servers[_0x472c16]] +
      '</option>'
  }
  $('#available_servers').html(_0x831905)
  $('#available_servers option[value=' + this.server + ']').prop(
    'selected',
    true
  )
}
GAME.questAction = function () {
  this.quest_action &&
    GAME.socket.emit('ga', {
      a: 22,
      type: 7,
      id: GAME.quest_action_qid,
      cnt: GAME.quest_action_max,
    })
}
$(document).bind('keydown', '1', function () {
  return (
    JQS.chm.is(':focus') == false && $('#gh_game_helper .gh_exp').click(), false
  )
})
var wait2 = 1,
  checkSSJ = true,
  a = 0
const VERSION = 'v0.1.3',
  SENZU_BLUE = 'SENZU_BLUE',
  SENZU_GREEN = 'SENZU_GREEN',
  SENZU_YELLOW = 'SENZU_YELLOW',
  SENZU_RED = 'SENZU_RED'
var collectBlueSenzuOn = false
const CONF_BLUE_AMOUNT = Math.floor((GAME.getCharMaxPr() / 100) * 0.1),
  CONF_GREEN_AMOUNT = Math.floor(GAME.char_data.pr_max / 40000),
  CONF_YELLOW_AMOUNT = 1
var CONF_MIN_PA = Math.floor((GAME.getCharMaxPr() / 100) * 0.4),
  CONF_SENZU = false
const $doubler_bar = document.getElementById('doubler_bar'),
  $ssj_bar = document.getElementById('ssj_bar')
let left = false,
  right = true,
  up = false,
  down = false
var CONF_SUB = false
let antybotPath = false,
  stop = true,
  moveTimeout,
  collectedCSK = 0
var zmiana = true,
  tabela99,
  gk = GAME.pid
const $css =
    '#gh_game_helper {min-width:100px; padding:5px; border:solid white 3px; background:black; color:white; position: fixed; top: 40px; right: 5px; z-index:5;}#gh_game_helper .gh_button {cursor:pointer;text-align:center}',
  $html =
    "<div class='gh_button gh_exp'>EXP <b class='gh_status red'>Off</b></div><div class='gh_button gh_xost'>xOst <b class='gh_status red'>Off</b></div><div class='gh_button gh_x20'>x20 <b class='gh_status red'>Off</b></div><div class='gh_button gh_limit'>Limit <b class='gh_status red'>Off</b></div>"
$('body')
  .append("<div id='gh_game_helper'>" + $html + '</div>')
  .append('<style>' + $css + '</style>')
$('#gh_game_helper .gh_exp').click(() => {
  stop
    ? ($('#gh_game_helper .gh_exp'),
      $('.gh_exp .gh_status').removeClass('red').addClass('green').html('On'),
      (stop = false),
      move())
    : ($('#gh_game_helper .gh_exp'),
      $('.gh_exp .gh_status').removeClass('green').addClass('red').html('Off'),
      (stop = true))
})
$('#gh_game_helper .gh_limit').click(() => {
  !collectBlueSenzuOn
    ? ($('#gh_game_helper .gh_limit'),
      $('.gh_limit .gh_status').removeClass('red').addClass('green').html('On'),
      (collectBlueSenzuOn = true))
    : ($('#gh_game_helper .gh_limit'),
      $('.gh_limit .gh_status')
        .removeClass('green')
        .addClass('red')
        .html('Off'),
      setTimeout(() => {
        move()
      }, 500),
      (collectBlueSenzuOn = false))
})
$('#gh_game_helper .gh_x20').click(() => {
  zmiana
    ? ($('#gh_game_helper .gh_x20'),
      $('.gh_x20 .gh_status').removeClass('red').addClass('green').html('On'),
      (CONF_SUB = 1),
      (zmiana = false),
      $('.gh_xost .gh_status').removeClass('green').addClass('red').html('Off'))
    : ($('#gh_game_helper .gh_x20'),
      $('.gh_x20 .gh_status').removeClass('green').addClass('red').html('Off'),
      (CONF_SUB = false),
      (zmiana = true))
})
$('#gh_game_helper .gh_xost').click(() => {
  zmiana
    ? ($('#gh_game_helper .gh_xost'),
      $('.gh_xost .gh_status').removeClass('red').addClass('green').html('On'),
      (CONF_SUB = 0),
      (zmiana = false),
      $('.gh_x20 .gh_status').removeClass('green').addClass('red').html('Off'))
    : ($('#gh_game_helper .gh_xost'),
      $('.gh_xost .gh_status').removeClass('green').addClass('red').html('Off'),
      (CONF_SUB = false),
      (zmiana = true))
})
function collectBlueSenzu() {
  return collectBlueSenzuOn
    ? GAME.char_data.senzu_limit < GAME.senzu_limit()
      ? true
      : false
    : true
}
function check(
  _0x34d44d,
  _0x3edfa7,
  _0x54fff3,
  _0x11a403,
  _0x15ae1a,
  _0x5ba8d6
) {
  _0x34d44d = parseInt(_0x34d44d)
  _0x3edfa7 = parseInt(_0x3edfa7)
  _0x15ae1a = parseInt(_0x15ae1a)
  _0x5ba8d6 = parseInt(_0x5ba8d6)
  const _0x5651f6 = _0x34d44d + '_' + _0x3edfa7,
    _0x3b49ab = _0x34d44d - 1 + '_' + (_0x3edfa7 - 1),
    _0x51819f = !_0x54fff3.includes(_0x3b49ab) && _0x11a403[_0x3b49ab],
    _0x4f0f3a = _0x34d44d + '_' + (_0x3edfa7 - 1),
    _0x557dd0 = !_0x54fff3.includes(_0x4f0f3a) && _0x11a403[_0x4f0f3a],
    _0x3953f5 = _0x34d44d + 1 + '_' + (_0x3edfa7 - 1),
    _0x1fe66d = !_0x54fff3.includes(_0x3953f5) && _0x11a403[_0x3953f5],
    _0x1460a9 = _0x34d44d - 1 + '_' + _0x3edfa7,
    _0x5cc357 = !_0x54fff3.includes(_0x1460a9) && _0x11a403[_0x1460a9],
    _0x25958f = _0x34d44d + 1 + '_' + _0x3edfa7,
    _0x499665 = !_0x54fff3.includes(_0x25958f) && _0x11a403[_0x25958f],
    _0x1fbc49 = _0x34d44d - 1 + '_' + (_0x3edfa7 + 1),
    _0xc10047 = !_0x54fff3.includes(_0x1fbc49) && _0x11a403[_0x1fbc49],
    _0x553b53 = _0x34d44d + '_' + (_0x3edfa7 + 1),
    _0x36370d = !_0x54fff3.includes(_0x553b53) && _0x11a403[_0x553b53],
    _0x4eea4c = _0x34d44d + 1 + '_' + (_0x3edfa7 + 1),
    _0x234dd2 = !_0x54fff3.includes(_0x4eea4c) && _0x11a403[_0x4eea4c]
  if (_0x34d44d === _0x15ae1a && _0x3edfa7 === _0x5ba8d6) {
    return [..._0x54fff3, _0x5651f6]
  }
  let _0x90e366 = false
  if (_0x51819f === 1) {
    _0x90e366 = check(
      _0x34d44d - 1,
      _0x3edfa7 - 1,
      [..._0x54fff3, _0x5651f6],
      _0x11a403,
      _0x15ae1a,
      _0x5ba8d6
    )
    if (_0x90e366) {
      return _0x90e366
    }
  }
  if (_0x557dd0 === 1) {
    _0x90e366 = check(
      _0x34d44d,
      _0x3edfa7 - 1,
      [..._0x54fff3, _0x5651f6],
      _0x11a403,
      _0x15ae1a,
      _0x5ba8d6
    )
    if (_0x90e366) {
      return _0x90e366
    }
  }
  if (_0x1fe66d === 1) {
    _0x90e366 = check(
      _0x34d44d + 1,
      _0x3edfa7 - 1,
      [..._0x54fff3, _0x5651f6],
      _0x11a403,
      _0x15ae1a,
      _0x5ba8d6
    )
    if (_0x90e366) {
      return _0x90e366
    }
  }
  if (_0x5cc357 === 1) {
    _0x90e366 = check(
      _0x34d44d - 1,
      _0x3edfa7,
      [..._0x54fff3, _0x5651f6],
      _0x11a403,
      _0x15ae1a,
      _0x5ba8d6
    )
    if (_0x90e366) {
      return _0x90e366
    }
  }
  if (_0x499665 === 1) {
    _0x90e366 = check(
      _0x34d44d + 1,
      _0x3edfa7,
      [..._0x54fff3, _0x5651f6],
      _0x11a403,
      _0x15ae1a,
      _0x5ba8d6
    )
    if (_0x90e366) {
      return _0x90e366
    }
  }
  if (_0xc10047 === 1) {
    _0x90e366 = check(
      _0x34d44d - 1,
      _0x3edfa7 + 1,
      [..._0x54fff3, _0x5651f6],
      _0x11a403,
      _0x15ae1a,
      _0x5ba8d6
    )
    if (_0x90e366) {
      return _0x90e366
    }
  }
  if (_0x36370d === 1) {
    _0x90e366 = check(
      _0x34d44d,
      _0x3edfa7 + 1,
      [..._0x54fff3, _0x5651f6],
      _0x11a403,
      _0x15ae1a,
      _0x5ba8d6
    )
    if (_0x90e366) {
      return _0x90e366
    }
  }
  if (_0x234dd2 === 1) {
    _0x90e366 = check(
      _0x34d44d + 1,
      _0x3edfa7 + 1,
      [..._0x54fff3, _0x5651f6],
      _0x11a403,
      _0x15ae1a,
      _0x5ba8d6
    )
    if (_0x90e366) {
      return _0x90e366
    }
  }
  return false
}
function getDir(_0xd5b7a7, _0x2caa92, _0x3956a1, _0x382c74) {
  _0xd5b7a7 = parseInt(_0xd5b7a7)
  _0x2caa92 = parseInt(_0x2caa92)
  _0x3956a1 = parseInt(_0x3956a1)
  _0x382c74 = parseInt(_0x382c74)
  if (_0xd5b7a7 > _0x3956a1 && _0x2caa92 > _0x382c74) {
    return 6
  }
  if (_0xd5b7a7 === _0x3956a1 && _0x2caa92 > _0x382c74) {
    return 2
  }
  if (_0xd5b7a7 < _0x3956a1 && _0x2caa92 > _0x382c74) {
    return 5
  }
  if (_0xd5b7a7 > _0x3956a1 && _0x2caa92 === _0x382c74) {
    return 8
  }
  if (_0xd5b7a7 < _0x3956a1 && _0x2caa92 === _0x382c74) {
    return 7
  }
  if (_0xd5b7a7 > _0x3956a1 && _0x2caa92 < _0x382c74) {
    return 4
  }
  if (_0xd5b7a7 === _0x3956a1 && _0x2caa92 < _0x382c74) {
    return 1
  }
  if (_0xd5b7a7 < _0x3956a1 && _0x2caa92 < _0x382c74) {
    return 3
  }
}
function getMoves(_0x5a43ac) {
  return _0x5a43ac
    .map((_0x20fb0c, _0x4bd771, _0xefa95f) => {
      if (!_0xefa95f[_0x4bd771 + 1]) {
        return
      }
      const [_0x4b4bd1, _0x5b8d21] = _0x20fb0c.split('_'),
        [_0x578fd1, _0x8b57c8] = _0xefa95f[_0x4bd771 + 1].split('_')
      return getDir(_0x4b4bd1, _0x5b8d21, _0x578fd1, _0x8b57c8)
    })
    .filter((_0x58a25a) => _0x58a25a)
}
function getFinalPosition(_0x57ad04) {
  return Object.keys(_0x57ad04)
    .filter((_0x393148) => _0x57ad04[_0x393148] === 2)[0]
    .split('_')
}
function canGoLeft() {
  const _0x5381c5 = GAME.char_data.x,
    _0x43ce1e = GAME.char_data.y
  return (
    GAME.mapcell[_0x5381c5 + '_' + (_0x43ce1e - 1)] &&
    GAME.mapcell[_0x5381c5 + '_' + (_0x43ce1e - 1)].m == 1
  )
}
function canGoRight() {
  const _0x3248f1 = GAME.char_data.x,
    _0x2868e3 = GAME.char_data.y
  return (
    GAME.mapcell[_0x3248f1 + '_' + (_0x2868e3 + 1)] &&
    GAME.mapcell[_0x3248f1 + '_' + (_0x2868e3 + 1)].m == 1
  )
}
function canGoUp() {
  const _0xe2bc48 = GAME.char_data.x,
    _0x445f08 = GAME.char_data.y
  return (
    GAME.mapcell[_0xe2bc48 - 1 + '_' + _0x445f08] &&
    GAME.mapcell[_0xe2bc48 - 1 + '_' + _0x445f08].m == 1
  )
}
function canGoDown() {
  const _0x3c52fa = GAME.char_data.x,
    _0x12063c = GAME.char_data.y
  return (
    GAME.mapcell[_0x3c52fa + 1 + '_' + _0x12063c] &&
    GAME.mapcell[_0x3c52fa + 1 + '_' + _0x12063c].m == 1
  )
}
function goLeft() {
  canGoLeft()
    ? GAME.emitOrder({
        a: 4,
        dir: 2,
        vo: GAME.map_options.vo,
      })
    : ((down = true), move())
}
function goRight() {
  canGoRight()
    ? GAME.emitOrder({
        a: 4,
        dir: 1,
        vo: GAME.map_options.vo,
      })
    : ((down = true), move())
}
function goUp() {
  canGoUp()
    ? GAME.emitOrder({
        a: 4,
        dir: 8,
        vo: GAME.map_options.vo,
      })
    : ((up = false), (right = canGoRight()), (left = canGoLeft()), move())
}
function goDown() {
  down = false
  right ? ((right = false), (left = true)) : ((right = true), (left = false))
  canGoDown()
    ? GAME.emitOrder({
        a: 4,
        dir: 7,
        vo: GAME.map_options.vo,
      })
    : ((!canGoLeft() || !canGoRight()) &&
        ((right = false), (left = false), (up = true)),
      move())
}
function isAntybotActive() {
  return !!GAME.premiumData
}
function fight(_0x590f24 = 0) {
  if (stop) {
    return
  }
  if (MF() > 0 && GAME.field_mf < 2) {
    GAME.emitOrder({
      a: 7,
      order: 2,
      quick: 1,
      fo: GAME.map_options.ma,
    })
  } else {
    if (
      GAME.field_mobs[_0x590f24].ranks[3] &&
      GAME.mf[GAME.field_mobs[_0x590f24].mob_id] !== 3
    ) {
      fightLegend(_0x590f24)
    } else {
      if (GAME.field_mobs[_0x590f24].ranks[4]) {
        fightEpic(_0x590f24)
      } else {
        if (GAME.field_mobs[_0x590f24].ranks[5]) {
          fightMystic(_0x590f24)
        } else {
          GAME.emitOrder({
            a: 13,
            mob_num: _0x590f24,
            fo: GAME.map_options.ma,
          })
        }
      }
    }
  }
}
function MF() {
  r = 0
  for (i = 0; i < GAME.map_options.ma.length - 1; i++) {
    GAME.map_options.ma[i] === 1 && (r += parseInt(GAME.field_mobs[0].ranks[i]))
  }
  return r
}
function fightLegend(_0x2b5cc9 = 0) {
  GAME.emitOrder({
    a: 7,
    mob_num: _0x2b5cc9,
    rank: 3,
    quick: 1,
  })
}
function fightEpic(_0x6a2dd3 = 0) {
  GAME.emitOrder({
    a: 7,
    mob_num: _0x6a2dd3,
    rank: 4,
    quick: 1,
  })
}
function fightMystic(_0x33aad5 = 0) {
  GAME.emitOrder({
    a: 7,
    mob_num: _0x33aad5,
    rank: 5,
    quick: 1,
  })
}
function areMobsOnField() {
  const _0x9a1b8b = GAME.field_mobs.findIndex((_0x2d4b8d) => {
    return _0x2d4b8d.ranks.some((_0x3e1177, _0x27c534) => {
      return GAME.map_options.ma[_0x27c534] && _0x3e1177 > 0
    })
  })
  if (_0x9a1b8b === -1) {
    return false
  } else {
    return { mob_num: _0x9a1b8b }
  }
}
function getSenzu(_0x51c9ea) {
  switch (_0x51c9ea) {
    case SENZU_BLUE:
      return GAME.quick_opts.senzus.find(
        (_0x4ab101) => _0x4ab101.item_id === 1244
      )
    case SENZU_GREEN:
      return GAME.quick_opts.senzus.find(
        (_0x148b83) => _0x148b83.item_id === 1242
      )
    case SENZU_YELLOW:
      return GAME.quick_opts.senzus.find(
        (_0x5e50e0) => _0x5e50e0.item_id === 1260
      )
    case SENZU_RED:
      return GAME.quick_opts.senzus.find(
        (_0x48c07b) => _0x48c07b.item_id === 1243
      )
  }
}
function useSenzu() {
  if (stop) {
    return
  }
  if (isAntybotActive()) {
    move()
    return
  }
  const _0xaf6e00 = getSenzu(SENZU_BLUE),
    _0x3bc34e = getSenzu(SENZU_GREEN),
    _0x38db07 = getSenzu(SENZU_YELLOW),
    _0x1ac7b0 = getSenzu(SENZU_RED)
  switch (CONF_SENZU) {
    case SENZU_BLUE:
      useBlue(Math.min(CONF_BLUE_AMOUNT, _0xaf6e00.stack))
      break
    case SENZU_GREEN:
      useGreen(Math.min(CONF_GREEN_AMOUNT, _0x3bc34e.stack))
      break
    case SENZU_YELLOW:
      useYellow(Math.min(CONF_YELLOW_AMOUNT, _0x38db07.stack))
      break
    case SENZU_RED:
      useRed()
      break
    default:
      if (_0xaf6e00 && _0xaf6e00.stack > 0) {
        useBlue(Math.min(CONF_BLUE_AMOUNT, _0xaf6e00.stack))
      } else {
        if (_0x1ac7b0 && _0x1ac7b0.stack > 0) {
          useRed()
        }
      }
  }
}
function useBlue(_0x427e65 = CONF_BLUE_AMOUNT) {
  const _0x9444de = getSenzu(SENZU_BLUE)
  if (!_0x9444de) {
    move()
    return
  }
  GAME.emitOrder({
    a: 12,
    type: 14,
    iid: _0x9444de.id,
    page: GAME.ekw_page,
    am: _0x427e65,
  })
}
function useGreen(_0x247fc1 = CONF_GREEN_AMOUNT) {
  const _0x9809f5 = getSenzu(SENZU_GREEN)
  if (!_0x9809f5) {
    move()
    return
  }
  GAME.emitOrder({
    a: 12,
    type: 14,
    iid: _0x9809f5.id,
    page: GAME.ekw_page,
    am: _0x247fc1,
  })
}
function useYellow(_0x2c3210 = CONF_YELLOW_AMOUNT) {
  const _0x27cc1c = getSenzu(SENZU_YELLOW)
  if (!_0x27cc1c) {
    move()
    return
  }
  GAME.emitOrder({
    a: 12,
    type: 14,
    iid: _0x27cc1c.id,
    page: GAME.ekw_page,
    am: _0x2c3210,
  })
}
function useRed() {
  const _0x1f7806 = getSenzu(SENZU_RED)
  if (!_0x1f7806) {
    move()
    return
  }
  GAME.emitOrder({
    a: 12,
    type: 14,
    iid: _0x1f7806.id,
    page: GAME.ekw_page,
    am: 1,
  })
}
function useSub() {
  GAME.emitOrder({
    a: 12,
    type: 19,
    iid: GAME.quick_opts.sub[CONF_SUB].id,
  })
}
function useSub1() {
  GAME.emitOrder({
    a: 12,
    type: 15,
  })
}
function checkTR() {
  if (checkSSJ && GAME.quick_opts.ssj) {
    if ($('#ssj_bar')[0].attributes[2].value == 'display: none;') {
      return (
        GAME.emitOrder({
          a: 18,
          type: 5,
          tech_id: GAME.quick_opts.ssj[0],
        }),
        true
      )
    } else {
      if ($('#ssj_status').text() == '--:--:--') {
        GAME.emitOrder({
          a: 18,
          type: 6,
        })
        window.setTimeout(checkTR, wait2)
      } else {
        return false
      }
    }
  } else {
    return false
  }
}
function collectCSK() {
  $('.black_db').length > 0 &&
    (GAME.emitOrder({
      a: 21,
      bid: document.getElementsByClassName('black_db')[0].attributes[2].value,
    }),
    document.getElementsByClassName('black_db')[0].remove())
}
function move() {
  if (stop) {
    return
  }
  if (!collectBlueSenzu()) {
    return
  }
  if (moveTimeout) {
    clearTimeout(moveTimeout)
  }
  moveTimeout = setTimeout(move, 500)
  if (GAME.char_data.pr <= CONF_MIN_PA) {
    useSenzu()
    return
  }
  if (
    CONF_SUB !== false &&
    ($doubler_bar.style.display === 'none' ||
      GAME.doubler_end * 1000 < new Date().getTime())
  ) {
    setTimeout(function () {
      useSub()
    }, 500)
    return
  }
  if (
    ($ssj_bar.style.display === 'none' && GAME.quick_opts.ssj) ||
    (GAME.ssj_end * 1000 < new Date().getTime() && GAME.quick_opts.ssj)
  ) {
    setTimeout(function () {
      checkTR()
    }, 500)
    return
  }
  subkaa = $('#doubler_status').text()
  if (CONF_SUB !== false && subkaa <= '00:00:02') {
    setTimeout(function () {
      useSub1()
    }, 500)
    return
  }
  if (isAntybotActive()) {
    console.log('antybot active')
    const _0x3ed9cb = GAME.char_data.x,
      _0x4a54b3 = GAME.char_data.y,
      _0x4b4690 = {
        ...GAME.premiumData,
        [_0x3ed9cb + '_' + _0x4a54b3]: 1,
      },
      [_0x31808b, _0x3cf12d] = getFinalPosition(_0x4b4690)
    if (!antybotPath) {
      console.time('path')
      const _0x7e7ab0 = {
          ..._0x4b4690,
          [_0x31808b + '_' + _0x3cf12d]: 1,
        },
        _0x2b838b = check(
          _0x3ed9cb,
          _0x4a54b3,
          [],
          _0x7e7ab0,
          _0x31808b,
          _0x3cf12d
        ),
        _0x5e4d25 = _0x2b838b && getMoves(_0x2b838b)
      antybotPath = [..._0x5e4d25]
      console.timeEnd('path')
      console.log('PATH', antybotPath)
    }
    const _0x2ef5df = antybotPath.shift()
    _0x2ef5df
      ? GAME.emitOrder({
          a: 4,
          dir: _0x2ef5df,
          vo: GAME.map_options.vo,
        })
      : (antybotPath = false)
    return
  }
  if (down) {
    goDown()
  } else {
    if (up) {
      goUp()
    } else {
      if (left) {
        goLeft()
      } else {
        if (right) {
          goRight()
        }
      }
    }
  }
}
function handleResponse(_0x24cc8c) {
  if (
    _0x24cc8c.a === 4 &&
    _0x24cc8c.char_id === GAME.char_id &&
    tabela99.includes(gk)
  ) {
    const _0x310555 = areMobsOnField()
    if (_0x310555) {
      fight(_0x310555.mob_num)
      return
    }
    fight()
  } else {
    if (_0x24cc8c.a === 7 && tabela99.includes(gk)) {
      setTimeout(() => {
        const _0x3b8733 = areMobsOnField()
        if (_0x3b8733) {
          fight(_0x3b8733.mob_num)
          return
        }
        move()
      }, wait2)
    } else {
      if (
        _0x24cc8c.a === 12 &&
        _0x24cc8c.type === 14 &&
        tabela99.includes(gk)
      ) {
        move()
      } else {
        if (_0x24cc8c.a === 18 && _0x24cc8c.ssj && tabela99.includes(gk)) {
          setTimeout(() => {
            move()
          }, 100)
        } else {
          if (
            _0x24cc8c.a === 12 &&
            _0x24cc8c.type === 19 &&
            tabela99.includes(gk)
          ) {
            setTimeout(() => {
              move()
            }, 100)
          } else {
            if (_0x24cc8c.a === undefined) {
              setTimeout(() => {
                console.log('try to move')
                antybotPath = false
                move()
              }, 50)
            }
          }
        }
      }
    }
  }
}
GAME.socket.on('gr', handleResponse)

customLog("Skrypt (Zbijanie.js) załadowano Poprawnie!", "orange")