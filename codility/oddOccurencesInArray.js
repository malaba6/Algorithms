function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const obj = A.reduce((data, e) => {
        data[e] = (data[e] || 0) + 1;
        return data;
    }, {});
    return parseInt(Object.entries(obj).filter(e => e.includes(1))[0][0]);
}
console.log(solution([9,3,9,3,9,7,9]));