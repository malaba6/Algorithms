const sumDigPow = (a, b) => {
    let n = [];
    for (let i = a; i <= b; i++) {
        i.toString().split('').map(Number).map((e,i) => Math.pow(e, i+1))
          .reduce((t, c) => t + c) === i && n.push(i);
    }
    return n;
}

console.log(sumDigPow(0,1000));