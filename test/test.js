#!/usr/bin/env node

var vows = require('vows');
var assert = require('assert');

var suite = vows.describe('subject');

suite.addBatch({
  'math': {
    '1 equal 1': {
      topic: [1, 1],
      '1==1': function (topic) {
        assert.equal(topic[0], topic[1]);
      }
    }
  }
});

suite.export(module);