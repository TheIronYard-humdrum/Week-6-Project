import $ from 'jquery'
import _ from 'lodash'

// import { Stage } from './stage.js'
// import { Gopher } from './gophers.js'

class Smashcage {
  constructor () {
    this.tally = [];
    this.score = {
      misses: 0,
      hits: 0
    }
  }  

  smash(gopher) {
    gopher.smashed = true;
    gopher.img = gopher.smashedImg;
  }

}

export { Smashcage }