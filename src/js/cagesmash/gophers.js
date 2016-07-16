import $ from 'jquery'
import _ from 'lodash'

// import { Smashcage } from './game.js'
// import { Stage } from './stage.js'
import { ids } from '../main.js'


class Gopher {
  constructor () {
    this.location = null;
    this.costume = null;
    this.smashedCostume = null;
    this.smashed = false;
  }

  smash() {
    let ids = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
    this.smashed = true;
    this.costume = this.smashedCostume;
    let gopherHole = $(`#${ids[this.location]}`)
    gopherHole.css('background-image', `url(${this.costume})`)
  }
}


export { Gopher }