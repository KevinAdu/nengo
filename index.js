'use strict';

const periodData = require('./periods');

/**
 * Converts Gregorian calendar year to Japanese calendar year
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(year) {
  const periodYears = Object.keys(periodData).sort((a, b) => b - a);
  let exactPeriodYear = 0;

  exactPeriodYear = periodYears.find((periodYear, i) => {
    return periodYear => year && periodYears[i+1] < year;
  })
  return periodData[exactPeriodYear].periodName;
};