const countBits = n => {
    // Program Me
      return isNaN(n) || n < 0 
      ? 'Only positive numbers are accepeted'
      : n.toString(2).split('0').join('').length;
  };
console.log(countBits(7));