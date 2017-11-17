# brier-score
Function to calculate brier score

## Install

```
$ npm install brier-score --save
```

## Example

```
const { brierScore } = require('brier-score');
// ES2015 modules
import { brierScore } from 'brier-score';

const score = brierScore({
	probability: 0.7,
	outcome: 1
});

console.log(score)
// 0.09...
```
