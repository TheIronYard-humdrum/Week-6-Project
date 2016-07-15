import $ from 'jquery'
import _ from 'lodash'

import { Smashcage } from './game.js'
import { Gopher } from './gophers.js'
import { game } from '../main.js'
// 0 = no gopher
// 1 = yes gopher

class Stage {
  constructor () {
    this.gopherHoles = [0, 0, 0,
                        0, 0, 0, 
                        0, 0, 0];
  }

  showGopher (gopher, position) {
    let hole = $(`#hole-${position}`)
    hole.css('background-image', `url(${gopher.aliveImg})`)
  }

  hideGopher (position) {
    let hole = $(`#hole-${position}`)
    hole.css('background-image', `none`)
  }

}


export { Stage }