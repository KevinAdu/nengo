'use strict';

const expect = require('chai').expect;
const yearConverter = require('../index');

describe('#yearConverter', () => {
  it('should convert the Gregorian year to the appropriate Japanese calendar year', () => {
      const heiseiExactYear = yearConverter(1989);
      const showaYear = yearConverter(1987);
      const meijiExactYear = yearConverter(1868);

      expect(heiseiExactYear).to.equal('Heisei');
      expect(showaYear).to.equal('Showa');
      expect(meijiExactYear).to.equal('Meiji');
  });

  it('should convert any year above the last emperor calendar date', () => {
    const heiseiYear = yearConverter(1990);
    const tokyoOlympicYear = yearConverter(2020);

    expect(heiseiYear).to.equal('Heisei');
    expect(tokyoOlympicYear).to.equal('Heisei');
  })
});
