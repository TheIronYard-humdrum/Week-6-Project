import $ from 'jquery'
import _ from 'lodash'

import { Smashcage } from './cagesmash/game.js'
import { Stage } from './cagesmash/stage.js'
import { Gopher } from './cagesmash/gophers.js'

const easy = {time: 2200, gophers: 30 }
const medium = {time: 1800, gophers: 40 }
const hard = {time: 1500, gophers: 50 }
const crazy = {time: 1200, gophers: 60 }
const ids = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']


let level = easy;


let stage = new Stage();
let gopher = new Gopher();
let game = new Smashcage(level, stage);

var populateBoard = function() {
  

  let board = $('#board')
  for ( var i = 0; i < stage.locations.length; i++ ) {
    let spotHTML = `<div id='${ids[i]}' class='gopher-hole'></div>`
    board.append(spotHTML)
  }
}

populateBoard();
stage.show(gopher);

$(`#board`).on('click', function(event) {
  let gopherHole = ids.indexOf(event.target.id)
  if (stage.locations[gopherHole] === 1 ) {
    console.log(gopher);
    gopher.smash();
    console.log(gopher);
  };
})

