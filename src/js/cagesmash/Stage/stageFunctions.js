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
    gopherHole.css('border', `solid 3px yellow`);
    // gopherHole.css('width', `220px`);
    // gopherHole.css('height', `220px`);
}

var costumeHide = function(gopherHole) {
  gopherHole.css('background-image', `none`);
  // gopherHole.css('width', `200px`);
  // gopherHole.css('height', `200px`);
  gopherHole.css('border', `none`);
}

var firstToggle = function () {
  let fire1 = $('.fire-1');
  fire1.toggleClass('hidden');
}

var secondToggle = function() {
  let fire2 = $('.fire-2');
  let fire3 = $('.fire-3');
  fire2.toggleClass('hidden');
  fire3.toggleClass('hidden');
}

var thirdToggle = function() {
  let fire4 = $('.fire-4');
  let fire5 = $('.fire-5');
  let fire6 = $('.fire-6');
  fire4.toggleClass('hidden');
  fire5.toggleClass('hidden');
  fire6.toggleClass('hidden');
}

var fourthToggle = function() {
  let fire7 = $('.fire-7');
  let fire8 = $('.fire-8');
  let fire9 = $('.fire-9');
  let fire10 = $('.fire-10');
  fire7.toggleClass('hidden');
  fire8.toggleClass('hidden');
  fire9.toggleClass('hidden');
  fire10.toggleClass('hidden');
}

export { randomPosition, randomCostume, randomSmashedCostume,
         prep, costumeShow, costumeHide, firstToggle, secondToggle,
         thirdToggle, fourthToggle }





























