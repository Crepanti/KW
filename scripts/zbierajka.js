var BOT = {
  stop: true,
  last_loc: 0,
  mapcell: false,
  matrix: [],
  steps: [],
  steps_clone: [],
  path: [],
  processing: false,
  mines: [],
  last_mine: 0,
  speed: 100,
  mined_id: [],
  refresh_mines: true,
}
$('body').append(
  '<div id="BOT_control" style="display:none; min-width:100px; padding:5px; border:solid white 3px; background:black; color:white; position: fixed; top: 40px; right: 5px; z-index:5;"><div class="bt_button" style="cursor:pointer;text-align:center;">START</div><div class="bt_refresh" style="cursor:pointer;text-align:center;">ODŚWIEŻ</div><div class="bt_cool" style="text-align:center;"></div></div>'
)
$('body').append(
  '<div id="BOT_mines" style="display:none; min-width:100px; padding:5px; border:solid white 3px; background:black; color:white; position: fixed; top: 120px; right: 5px; z-index:5;"></div>'
)
$('#BOT_control .bt_button').click(() => {
  BOT.stop
    ? ($('#BOT_control .bt_button').html('STOP'),
      $('#BOT_control .bt_button_res').hide(),
      (BOT.stop = false),
      BOT.Start())
    : ($('#BOT_control .bt_button').html('START'),
      $('#BOT_control .bt_button_res').show(),
      $('.bt_cool').html(''),
      (BOT.stop = true),
      clearTimeout(BOT.cdt))
})
$('#BOT_control .bt_refresh').click(() => {
  BOT.stop
    ? (BOT.listMines(), BOT.getMinesPos())
    : GAME.komunikat('Zatrzymaj najpierw skrypt!')
})
$('body').on('click', '#BOT_mines .select_mine', function () {
  BOT.stop
    ? ((BOT.refresh_mines = true),
      (BOT.mined_id = []),
      $('#BOT_mines .select_mine:checked').each(function () {
        id = parseInt($(this).val())
        BOT.mined_id.push(id)
      }))
    : ($(this).click(), GAME.komunikat('Zatrzymaj najpierw skrypt!'))
})
BOT.emitOrder = function (_0x2d0f12) {
  !this.processing &&
    ((this.processing = true), GAME.socket.emit('ga', _0x2d0f12))
}
GAME.questAction = function () {
  this.quest_action &&
    BOT.emitOrder({
      a: 22,
      type: 7,
      id: GAME.quest_action_qid,
      cnt: GAME.quest_action_max,
    })
}
BOT.Start = function () {
  this.last_loc != GAME.char_data.loc &&
    (Object.defineProperty(GAME, 'mapcell', {
      get: function () {
        return GAME[BOT.FindMapcell()]
      },
      enumerable: true,
      configurable: true,
    }),
    this.CreateMatrix(),
    (this.last_loc = GAME.char_data.loc))
  this.refresh_mines && (this.getMinesPos(), (this.refresh_mines = false))
  this.steps_clone = this.steps.slice()
  this.steps_clone[0][0] == GAME.char_data.x &&
    this.steps_clone[0][1] == GAME.char_data.y &&
    this.steps_clone.shift()
  this.finder.setGrid(this.matrix)
  setTimeout(function () {
    BOT.Action()
  }, 100)
}
BOT.Action = function () {
  this.stop = false
  !this.processing
    ? this.Go()
    : setTimeout(function () {
        BOT.Action()
      }, 1000)
}
BOT.GetCooldown = function () {
  return (
    GAME.map_mines.coords[
      parseInt(GAME.char_data.x) + '_' + parseInt(GAME.char_data.y)
    ][0][2] > 0
      ? ((cd =
          GAME.map_mines.coords[
            parseInt(GAME.char_data.x) + '_' + parseInt(GAME.char_data.y)
          ][0][2] - GAME.getTime()),
        (cd += 5),
        (r = cd * 1000),
        $('.bt_cool').html(GAME.showTimer(r / 1000)))
      : (r = 1000),
    r
  )
}
BOT.getMinesPos = function () {
  coords = Object.entries(GAME.map_mines.coords)
  var _0x1b4053 = []
  for (i = 0; i < coords.length; i++) {
    this.mined_id.includes(coords[i][1][0][1]) && _0x1b4053.push(coords[i])
  }
  this.prepareMines(_0x1b4053)
}
BOT.prepareMines = function (_0x428755) {
  this.steps = []
  for (i = 0; i < _0x428755.length; i++) {
    pos = _0x428755[i][0].split('_')
    i == 0 && (first_mine = [parseInt(pos[0]), parseInt(pos[1])])
    this.steps.push([parseInt(pos[0]), parseInt(pos[1])])
    this.mines[pos[0] + '_' + pos[1]] = _0x428755[i][1][0][0]
    i == 0 && (this.last_mine = pos[0] + '_' + pos[1])
  }
  this.steps.push(first_mine)
}
BOT.listMines = function () {
  html = ''
  mdt = Object.entries(GAME.map_mines.mine_data)
  for (i = 0; i < mdt.length; i++) {
    i == 0
      ? (BOT.mined_id.push(mdt[i][1].id),
        (html +=
          "<div style='margin-bottom:5px; border-bottom:solid gray 1px; padding:3px;'><input class='select_mine' type='checkbox' checked='true' value='" +
          mdt[i][1].id +
          "' " +
          (mdt.length == 1 ? 'disabled' : '') +
          '> ' +
          mdt[i][1].name +
          '</div>'))
      : (html +=
          "<div style='margin-bottom:5px; border-bottom:solid gray 1px; padding:3px;'><input class='select_mine' type='checkbox' value='" +
          mdt[i][1].id +
          "'> " +
          mdt[i][1].name +
          '</div>')
  }
  $('#BOT_mines').html(html)
}
BOT.FindMapcell = function () {
  return (
    (this.mapcell = Object.keys(GAME).find(
      (_0x501f57) => GAME[_0x501f57] && GAME[_0x501f57]['1_1']
    )),
    this.mapcell
  )
}
BOT.CreateMatrix = function () {
  for (var _0x2c4bde = 0; _0x2c4bde < parseInt(GAME.map.max_y); _0x2c4bde++) {
    this.matrix[_0x2c4bde] = []
    for (var _0xec43ac = 0; _0xec43ac < parseInt(GAME.map.max_x); _0xec43ac++) {
      GAME.mapcell[parseInt(_0xec43ac + 1) + '_' + parseInt(_0x2c4bde + 1)].m ==
      1
        ? (this.matrix[_0x2c4bde][_0xec43ac] = 1)
        : (this.matrix[_0x2c4bde][_0xec43ac] = 0)
    }
  }
}
BOT.Mine = function () {
  this.emitOrder({
    a: 22,
    type: 8,
    mid: BOT.mines[
      parseInt(GAME.char_data.x) + '_' + parseInt(GAME.char_data.y)
    ],
  })
}
BOT.Go = function () {
  if (this.steps_clone.length > 0) {
    this.finder.findPath(
      GAME.char_data.x - 1,
      GAME.char_data.y - 1,
      this.steps_clone[0][0] - 1,
      this.steps_clone[0][1] - 1,
      function (_0x540e2b) {
        _0x540e2b === null
          ? console.log('Scieżka nie znaleziona')
          : ((BOT.path = _0x540e2b),
            BOT.steps_clone.length > 0 &&
              (BOT.path.shift(),
              (cur = [GAME.char_data.x, GAME.char_data.y]),
              setTimeout(() => {
                if (
                  !BOT.stop &&
                  BOT.mines[
                    parseInt(GAME.char_data.x) +
                      '_' +
                      parseInt(GAME.char_data.y)
                  ] &&
                  $(
                    "button[data-mid='" +
                      BOT.mines[
                        parseInt(GAME.char_data.x) +
                          '_' +
                          parseInt(GAME.char_data.y)
                      ] +
                      "']"
                  ).length == 1 &&
                  BOT.steps.some(
                    (_0x2cbfea) =>
                      _0x2cbfea.length == cur.length &&
                      _0x2cbfea.every(
                        (_0x599526, _0x15aa8a) => cur[_0x15aa8a] == _0x599526
                      )
                  )
                ) {
                  setTimeout(function () {
                    BOT.Mine()
                  }, BOT.speed)
                } else {
                  !BOT.stop &&
                    setTimeout(function () {
                      BOT.Move()
                    }, BOT.speed)
                }
              }, 1000)))
      }
    )
    this.finder.calculate()
  } else {
    !this.stop &&
      GAME.char_data.x + '_' + GAME.char_data.y == this.last_mine &&
      (
      setTimeout(function () {
        BOT.Mine()
      }, 1000),
      (this.cdt = setTimeout(function () {
        GAME.loadMapJson(function () {
          BOT.emitOrder(
            {
              a: 3,
              vo: GAME.map_options.vo,
            },
            1
          )
        })
        setTimeout(function () {
          BOT.Start()
        }, 2000)
        $('.bt_cool').html('')
      }, this.GetCooldown())))
  }
}
BOT.Move = function () {
  if (!this.stop) {
    if (
      this.path[0].x > GAME.char_data.x - 1 &&
      this.path[0].y == GAME.char_data.y - 1
    ) {
      this.emitOrder({
        a: 4,
        dir: 7,
        vo: GAME.map_options.vo,
      })
    } else {
      if (
        this.path[0].x < GAME.char_data.x - 1 &&
        this.path[0].y == GAME.char_data.y - 1
      ) {
        this.emitOrder({
          a: 4,
          dir: 8,
          vo: GAME.map_options.vo,
        })
      } else {
        if (
          this.path[0].x == GAME.char_data.x - 1 &&
          this.path[0].y > GAME.char_data.y - 1
        ) {
          this.emitOrder({
            a: 4,
            dir: 1,
            vo: GAME.map_options.vo,
          })
        } else {
          if (
            this.path[0].x == GAME.char_data.x - 1 &&
            this.path[0].y < GAME.char_data.y - 1
          ) {
            this.emitOrder({
              a: 4,
              dir: 2,
              vo: GAME.map_options.vo,
            })
          } else {
            if (
              this.path[0].x > GAME.char_data.x - 1 &&
              this.path[0].y > GAME.char_data.y - 1
            ) {
              this.emitOrder({
                a: 4,
                dir: 3,
                vo: GAME.map_options.vo,
              })
            } else {
              if (
                this.path[0].x < GAME.char_data.x - 1 &&
                this.path[0].y < GAME.char_data.y - 1
              ) {
                this.emitOrder({
                  a: 4,
                  dir: 6,
                  vo: GAME.map_options.vo,
                })
              } else {
                if (
                  this.path[0].x > GAME.char_data.x - 1 &&
                  this.path[0].y < GAME.char_data.y - 1
                ) {
                  this.emitOrder({
                    a: 4,
                    dir: 5,
                    vo: GAME.map_options.vo,
                  })
                } else {
                  this.path[0].x < GAME.char_data.x - 1 &&
                  this.path[0].y > GAME.char_data.y - 1
                    ? this.emitOrder({
                        a: 4,
                        dir: 4,
                        vo: GAME.map_options.vo,
                      })
                    : this.Go()
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
  this.path.length - 1 > 0
    ? (this.path.shift(),
      setTimeout(function () {
        BOT.Move()
      }, this.speed))
    : this.steps_clone.length > 0 && (this.steps_clone.shift(), this.Go())
}
BOT.HandleResponse = function (_0x323b02) {
  this.processing = false
  if (!this.stop && _0x323b02.a === 4 && _0x323b02.char_id === GAME.char_id) {
    BOT.Next()
  } else {
    !this.stop &&
      _0x323b02.done &&
      _0x323b02.a === 22 &&
      ($("button[data-option='start_mine']").remove(), BOT.Go())
  }
}
GAME.socket.on('gr', function (_0x3c3c94) {
  BOT.HandleResponse(_0x3c3c94)
})
BOT.LoadES = (function () {
  esjs = document.createElement('script')
  esjs.src =
    'https://cdn.jsdelivr.net/npm/easystarjs@0.4.3/bin/easystar-0.4.3.min.js'
  esjs.onload = () => {
    BOT.finder = new EasyStar.js()
    BOT.finder.enableDiagonals()
    BOT.finder.setAcceptableTiles([1])
    BOT.listMines()
    $('#BOT_control').show()
    $('#BOT_mines').show()
  }
  document.head.append(esjs)
})()
customLog(
  'Skrypt Zbierajka.js został poprawnie załadowany!'
)
$('script').last().remove()
