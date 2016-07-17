import $ from 'jquery'
import _ from 'lodash'

import { Smashcage } from './game.js'
import { Gopher } from './gophers.js'
import { level } from '../main.js'
import { randomPosition, randomCostume, randomSmashedCostume,
         prep, costumeShow, costumeHide } from './stageFunctions.js'

const costumes = ['https://www.placecage.com/c/140/140',
                 'https://www.placecage.com/c/170/170',
                 'https://www.placecage.com/c/180/180',
                 'https://www.placecage.com/c/200/200',
                 'https://www.placecage.com/c/220/220'];

const smashedCostumes = ['https://www.placecage.com/c/120/120',
                        'https://www.placecage.com/c/130/130',
                        'https://www.placecage.com/c/190/190'];

const locations = [0,0,0,
                   0,0,0,
                   0,0,0];

const ids = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

class Stage {
  constructor () {
    this.locations = locations;
  }
  show(gopher, level) {
    var that = this;
    gopher = prep(gopher);
    locations[gopher.location] = gopher; //has gopher
    let gopherHole = $(`#${ids[gopher.location]}`)
    costumeShow(gopherHole, gopher.costume);
    setTimeout(function() {
      that.hide(gopher)
      locations[gopher.location] = 0;
    }, level.time)
  }
  hide(gopher) {
    let gopherHole = $(`#${ids[gopher.location]}`)
    locations[gopher.position] = 0; //remove gopher from board
    costumeHide(gopherHole);
  }
}

export { Stage, ids, locations, costumes, smashedCostumes }
























