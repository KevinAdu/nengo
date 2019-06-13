const periodData = require("./periods");

module.exports = {
  /**
   * Converts Gregorian calendar year to Japanese calendar year
   */
  japaneseYear: gregorianDate => {
    let gregorianYearNum;
    let gregorianMonthNum;
    let gregorianDayNum;

    if (gregorianDate instanceof Date) {
      gregorianYearNum = gregorianDate.getFullYear();
      // javascript month start from 0
      gregorianMonthNum = gregorianDate.getMonth() + 1;
      gregorianDayNum = gregorianDate.getDate();
    } else {
      throw new TypeError(`Expected a Date`);
    }

    const periodOrdered = periodData
      .sort((a, b) => b.startYear - a.startYear);
      //.map(period => period.startYear);

    // not cover
    if (gregorianYearNum < periodOrdered[periodOrdered.length - 1].startYear) return null;

    const exactPeriod = periodOrdered.find((period, i) => {
      // earliest (edo begining)
      if (i === periodOrdered.length - 1) return true;

      if(gregorianYearNum > period.startYear)
        return true;
      if(gregorianYearNum === period.startYear && gregorianMonthNum > period.startMonth)
        return true;
      if(gregorianYearNum === period.startYear && gregorianMonthNum === period.startMonth && gregorianDayNum >= period.startDay)
        return true;

      return false;
    });

    /*const foundPeriod = periodData.find(
      period => exactPeriod === period.startYear
    );*/

    const updatedPeriod = Object.assign(
      {
        currentJapaneseYear: gregorianYearNum - exactPeriod.startYear + 1
      },
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
