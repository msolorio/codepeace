'use strict';

const chai = require('chai');
const expect = chai.expect;

const ipsBetween = require('../../codepeace/21-count-ip-addresses');

describe('ipsBetween', function() {
  it('should return error if 2 inputs not provided', function() {
    expect(ipsBetween("10.0.0.1")).to.be.an('error');
    expect(ipsBetween()).to.be.an('error');
    expect(ipsBetween().message).to.equal('2 inputs must be provided');
  });

  it('should return error if inputs are not in ip address format', function() {
    expect(ipsBetween("asdf", "qwer")).to.be.an('error');
    expect(ipsBetween("asdf", "qwer").message).to.equal('both inputs must in ip address format');
    expect(ipsBetween("10.0.0", "10.0.1").message).to.equal('both inputs must in ip address format');
  });

  it('should return a number', function() {
    expect(ipsBetween("10.0.0.1", "10.0.0.2")).to.be.a('number');
  });

  it('should return correct number of ips between two given ip addresses, not inclusive of last address', function () {
    const testCases = [
      {input: ["10.0.0.0", "10.0.0.50"], output: 50},
      {input: ["10.0.0.0", "10.0.1.0"], output: 256},
      {input: ["20.0.0.10", "20.0.1.0"], output: 246}
    ];

    testCases.forEach(function(testCase) {
      expect(ipsBetween(...testCase.input)).to.equal(testCase.output);
    });
  });
})
