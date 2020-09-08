function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const bin = N.toString(2).split('').map(Number);
    const L = bin.length;
    let temp = [];

    for(let i = 0; i < L; i++) {
      if(bin[i] === 1 && bin[i+1] === 0){
        let count = 0;
        for(let j = i+1; j < L; j++) {
          if (bin[j] === 1 && bin[j-1] === 0) {
            temp.push(count);
            break;
          }
          count += 1;
        }
      }  
    }
    return temp.length ? temp.reduce((a,b) => a > b ? a : b) : 0;
}

console.log(solution(74901729));
