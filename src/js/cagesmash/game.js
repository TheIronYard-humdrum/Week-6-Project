import $ from 'jquery'
import _ from 'lodash'

import { Stage } from './stage.js'
import { Gopher } from './gophers.js'

var gopherGenerator = function (numberDesiredGophers) {
  let gophers = [];
  for ( var i = 0; i < numberDesiredGophers; i++ ) {
    gophers.push(new Gopher)
  }
  return gophers
}


class Smashcage {
  constructor (level, stage) {
    this.gophers = gopherGenerator(level.gophers);
    this.score = {
      hits: 0,
      misses: 0
    }
  }

  addGophers(stage) {
    for (var i = 0; i < this.gophers.length; i++) {
      console.log(stage);
      stage.show(this.gophers[i]);
      console.log(stage);
    }   
  }

  setUp(stage) {
    let board = $('#board')
    for ( var i = 0; i < stage.locations.length; i++ ) {
      let spotHTML = `<div id='${ids[i]}' class='gopher-hole'></div>`
      board.append(spotHTML)
    }
  }

}

export { Smashcage }