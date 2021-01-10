import periodData from "./periods.json";

/**
 * Converts Gregorian calendar year to Japanese calendar year
 */
export const japaneseYear: JapaneseYearFunction = gregorianDate => {
  const gregorianYear = gregorianDate.getFullYear();
  const gregorianMonth = gregorianDate.getMonth() + 1;
  const gregorianDay = gregorianDate.getDate();

  const periodsOrdered: Period[] = periodData.sort(
    (a, b) => b.startYear - a.startYear
  );

  if (gregorianYear < periodsOrdered[periodsOrdered.length - 1].startYear)
    return undefined;

  const exactPeriod: Period | undefined = periodsOrdered.find(
    (period: Period, i) => {
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
    }
  );

  let updatedPeriod;

  if (exactPeriod) {
    updatedPeriod = {
      currentJapaneseYear: gregorianYear - exactPeriod.startYear + 1,
      ...exactPeriod
    };
  }

  return updatedPeriod;
};

/**
 * Converts Japanese calendar year to Gregorian year range
 * @param {String} year
 * @return {YearRange | undefined}
 */
export const gregorianYearRange: GregorianYearRangeFunction = (
  japanesePeriod
): YearRange | undefined => {
  let yearRange: YearRange | undefined = undefined;
  const foundPeriod = periodData.find(
    period =>
      period.names.kanji === japanesePeriod ||
      period.names.hiragana === japanesePeriod ||
      period.names.english === japanesePeriod
  );

  if (foundPeriod) {
    const previousPeriod = periodData[periodData.indexOf(foundPeriod) - 1];
    const previousYear = previousPeriod && previousPeriod.startYear - 1;

    yearRange = {
      startYear: foundPeriod.startYear,
      endYear: previousYear
    };
  }

  return yearRange;
};
