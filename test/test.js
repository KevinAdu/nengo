const { expect } = require('chai');
const yearConverter = require('../index');

describe('#yearConverter', () => {
  it('should convert the Gregorian year to the appropriate Japanese calendar year', () => {
    const heiseiExactYear = yearConverter(1989);
    const showaYear = yearConverter(1987);
    const meijiExactYear = yearConverter(1868);

    expect(heiseiExactYear.periodName).to.equal('Heisei');
    expect(showaYear.periodName).to.equal('Showa');
    expect(meijiExactYear.periodName).to.equal('Meiji');
  });

  it('should convert any year above the last emperor calendar date', () => {
    const heiseiYear = yearConverter(1990);
    const tokyoOlympicYear = yearConverter(2020);

    expect(heiseiYear.periodName).to.equal('Heisei');
    expect(tokyoOlympicYear.periodName).to.equal('Heisei');
  });

  it('should convert any year below the first recorded emperor calendar date', () => {
    const genjiYear = yearConverter(1862);
    const firstAdYear = yearConverter(0);

    expect(genjiYear.periodName).to.equal('Genji');
    expect(firstAdYear.periodName).to.equal('Genji');
  });
});
