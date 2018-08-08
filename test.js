const { expect } = require("chai");
const { japaneseYear } = require("./index");

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
