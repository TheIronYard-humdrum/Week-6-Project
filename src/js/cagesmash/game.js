import $ from 'jquery'
import _ from 'lodash'

import { Stage, ids } from './stage.js'
import { Gopher } from './gophers.js'
import { level, findGophers } from '../main.js'

const easy = {time: 1600, gophers: 30 }
const medium = {time: 1300, gophers: 40 }
const hard = {time: 1000, gophers: 50 }
const crazy = {time: 700, gophers: 60 }

var getLevel = function() {
  let level = $('select').val().toLowerCase();
    if (level === 'medium') {
    level = medium
  } else if (level === 'hard') {
    level = hard
  } else if (level === 'crazy') {
    level = crazy
  } else {
    level = easy
  }
  return level
}

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
    this.score = 0;
  }
  addGopher(gopher, stage, level) {
    stage.show(gopher, level)
  }
  setUp(stage) {
    let board = $('#board')
    for ( var i = 0; i < stage.locations.length; i++ ) {
      let spotHTML = `<div id='${ids[i]}' class='gopher-hole'></div>`
      board.append(spotHTML)
    }
  }
  init (stage, level) {
    var gopher = this.gophers[0]
    stage.show(gopher, level);
    var callCount = 1;
    gopher = this.gophers;
    var that = this;
    var repeater = setInterval(function() {
      if(callCount < level.gophers) {
        stage.show(gopher[callCount], level);
        callCount += 1;
      } else {
        clearInterval(repeater);
        setTimeout(function() {
          that.gameOver();
        }, 500)
      }
    }, (level.time/2));
  }
  gameOver () {
    console.log('YOU WIN')
  }
}

export { Smashcage, getLevel, easy }

















