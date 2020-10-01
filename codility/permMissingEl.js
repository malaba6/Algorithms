function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const n = A.length + 1;
    let sum = 0;
    for(let e of A) {
        sum += e;
    }
    const res = parseInt(n * (n + 1) / 2);
    return res - sum;
}

console.log(solution([]));