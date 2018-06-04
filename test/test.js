'use strict';

const expect = require('chai').expect;
const yearConverter = require('../index');

describe('#yearConverter', () => {
  it('should convert the Gregorian year to the appropriate Japanese calendar year', () => {
      const result = yearConverter(1987);
      expect(result).to.equal('Heisei');
  });
});
