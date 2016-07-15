// Import Chai
import chai from 'chai';

// Import Any Files to Test

import { Smashcage } from '../src/js/cagesmash/game.js'
import { Stage } from '../src/js/cagesmash/stage.js'
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;



describe('Cage Smash', function () {
let game;
let stage;

beforeEach(() => {
  game = new Smashcage();
  stage = new Stage();
})

  describe('Testing the Creation of game', function () {
    it('should exist after we create it', function () {
      expect(game).to.be.an.instanceof(Smashcage);
    });
    it('should be able to keep score', () => {
      expect(game.score.hits).to.equal(0);
      expect(game.score.miss).to.equal(0);
    });
    it('should have an init method', () => {
      expect(game.init());
    });
  });

  describe('Testing the Creation of stage', function () { 
    it('should exist after we create it', () => {
      expect(stage).to.be.an.instanceof(Stage);
    });
    it('should have gopher holes', () => {
      expect(stage.gopherHoles).to.be.an('array');
    });
    it('should be able to add and remove gophers', () => {
      stage.addGopher();
      expect(stage.gopherHoles.indexOf(1)).to.not.equal(-1);
    });


  });



});