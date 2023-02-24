;(function () {
  let _0x648bde
  function _0x19b474() {
    if (!_0x648bde) {
      _0x648bde = Object.keys(GAME).find(
        (_0x5e5b90) => GAME[_0x5e5b90] && GAME[_0x5e5b90]['1_1']
      )
    }
    return _0x648bde
  }
  Object.defineProperty(GAME, 'mapcell', {
    get: function () {
      return GAME[_0x19b474()]
    },
  })
})()
GAME.emitOrder = (_0x17a98d) => GAME.socket.emit('ga', _0x17a98d)
var BOT = {
  Stop: true,
  Matrix: [],
  Map: 0,
  Path: [],
  Born: 2,
  Killed: false,
}
$('body').append(
  '<div id="BOT_control" style="display:none;min-width:100px; padding:5px; border:solid gray 1px; background:rgba(22, 22, 93, 0.81); color:gold; position: fixed; top: 40px; right: 5px; z-index:5; text-align:center;"><div class="bt_button" style="cursor:pointer;text-align:center; border-bottom:solid gray 1px;">START</div><div id="select_born" class="pointer red" born="2">G</div><div id="select_born" class="pointer" born="3">U</div><div id="select_born" class="pointer" born="4">S</div><div id="select_born" class="pointer" born="5">H</div></div>'
)
$('#BOT_control .bt_button').click(() => {
  BOT.Stop
    ? ($('#BOT_control .bt_button').html('STOP'),
      (BOT.Stop = false),
      BOT.Start())
    : ($('#BOT_control .bt_button').html('START'), (BOT.Stop = true))
})
$('body').on('click', '#select_born', function () {
  BOT.Stop
    ? ($('[id=select_born]').removeClass('red'),
      $(this).addClass('red'),
      (BOT.Born = parseInt($(this).attr('born'))))
    : GAME.komunikat('<h1>Musisz najpierw zatrzymać skrypt!<h1>')
})
BOT.Start = function () {
  BOT.LoadPVM()
}
BOT.CreateMatrix = function () {
  BOT.Matrix = []
  BOT.Map = GAME.mapcell
  for (var _0xdc562d = 0; _0xdc562d < parseInt(GAME.map.max_y); _0xdc562d++) {
    BOT.Matrix[_0xdc562d] = []
    for (var _0xcdb444 = 0; _0xcdb444 < parseInt(GAME.map.max_x); _0xcdb444++) {
      BOT.Map[parseInt(_0xcdb444 + 1) + '_' + parseInt(_0xdc562d + 1)].m == 1
        ? (BOT.Matrix[_0xdc562d][_0xcdb444] = 1)
        : (BOT.Matrix[_0xdc562d][_0xcdb444] = 0)
    }
  }
}
BOT.LoadPVM = function () {
  GAME.emitOrder({
    a: 32,
    type: 0,
  })
}
BOT.KillWanted = function () {
  document.getElementById('special_list_con').childElementCount &&
    (
    (BOT.Killed = true),
    GAME.emitOrder({
      a: 32,
      type: 1,
      wanted_id: BOT.Born,
      quick: 1,
    }))
}
BOT.Collect = function () {
  GAME.emitOrder({
    a: 32,
    type: 2,
    wanted: BOT.Born,
  })
}
BOT.Teleport = function () {
  var _0xed5416 = parseInt(
    $('#wanted_list .green.option').eq(BOT.Born).attr('data-loc')
  )
  GAME.char_data != _0xed5416
    ? (GAME.emitOrder({
        a: 12,
        type: 18,
        loc: _0xed5416,
      }),
      setTimeout(3000))
    : BOT.Go()
}
BOT.Go = function () {
  BOT.CreateMatrix()
  BOT.Finder.setGrid(BOT.Matrix)
  PathID = BOT.Finder.findPath(
    GAME.char_data.x - 1,
    GAME.char_data.y - 1,
    parseInt(GAME.map_wanteds.x) - 1,
    parseInt(GAME.map_wanteds.y) - 1,
    function (_0x77a521) {
      _0x77a521 === null
        ? console.log('Path was not found')
        : (_0x77a521[0].x == GAME.char_data.x - 1 &&
            _0x77a521[0].y == GAME.char_data.y - 1 &&
            _0x77a521.shift(),
          (BOT.Path = _0x77a521),
          BOT.Move())
    }
  )
  BOT.Finder.calculate()
}
BOT.Move = function () {
  if (!BOT.stop) {
    if (
      BOT.Path[0].x > GAME.char_data.x - 1 &&
      BOT.Path[0].y == GAME.char_data.y - 1
    ) {
      GAME.emitOrder({
        a: 4,
        dir: 7,
        vo: GAME.map_options.vo,
      })
    } else {
      if (
        BOT.Path[0].x < GAME.char_data.x - 1 &&
        BOT.Path[0].y == GAME.char_data.y - 1
      ) {
        GAME.emitOrder({
          a: 4,
          dir: 8,
          vo: GAME.map_options.vo,
        })
      } else {
        if (
          BOT.Path[0].x == GAME.char_data.x - 1 &&
          BOT.Path[0].y > GAME.char_data.y - 1
        ) {
          GAME.emitOrder({
            a: 4,
            dir: 1,
            vo: GAME.map_options.vo,
          })
        } else {
          if (
            BOT.Path[0].x == GAME.char_data.x - 1 &&
            BOT.Path[0].y < GAME.char_data.y - 1
          ) {
            GAME.emitOrder({
              a: 4,
              dir: 2,
              vo: GAME.map_options.vo,
            })
          } else {
            if (
              BOT.Path[0].x > GAME.char_data.x - 1 &&
              BOT.Path[0].y > GAME.char_data.y - 1
            ) {
              GAME.emitOrder({
                a: 4,
                dir: 3,
                vo: GAME.map_options.vo,
              })
            } else {
              if (
                BOT.Path[0].x < GAME.char_data.x - 1 &&
                BOT.Path[0].y < GAME.char_data.y - 1
              ) {
                GAME.emitOrder({
                  a: 4,
                  dir: 6,
                  vo: GAME.map_options.vo,
                })
              } else {
                if (
                  BOT.Path[0].x > GAME.char_data.x - 1 &&
                  BOT.Path[0].y < GAME.char_data.y - 1
                ) {
                  GAME.emitOrder({
                    a: 4,
                    dir: 5,
                    vo: GAME.map_options.vo,
                  })
                } else {
                  BOT.Path[0].x < GAME.char_data.x - 1 &&
                  BOT.Path[0].y > GAME.char_data.y - 1
                    ? GAME.emitOrder({
                        a: 4,
                        dir: 4,
                        vo: GAME.map_options.vo,
                      })
                    : BOT.Go()
                }
              }
            }
          }
        }
      }
    }
  }
}
BOT.Next = function () {
  BOT.Path.length - 1 > 0
    ? (BOT.Path.shift(), BOT.Move())
    : setTimeout(function () {
        BOT.KillWanted()
      }, 500)
}
BOT.HandleSockets = function (_0x45b9ee) {
  if (!BOT.Stop && _0x45b9ee.a === 4 && _0x45b9ee.char_id === GAME.char_id) {
    BOT.Next()
  } else {
    if (!BOT.Stop && _0x45b9ee.a === 32 && _0x45b9ee.e == 0) {
      $('button[data-wanted="' + BOT.Born + '"]').html()
        ? GAME.emitOrder({
            a: 32,
            type: 2,
            wanted: BOT.Born,
          })
        : BOT.Teleport()
    } else {
      if (
        !BOT.Stop &&
        BOT.Killed &&
        _0x45b9ee.a === 602 &&
        !_0x45b9ee.res.wanted
      ) {
        BOT.Killed = false
        BOT.Collect()
      } else {
        if (!BOT.Stop && _0x45b9ee.a === 32 && _0x45b9ee.e == 2) {
          BOT.Teleport()
        } else {
          if (!BOT.Stop && _0x45b9ee.a === 12) {
            GAME.char_data.x == GAME.map_wanteds.x &&
            GAME.char_data.y == GAME.map_wanteds.y
              ? setTimeout(function () {
                  BOT.KillWanted()
                }, 500)
              : setTimeout(function () {
                  BOT.Go()
                }, 1000)
          } else {
            !BOT.stop &&
              _0x45b9ee.a === undefined &&
              setTimeout(() => {
                BOT.Go()
              }, 500)
          }
        }
      }
    }
  }
}
GAME.socket.on('gr', function (_0x27a782) {
  BOT.HandleSockets(_0x27a782)
})
BOT.LoadES = (function () {
  esjs = document.createElement('script')
  esjs.src =
    'https://cdn.jsdelivr.net/npm/easystarjs@0.4.3/bin/easystar-0.4.3.min.js'
  esjs.onload = () => {
    BOT.Finder = new EasyStar.js()
    BOT.Finder.enableDiagonals()
    BOT.Finder.setAcceptableTiles([1])
    $('#BOT_control').show()
  }
  document.head.append(esjs)
})()
customLog(
  'Skrypt Listy.js został poprawnie załadowany!',
)
$('script').last().remove()
