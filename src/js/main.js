import $ from 'jquery'
import _ from 'lodash'

import { Smashcage } from './cagesmash/game.js'
import { Stage, ids } from './cagesmash/stage.js'
import { Gopher } from './cagesmash/gophers.js'

const easy = {time: 2200, gophers: 30 }
const medium = {time: 1800, gophers: 40 }
const hard = {time: 1500, gophers: 50 }
const crazy = {time: 1200, gophers: 60 }


var level = easy;


let stage = new Stage();
let gopher = new Gopher();
let game = new Smashcage(level, stage);

var findGophers = function() {
  $(`#board`).on('click', function(event) {
  let gopherHole = ids.indexOf(event.target.id)
  if (stage.locations[gopherHole] !== 0 ) {
    stage.locations[gopherHole].smash();
    console.log(game.gophers)
  };
});
}

game.setUp(stage)
findGophers();
game.init(stage, level);

export { level, findGophers }
