'use strict';

const expect = require('chai').expect;
const yearConverter = require('../index');

describe('#yearConverter', () => {
  it('should convert the Gregorian year to the appropriate Japanese calendar year', () => {
      const heiseiYear = yearConverter(1990);
      const heiseiExactYear = yearConverter(1989);
      const showaYear = yearConverter(1987);
      const meijiExactYear = yearConverter(1868);

      expect(heiseiYear).to.equal('Heisei');
      expect(heiseiExactYear).to.equal('Heisei');
      expect(showaYear).to.equal('Showa');
      expect(meijiExactYear).to.equal('Meiji');
  });
});
