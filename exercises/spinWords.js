const spinWords = words => words.split(' ')
  .map(e => e.length >= 5 ? e.split('').reverse().join('') : e).join(' ');

console.log(spinWord('lamou a vi a mwen'));