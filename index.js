const periodData = require('./periods');

/**
 * Converts Gregorian calendar year to Japanese calendar year
 * @param {number} year
 * @return {string}
 */
module.exports = function (year) {
  const periodYears = Object.keys(periodData).sort((a, b) => b - a);

  const exactPeriodYear = periodYears.find((periodYear, i) => {
    if (i === 0) return periodYear <= year;
    if (i === periodYears.length - 1) return true;
    return periodYear <= year && periodYears[i - 1] > year;
  });

  return periodData[exactPeriodYear];
};
