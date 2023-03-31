function staircase(n) {
  // Write your code here
  for( let i = 0; i < n; i++) {

    console.log(Array.from({length: n}).map((e,index) => {
      if (index > i) return ' '
      return '#'
    }).reverse().join(''));
  }
}

console.log(staircase(4))