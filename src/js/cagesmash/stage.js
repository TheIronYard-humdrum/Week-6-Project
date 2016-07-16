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

// const smashedCosutmes = ['https://www.placecage.com/c/120/120',
//                         'https://www.placecage.com/c/130/130',
//                         'https://www.placecage.com/c/190/190']
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

class Stage {

  constructor (game) {
    this.gopher = new Gopher;
    this.locations = locations;
  }

  show(gopher) {
    let position = randomPosition();
    gopher.costume = randomCostume();
    gopher.location = position;
    console.log(gopher.location)
    //set time out for two seconds
    this.hide(gopher);
  }

  hide(gopher) {
    this.locations[gopher.position] = 0;
    gopher.smashed = false;
  }

}


export { Stage }








