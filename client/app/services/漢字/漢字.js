import jlptn5 from './data/jlptn5.js';
import jlptn4 from './data/jlptn4.js';
import digits from './data/digits.js';

let データ = [];

// JLPT5
for (var a in jlptn5) {
  データ.push(jlptn5[a])
}

// JLPT4
for (var b in jlptn4) {
  データ.push(jlptn4[a])
}

// Digits
for (var c in digits) {
  データ.push(digits[c])
}

module.exports = データ;
