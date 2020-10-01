function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const obj = A.reduce((data, e) => {
        data[e] = (data[e] || 0) + 1;
        return data;
    }, {});
    for(let e of Object.keys(obj)) {
        if(obj[e] % 2 !== 0) return parseInt(e);
    }
}
console.log(solution([9,3,9,3,9,7,9]));