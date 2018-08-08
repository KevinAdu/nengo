const periodData = require("./periods");

module.exports = {
  /**
   * Converts Gregorian calendar year to Japanese calendar year
   * @param {number} year
   * @return {string}
   */
  japaneseYear: function(gregorianYear) {
    const periodYears = periodData.sort((a, b) => b.startYear - a.startYear).map(period => period.startYear);
    const exactPeriodYear = periodYears.find((periodYear, i) => {
      if (i === 0) return periodYear <= gregorianYear;
      if (i === periodYears.length - 1) return true;
      return periodYear <= gregorianYear && periodYears[i - 1] > gregorianYear;
    });

    return periodData.find(period => exactPeriodYear == period.startYear);
  }
}
