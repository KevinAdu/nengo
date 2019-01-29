Nengo
=========

[![Build Status](https://travis-ci.org/KevinAdu/nengo.svg?branch=master)](https://travis-ci.org/KevinAdu/nengo)
[![Coverage Status](https://coveralls.io/repos/github/KevinAdu/nengo/badge.svg?branch=master)](https://coveralls.io/github/KevinAdu/nengo?branch=master)

A library that converts Gregorian calendar dates into the traditional Japanese calendar years.

## Installation

  `npm install nengo-full`

## Usage

Currently two functions are provided by nengo as shown below:

```
const { japaneseYear, gregorianYearRange } = require('nengo');
```

To convert the Gregorian date into the Japanese calendar, use the `japaneseYear` function.
The output should be an object containing data related to the Japanese calendar year:

```js
japaneseYear(new Date(1989, 2));
{
  "startYear": 1989,
  "names": ["Heisei", "平成", "へいせい"],
  "currentJapaneseYear": 0
}
```

To get information about a particular Japanese period in Gregorian calendar year format, use the `gregorianYearRange` function.
The output should be an object containing data related to the :

```js
gregorianYearRange("昭和");
{
  startYear: 1926,
  endYear: 1988
}
```

## Tests

To run the test suite, run the command:

```bash
npm test
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using the following command:

```bash
npm run-script lint
```
