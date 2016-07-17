import $ from 'jquery'
import _ from 'lodash'

import { Smashcage, getLevel, easy } from './cagesmash/game.js'
import { Stage, ids } from './cagesmash/stage.js'
import { Gopher } from './cagesmash/gophers.js'

let stage = new Stage();
let game = new Smashcage(easy, stage);
game.setUp(stage)

var findGophers = function() {
  $(`#board`).on('click', function(event) {
  let gopherHole = ids.indexOf(event.target.id)
  if (stage.locations[gopherHole] !== 0 ) {
    let gopher = stage.locations[gopherHole]
    gopher.smash();
    game.score += 100;
    var score = $('.score')
    score[0].innerText = `Score: ${game.score}`
  };
});
}

$(`.submit`).on('click', function(event) {
  event.preventDefault();
  $('#board').empty();
  let level = getLevel();
  let stage = new Stage();
  let gopher = new Gopher();
  let game = new Smashcage(level, stage);
  game.setUp(stage)
  game.init(stage, level);
  findGophers();
});

export { findGophers }