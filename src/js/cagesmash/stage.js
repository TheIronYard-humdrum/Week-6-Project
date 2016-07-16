import $ from 'jquery'
import _ from 'lodash'

import { Smashcage } from './game.js'
import { Gopher } from './gophers.js'
// // 0 = no gopher
// // 1 = yes gopher


const costumes = ['https://www.placecage.com/c/140/140',
                 'https://www.placecage.com/c/170/170',
                 'https://www.placecage.com/c/180/180',
                 'https://www.placecage.com/c/200/200',
                 'https://www.placecage.com/c/220/220'];

const smashedCostumes = ['https://www.placecage.com/c/120/120',
                        'https://www.placecage.com/c/130/130',
                        'https://www.placecage.com/c/190/190']
const locations = [0,0,0,
                  0,0,0,
                  0,0,0]

var randomPosition = function () {
  let position = Math.floor(Math.random()*locations.length);
  if (locations[position] === 0 ) {
      return position
    } else {
      randomPosition()
    }
}

var randomCostume = function () {
  return _.sample(costumes)
}
var randomSmashedCostume = function () {
  return _.sample(smashedCostumes)
}

class Stage {

  constructor () {
    this.locations = locations;
  }

  show(gopher) {
    let ids = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
    gopher.costume = randomCostume();
    gopher.smashedCostume = randomSmashedCostume();
    gopher.location = randomPosition();
    locations[gopher.location] = 1; //has gopher
    let gopherHole = $(`#${ids[gopher.location]}`)
    gopherHole.css('background-image', `url(${gopher.costume})`)

    // wait 2 seconds
    // locations[gopher.position] = 0; //remove gopher from board
    // gopherHole.css('background-image', 'none') //remove gopher image
  }

}


export { Stage }








