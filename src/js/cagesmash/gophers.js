import $ from 'jquery'
import _ from 'lodash'

import { Smashcage } from './game.js'
import { Stage } from './stage.js'


const gophers = ['https://www.placecage.com/c/140/140',
                 'https://www.placecage.com/c/170/170',
                 'https://www.placecage.com/c/180/180',
                 'https://www.placecage.com/c/200/200',
                 'https://www.placecage.com/c/220/220'];

const smashedGophers = ['https://www.placecage.com/c/120/120',
                        'https://www.placecage.com/c/130/130',
                        'https://www.placecage.com/c/190/190']


class Gopher {
  constructor () {
    this.aliveImg = _.sample(gophers);
    this.smashedImg = _.sample(smashedGophers);
    this.status = 'alive';
    this.img = this.aliveImg;
  }

  smash () {
    this.status = 'smashed';
    this.img = this.smashedImg;
    game.score.hits += 1;
  }

  miss () {
    this.status = 'missed';
    game.score.miss += 1;
  }

}



export { Gopher }