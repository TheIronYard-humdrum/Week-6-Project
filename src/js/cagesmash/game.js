import $ from 'jquery'
import _ from 'lodash'

import { Stage } from './stage.js'
import { Gopher } from './gophers.js'

class Smashcage {
  constructor (stage, level) {
    this.stage = new Stage;
    this.score = {
      hits: 0,
      miss: 0
    };
    this.gophers = Array(level.gophers).fill("");
  }

  addGopher () {
    let gopher = new Gopher();
    let position = _.random(0, this.stage.gopherHoles.length)
    this.stage.showGopher(gopher, position);
    this.stage.gopherHoles[position] = 1;
    var that = this;
    setTimeout(function () {
      that.removeGopher(position);
    }, 2000);

  }

  removeGopher (gopher, position) {
    this.stage.gopherHoles[position] = 0;
    this.stage.hideGopher(gopher, position);
  }

  Init (stage, level) {
    this.addGopher();
  }

}

export { Smashcage }