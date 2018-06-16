Nengo
=========

[![Build Status](https://travis-ci.org/KevinAdu/nengo.svg?branch=master)](https://travis-ci.org/KevinAdu/nengo)
[![Coverage Status](https://coveralls.io/repos/github/KevinAdu/nengo/badge.svg?branch=master)](https://coveralls.io/github/KevinAdu/nengo?branch=master)

A library that converts Gregorian calendar years into the traditional Japanese calendar years.

## Installation

  `npm install nengo`

## Usage

```
const yearConverter = require('nengo');
yearConverter(1989)
```

Output should be an object containing the data related the year:

```
{
  "periodName": "Heisei",
  "periodNameKanji": "平成",
  "periodNameKana": "へいせい"
}
```

## Tests

To run the test suite, run the command:

```bash
npm test
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.