var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-serial-version-uid');

describe('next/serialVersionUid', function () {

  it('nx.serialVersionUid should between 17 & 18 length', function () {
    var result;
    for (var i = 0; i < 1000; i++) {
      var result = nx.serialVersionUid();
      assert.equal(result.length == 19 || result.length == 18, true);
    }
  });


});
