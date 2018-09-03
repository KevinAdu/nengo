const periodData = require("./periods");

module.exports = {
  /**
   * Converts Gregorian calendar year to Japanese calendar year
   * @param {String} year
   * @return {object}
   */
  japaneseYear: gregorianYear => {
    const periodYears = periodData.sort(
      (a, b) => b.startYear - a.startYear
    ).map(period => period.startYear);

    const exactPeriodYear = periodYears.find((periodYear, i) => {
      if (i === 0) return periodYear <= gregorianYear;
      if (i === periodYears.length - 1) return true;
      return periodYear <= gregorianYear && periodYears[i - 1] > gregorianYear;
    });

    return periodData.find(period => exactPeriodYear === period.startYear);
  },

  /**
   * Converts Japanese calendar year to Gregorian year range
   * @param {String} year
   * @return {object}
   */
  gregorianYearRange: japanesePeriod => {
    let yearRange = null;
    const foundPeriod = periodData.find(
      period => period.periodNameKanji === japanesePeriod
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
