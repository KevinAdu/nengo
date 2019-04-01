const { expect } = require("chai");
const { japaneseYear, gregorianYearRange } = require("./index");

describe("#japaneseYear", () => {
  it("should convert the Gregorian year to the appropriate Japanese calendar year", () => {
    const heiseiExactYear = japaneseYear(1989);
    const showaYear = japaneseYear(1987);
    const meijiExactYear = japaneseYear(1868);

    expect(heiseiExactYear.names).to.include("Heisei");
    expect(heiseiExactYear.currentJapaneseYear).to.equal(1);
    expect(showaYear.names).to.include("Showa");
    expect(showaYear.currentJapaneseYear).to.equal(62);
    expect(meijiExactYear.names).to.include("Meiji");
    expect(meijiExactYear.currentJapaneseYear).to.equal(1);
  });

  it("should convert any year above the last emperor calendar date", () => {
    const heiseiYear = japaneseYear(1990);
    const tokyoOlympicYear = japaneseYear(2020);

    expect(heiseiYear.names).to.include("Heisei");
    expect(heiseiYear.currentJapaneseYear).to.equal(2);
    expect(tokyoOlympicYear.names).to.include("Reiwa");
    expect(tokyoOlympicYear.currentJapaneseYear).to.equal(2);
  });

  it("should convert any year below the first recorded emperor calendar date to null", () => {
    const gennaYear = japaneseYear(1615);
    const firstAdYear = japaneseYear(0);

    expect(gennaYear.names).to.include("Genna");
    expect(firstAdYear).to.equal(null);
  });

  it("should convert the Gregorian year in date format to the appropriate Japanese calendar year", () => {
    const heiseiExactYear = japaneseYear(new Date(1989, 0));
    const showaYear = japaneseYear(new Date(1987, 0));
    const meijiExactYear = japaneseYear(new Date(1868, 0));

    expect(heiseiExactYear.names).to.include("Heisei");
    expect(heiseiExactYear.currentJapaneseYear).to.equal(1);
    expect(showaYear.names).to.include("Showa");
    expect(showaYear.currentJapaneseYear).to.equal(62);
    expect(meijiExactYear.names).to.include("Meiji");
    expect(meijiExactYear.currentJapaneseYear).to.equal(1);
  });

  it("should throw a type error for a type it doesn't expect", () => {
    expect(() => japaneseYear([])).to.throw(TypeError);
  });
});

describe("#gregorianYearRange", () => {
  it("should convert the Japanese calendar year to the Gregorian year", () => {
    const reiwaPeriodRange = gregorianYearRange("令和");
    const reiwaPeriodRangeEnglish = gregorianYearRange("Reiwa");
    const heiseiPeriodRange = gregorianYearRange("平成");
    const meijiPeriodRange = gregorianYearRange("明治");
    const genjiPeriodRange = gregorianYearRange("元治");
    const doesntExistPeriodRange = gregorianYearRange("横浜");

    expect(reiwaPeriodRange.startYear).to.equal(2019);
    expect(reiwaPeriodRangeEnglish.startYear).to.equal(2019);
    expect(heiseiPeriodRange.startYear).to.equal(1989);
    expect(meijiPeriodRange.startYear).to.equal(1868);
    expect(genjiPeriodRange.startYear).to.equal(1864);
    expect(reiwaPeriodRange.endYear).to.equal(null);
    expect(reiwaPeriodRangeEnglish.endYear).to.equal(null);
    expect(heiseiPeriodRange.endYear).to.equal(2018);
    expect(meijiPeriodRange.endYear).to.equal(1911);
    expect(genjiPeriodRange.endYear).to.equal(1864);
    expect(doesntExistPeriodRange).to.equal(null);
  });

  it("should throw a type error for a non string it doesn't expect", () => {
    expect(() => gregorianYearRange(1229)).to.throw(TypeError);
  });
});
