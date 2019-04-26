Nengo
=========

[![Build Status](https://travis-ci.org/KevinAdu/nengo.svg?branch=master)](https://travis-ci.org/KevinAdu/nengo)
[![Coverage Status](https://coveralls.io/repos/github/KevinAdu/nengo/badge.svg?branch=master)](https://coveralls.io/github/KevinAdu/nengo?branch=master)
[![Node version](https://img.shields.io/node/v/nengo.svg?style=flat)](http://nodejs.org/download/)
[![HitCount](http://hits.dwyl.io/kevinadu/kevinadu/nengo.svg)](http://hits.dwyl.io/kevinadu/kevinadu/nengo)
![dependencies](https://img.shields.io/david/kevinadu/nengo.svg?style=flat)

A library that converts Gregorian calendar years into the traditional Japanese calendar years.

## Installation

  `npm install nengo`

## Usage

Currently two functions are provided by nengo as shown below:

```
const { japaneseYear, gregorianYearRange } = require('nengo');
```

To convert the Gregorian year into the Japanese calendar, use the `japaneseYear` function.
The output should be an object containing data related to the Japanese calendar year:

```js
japaneseYear(new Date(2019, 0))

// {
//   "startYear": 2019,
//   "names": {
//     "kanji": "令和",
//     "hiragana": "れいわ",
//     "english": "Reiwa"
//   }
// }
```

You can also obtain the start and end year of a particular Japanese period in Gregorian calendar year format, using the `gregorianYearRange` function.

```js
gregorianYearRange("平成");

// {
//   startYear: 1989,
//   endYear: 2018
// }
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