type Period = {
  startYear: number;
  startMonth: number;
  startDay: number;
  names: {
      kanji: string;
      hiragana: string;
      english: string;
  };
}

type PeriodAndExactYear = Period & {
  currentJapaneseYear: Number
} | null;

type YearRange = {
  startYear: number,
  endYear: number | null
} | null;