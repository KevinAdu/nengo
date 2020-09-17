import periodData from './periods.json';

  /**
   * Converts Gregorian calendar year to Japanese calendar year
   */
  export const japaneseYear = (gregorianDate: Date): PeriodAndExactYear => {
    let gregorianYear: number;
    let gregorianMonth: number;
    let gregorianDay: number;

    gregorianYear = gregorianDate.getFullYear();
    gregorianMonth = gregorianDate.getMonth() + 1;
    gregorianDay = gregorianDate.getDate();

    const periodsOrdered: Period[] = periodData.sort((a, b) => b.startYear - a.startYear);

    if (gregorianYear < periodsOrdered[periodsOrdered.length - 1].startYear)
      return null;

    const exactPeriod: Period | undefined = periodsOrdered.find((period: Period, i) => {
      if (i === periodsOrdered.length - 1) return true;
      if (gregorianYear > period.startYear) return true;
      if (
        gregorianYear === period.startYear &&
        gregorianMonth > period.startMonth
      ) {
        return true;
      }
      if (
        gregorianYear === period.startYear &&
        gregorianMonth === period.startMonth &&
        gregorianDay >= period.startDay
      ) {
        return true;
      }

      return false;
    });

    let updatedPeriod = null; 
    
    if (exactPeriod) {
      updatedPeriod = {
        currentJapaneseYear: gregorianYear - exactPeriod.startYear + 1,
        ...exactPeriod
      }
    }

    return updatedPeriod;
  }

  /**
   * Converts Japanese calendar year to Gregorian year range
   * @param {String} year
   * @return {object}
   */
  export const gregorianYearRange = (japanesePeriod: string): YearRange => {
    let yearRange: YearRange = null;
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
