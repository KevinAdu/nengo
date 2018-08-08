const periodData = require("./periods");

/**
 * Converts Gregorian calendar year to Japanese calendar year
 * @param {number} year
 * @return {string}
 */
module.exports = {
  japaneseYear: function(gregorianYear) {
    const periodYears = Object.keys(periodData).sort((a, b) => b - a);
    const exactPeriodYear = periodYears.find((periodYear, i) => {
      if (i === 0) return periodYear <= gregorianYear;
      if (i === periodYears.length - 1) return true;
      return periodYear <= gregorianYear && periodYears[i - 1] > gregorianYear;
    });

    return periodData[exactPeriodYear];
  }
}
