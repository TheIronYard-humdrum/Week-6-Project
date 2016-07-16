import $ from 'jquery'
import _ from 'lodash'

import { Smashcage } from './cagesmash/game.js'
import { Stage, ids } from './cagesmash/stage.js'
import { Gopher } from './cagesmash/gophers.js'

const easy = {time: 1800, gophers: 30 }
const medium = {time: 1500, gophers: 40 }
const hard = {time: 1200, gophers: 50 }
const crazy = {time: 900, gophers: 60 }

var level = $('select').val().toLowerCase();
if (level === 'easy') {
  level = easy;
} else if (level === 'medium') {
  level = medium
} else if (level === 'hard') {
  level = hard
} else {
  level = crazy
}

let stage = new Stage();
let gopher = new Gopher();
let game = new Smashcage(level, stage);

var findGophers = function() {
  $(`#board`).on('click', function(event) {
  let gopherHole = ids.indexOf(event.target.id)
  if (stage.locations[gopherHole] !== 0 ) {
    let gopher = stage.locations[gopherHole]
    gopher.smash();
    game.score += 100;
    console.log(game.score);
  };
});
}

game.setUp(stage)
findGophers();

$('.submit').on('click', function(event) {
  event.preventDefault();
  game.init(stage, level);
});

export { level, findGophers }