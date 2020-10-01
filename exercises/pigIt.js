const pigIt = (str) => str.split(' ').map(e => e.toUpperCase() !== e.toLowerCase() ? e.slice(1).concat(e[0], 'ay'): e).join(' ');

console.log(pigIt('Hello world !'));