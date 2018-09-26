const periodData = require("./periods");

module.exports = {
  /**
   * Converts Gregorian calendar year to Japanese calendar year
   */
  japaneseYear: gregorianYear => {
    let gregorianYearNum;

    if (gregorianYear instanceof Date) {
      gregorianYearNum = gregorianYear.getFullYear();
    } else if (typeof gregorianYear === "number") {
      gregorianYearNum = gregorianYear;
    } else {
      throw new TypeError(`Expected a Date or Number`);
    }

    const periodYears = periodData
      .sort((a, b) => b.startYear - a.startYear)
      .map(period => period.startYear);

    if (gregorianYearNum < periodYears[periodYears.length - 1]) return null;

    const exactPeriodYear = periodYears.find((periodYear, i) => {
      if (i === 0) return periodYear <= gregorianYearNum;
      if (i === periodYears.length - 1) return true;
      return (
        periodYear <= gregorianYearNum && periodYears[i - 1] > gregorianYearNum
      );
    });

    const foundPeriod = periodData.find(
      period => exactPeriodYear === period.startYear
    );

    const updatedPeriod = Object.assign(
      {
        currentJapaneseYear: gregorianYearNum - foundPeriod.startYear + 1
      },
      foundPeriod
    );

    return updatedPeriod;
  },

  /**
   * Converts Japanese calendar year to Gregorian year range
   * @param {String} year
   * @return {object}
   */
  gregorianYearRange: japanesePeriod => {
    let yearRange = null;
    const foundPeriod = periodData.find(period =>
      period.names.includes(japanesePeriod)
    );

    if (foundPeriod) {
      const previousPeriod = periodData[periodData.indexOf(foundPeriod) - 1];
      const previousYear = previousPeriod ? previousPeriod.startYear - 1 : null;

      yearRange = {
        startYear: foundPeriod.startYear,
        endYear: previousYear
      };
    }

    return yearRange;
  }
};
