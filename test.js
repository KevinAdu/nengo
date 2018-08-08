const { expect } = require("chai");
const { japaneseYear, gregorianYearRange } = require("./index");

describe("#japaneseYear", () => {
  it("should convert the Gregorian year to the appropriate Japanese calendar year", () => {
    const heiseiExactYear = japaneseYear(1989);
    const showaYear = japaneseYear(1987);
    const meijiExactYear = japaneseYear(1868);

    expect(heiseiExactYear.periodName).to.equal("Heisei");
    expect(showaYear.periodName).to.equal("Showa");
    expect(meijiExactYear.periodName).to.equal("Meiji");
  });

  it("should convert any year above the last emperor calendar date", () => {
    const heiseiYear = japaneseYear(1990);
    const tokyoOlympicYear = japaneseYear(2020);

    expect(heiseiYear.periodName).to.equal("Heisei");
    expect(tokyoOlympicYear.periodName).to.equal("Heisei");
  });

  it("should convert any year below the first recorded emperor calendar date", () => {
    const genjiYear = japaneseYear(1862);
    const firstAdYear = japaneseYear(0);

    expect(genjiYear.periodName).to.equal("Genji");
    expect(firstAdYear.periodName).to.equal("Genji");
  });
});

describe("#gregorianYearRange", () => {
  it("should convert the Japanese calendar year to the Gregorian year", () => {
    const heiseiPeriodRange = gregorianYearRange("平成");
    const showaPeriodRange = gregorianYearRange("昭和");
    const meijiPeriodRange = gregorianYearRange("明治");
    const doesntExistPeriodRange = gregorianYearRange("横浜");

    expect(heiseiPeriodRange.startYear).to.equal(1989);
    expect(showaPeriodRange.startYear).to.equal(1926);
    expect(meijiPeriodRange.startYear).to.equal(1868);
    expect(heiseiPeriodRange.endYear).to.equal(null);
    expect(showaPeriodRange.endYear).to.equal(1988);
    expect(meijiPeriodRange.endYear).to.equal(1911);
    expect(doesntExistPeriodRange).to.equal(null);
  });
});
