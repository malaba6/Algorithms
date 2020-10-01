function zeros (n) {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
      fact *= i;
    }
    let trails = fact.toString().length - fact.toString().split('').reverse().map(e => e === '0' ? ' ' : e).join('').trim().length;
    console.log(fact);
    return trails;
  }

  zeros(30);