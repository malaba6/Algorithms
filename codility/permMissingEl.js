function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const n = A.length + 1;
    const sum = A.reduce((a,b) => a + b);
    const res = parseInt(n * (n + 1) / 2);
    return res - sum;
}

console.log(solution([2,3,1,5]));