import $ from 'jquery';

import { costumes, smashedCostumes } from './stage.js'


const locations = [0,0,0,
                   0,0,0,
                   0,0,0];

console.log('stageFunction talk');
console.log(locations);

var randomPosition = function () {
  let position = Math.floor(Math.random()*locations.length);
  if (locations[position] === 0 ) {
      return position
    } else {
      randomPosition()
    }
}

var randomCostume = function () {
  return _.sample(costumes)
}

var randomSmashedCostume = function () {
  return _.sample(smashedCostumes)
}

var prep = function(gopher) {
    gopher.costume = randomCostume();
    gopher.smashedCostume = randomSmashedCostume();
    gopher.location = randomPosition();
    return gopher;
}

var costumeShow = function (gopherHole, costume) {
    gopherHole.css('background-image', `url(${costume})`)
    gopherHole.css('border', `none`);
    gopherHole.css('width', `220px`);
    gopherHole.css('height', `220px`);
}

var costumeHide = function(gopherHole) {
  gopherHole.css('background-image', `none`);
  gopherHole.css('border', `solid 12px purple`);
  gopherHole.css('width', `200px`);
  gopherHole.css('height', `200px`);
}


export { randomPosition, randomCostume, randomSmashedCostume,
         prep, costumeShow, costumeHide }





























