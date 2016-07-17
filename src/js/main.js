import $ from 'jquery'
import _ from 'lodash'

import { Smashcage, getLevel, easy } from './cagesmash/game.js'
import { Stage, ids } from './cagesmash/Stage/stage.js'
import { Gopher } from './cagesmash/gophers.js'

let stage = new Stage();
let game = new Smashcage(easy, stage);
stage.setUp();

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
  $('#board').append(`<h2 class="score">Score: 000</h2>
                      <img class='fire-1 hidden' src="http://www.clker.com/cliparts/a/6/4/9/11954351131708850731zeimusu_Fire_Icon.svg.med.png">
                      <img class='fire-2 hidden' src="http://www.clker.com/cliparts/a/6/4/9/11954351131708850731zeimusu_Fire_Icon.svg.med.png">
                      <img class='fire-3 hidden' src="http://www.clker.com/cliparts/a/6/4/9/11954351131708850731zeimusu_Fire_Icon.svg.med.png">
                      <img class='fire-4 hidden' src="http://www.clker.com/cliparts/a/6/4/9/11954351131708850731zeimusu_Fire_Icon.svg.med.png">
                      <img class='fire-5 hidden' src="http://www.clker.com/cliparts/a/6/4/9/11954351131708850731zeimusu_Fire_Icon.svg.med.png">
                      <img class='fire-6 hidden' src="http://www.clker.com/cliparts/a/6/4/9/11954351131708850731zeimusu_Fire_Icon.svg.med.png">
                      <img class='fire-7 hidden' src="http://www.clker.com/cliparts/a/6/4/9/11954351131708850731zeimusu_Fire_Icon.svg.med.png">
                      <img class='fire-8 hidden' src="http://www.clker.com/cliparts/a/6/4/9/11954351131708850731zeimusu_Fire_Icon.svg.med.png">
                      <img class='fire-9 hidden' src="http://www.clker.com/cliparts/a/6/4/9/11954351131708850731zeimusu_Fire_Icon.svg.med.png">
                      <img class='fire-10 hidden' src="http://www.clker.com/cliparts/a/6/4/9/11954351131708850731zeimusu_Fire_Icon.svg.med.png">
                      <img class='bus' src="images/schoolBus.png">
                      <img class="city" src="images/cityscape.png">
                      <img class="bike" src="http://clipartix.com/wp-content/uploads/2016/04/Motorcycle-free-to-use-clip-art-3.png">
                      <img class="ghost-rider" src="http://iconbug.com/data/bc/512/dd340adcc862999ddeb1d06988c37196.png">
                      <img class='old-man' src="http://www.wpclipart.com/cartoon/people/men_cartoons/old_men/grumpy_old_man_T.png">
                      <img class='bush-1' src="http://images.clipartpanda.com/shrub-clipart-bushes-hi.png">
                      <img class='bush-2' src="http://images.clipartpanda.com/shrub-clipart-bushes-hi.png">
                      <img class='dog' src="http://www.clipartbest.com/cliparts/dTr/ea5/dTrea5bGc.png">
                      <img class="sewer" src="https://openclipart.org/image/2400px/svg_to_png/231168/sewer.png">
                      <img class='helicopter' src="http://1.bp.blogspot.com/_jntCv7uXPyE/Se314pOjK7I/AAAAAAAAAHY/BpGz0-dC4eM/s320/helicopter+vector,cartoon,+animasi.png">`);
  let level = getLevel();
  let stage = new Stage();
  let gopher = new Gopher();
  let game = new Smashcage(level, stage);
  stage.setUp()
  game.init(stage, level);
  findGophers();
});

export { findGophers }