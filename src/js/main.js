import $ from 'jquery'
import _ from 'lodash'

import { Smashcage } from './cagesmash/game.js'
import { Stage } from './cagesmash/stage.js'
import { Gopher } from './cagesmash/gophers.js'

const easy = {time: 2200, gophers: 30 }
const medium = {time: 1800, gophers: 40 }
const hard = {time: 1500, gophers: 50 }
const crazy = {time: 1200, gophers: 60 }

let level = easy;

let game = new Smashcage();
let stage = new Stage(game);
let gopher = new Gopher();


