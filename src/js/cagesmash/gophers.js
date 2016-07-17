import $ from 'jquery'
import _ from 'lodash'

import { ids } from './Stage/stage.js'
import { level } from '../main.js'

class Gopher {
  constructor () {
    this.location = null;
    this.costume = null;
    this.smashedCostume = null;
    this.smashed = false;
  }

  smash() {
    this.smashed = true;
    this.costume = this.smashedCostume;
    let gopherHole = $(`#${ids[this.location]}`);
    gopherHole.css('background-image', `url(${this.costume})`);
    gopherHole.css('border', `solid 3px yellow`);
  }
}
export { Gopher }