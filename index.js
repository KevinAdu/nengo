'use strict';

const periodData = require('./periods');

/**
 * Converts Gregorian calendar year to Japanese calendar year
 * @param {number} year
 * @return {string}
 */
module.exports = function(year) {
  const periodYears = Object.keys(periodData).sort((a, b) => b - a);
  let exactPeriodYear = periodYears.find((periodYear, i) => {
    if (i === 0) {
      return periodYear <= year;
    } else if (i === periodYears.length - 1) {
      return true;
    } else {
      return periodYear <= year && periodYears[i-1] > year;
    }
  });

  exactPeriodYear = exactPeriodYear || periodYears[0];

  return periodData[exactPeriodYear].periodName;
};