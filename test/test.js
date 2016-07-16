// Import Chai
import chai from 'chai';

// Import Any Files to Test

import { Smashcage } from '../src/js/cagesmash/game.js';
import { Stage } from '../src/js/cagesmash/stage.js';
import { Gopher } from '../src/js/cagesmash/gophers.js';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Cage Smash', function () {
  let game;
  let stage;
  let gopher;

  beforeEach(() => {
    game = new Smashcage();
    gopher = new Gopher();
    stage = new Stage();
    // stage = new Stage();
  });
  describe('Testing the Creation of Smashcage', () =>{
    it('should exist after we create it', () =>{
      expect(game).to.be.an.instanceof(Smashcage);
    });
    it('should have an empty tally to hold shown gophers in', () => {
      expect(game.tally).to.be.an('array');
      expect(game.tally.length).to.equal(0);
    });
    it('should be able to calculate score based off hits and misses', () => {
      expect(game.score.misses).to.equal(0);
      expect(game.score.hits).to.equal(0);
    });
    describe("Game methods", () => {
      it('should include a way to smash gophers', () => {
        game.smash(gopher);
        expect(gopher.smashed).to.equal(true);
      });
    });
  });   
  describe('Testing the creation of a Gopher', () => {
    it('should exist after we create it', () =>{
      expect(gopher).to.be.an.instanceof(Gopher);
    });
    it('should have be able to take a location', () => {
      expect(gopher.location).to.equal(null);
    });
    it('should be able to be told what to look like', () => {
      expect(gopher.costume).to.equal(null);
    });
    it('should be able to keep track of its being smashed or not', () => {
      expect(gopher.smashed).to.equal(false);
    });
  });
  describe('Testing the creation of the Stage', () => {
    it('should exist after we create it', () => {
      expect(stage).to.be.an.instanceof(Stage);
    });
    it('should be able to make gophers', () => {
      expect(stage.gopher).to.be.an.instanceof(Gopher);
    });
    it('should have 9 empty stage positions', () => {
      expect(stage.locations).to.be.an('array');
      expect(stage.locations.length).to.equal(9);
    });
  });
});
















