const chai = require('chai');

const should = chai.should();

const { songDecoder } = require('../7-dubstep.js');

describe('songDecoder', function() {
  it('should replace "WUB" by one space', function() {
    songDecoder("AWUBBWUBC").should.equal("A B C");
  });

  it('should replace multiple "WUB"s by one space', function() {
    songDecoder("AWUBWUBWUBBWUBWUBWUBC").should.equal("A B C");
  });

  it('should remove heading or trailing spaces', function() {
    songDecoder("WUBAWUBBWUBCWUB").should.equal("A B C");
  });
});
