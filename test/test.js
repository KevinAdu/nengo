'use strict';

const expect = require('chai').expect;
const yearConverter = require('../index');

describe('#yearConverter', function() {
  it('should convert the Gregorian year to the appropriate Japanese calendar year', function() {
      var result = yearConverter(1989);
      expect(result).to.equal('Heisei');
  });
});
