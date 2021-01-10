type Period = {
  startYear: number;
  startMonth: number;
  startDay: number;
  names: {
    kanji: string;
    hiragana: string;
    english: string;
  };
};

type PeriodAndExactYear =
  | Period & {
      currentJapaneseYear: number;
    }
  | undefined;

type YearRange = {
  startYear: number;
  endYear?: number;
};

type JapaneseYearFunction = (gregorianDate: Date) => PeriodAndExactYear;
type GregorianYearRangeFunction = (
  japanesePeriod: string
) => YearRange | undefined;
