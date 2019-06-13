const periodData = require("./periods");

module.exports = {
  /**
   * Converts Gregorian calendar year to Japanese calendar year
   */
  japaneseYear: gregorianDate => {
    let gregorianYear;
    let gregorianMonth;
    let gregorianDay;

    if (gregorianDate instanceof Date) {
      gregorianYear = gregorianDate.getFullYear();
      gregorianMonth = gregorianDate.getMonth() + 1;
      gregorianDay = gregorianDate.getDate();
    } else {
      throw new TypeError(`Expected a Date`);
    }

    const periodOrdered = periodData.sort((a, b) => b.startYear - a.startYear);

    if (gregorianYear < periodOrdered[periodOrdered.length - 1].startYear) return null;

    const exactPeriod = periodOrdered.find((period, i) => {
      if (i === periodOrdered.length - 1) return true;
      if (gregorianYear > period.startYear) return true;
      if (gregorianYear === period.startYear && gregorianMonth > period.startMonth) return true;
      if (gregorianYear === period.startYear && gregorianMonth === period.startMonth && gregorianDay >= period.startDay) return true;
      return false;
    });

    const updatedPeriod = Object.assign(
      {currentJapaneseYear: gregorianYear - exactPeriod.startYear + 1},
      exactPeriod
    );

    return updatedPeriod;
  },

  /**
   * Converts Japanese calendar year to Gregorian year range
   * @param {String} year
   * @return {object}
   */
  gregorianYearRange: japanesePeriod => {
    if (typeof japanesePeriod !== "string") {
      throw new TypeError("Expected a String");
    }

    let yearRange = null;
    const foundPeriod = periodData.find(
      period =>
        period.names.kanji === japanesePeriod ||
        period.names.hiragana === japanesePeriod ||
        period.names.english === japanesePeriod
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
