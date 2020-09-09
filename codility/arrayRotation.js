function rotation(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const L = A.length;
    if (L === K) return A;

    let count = K;
    let temp = {};
    for(let i = 0; i < L; i++){
        temp[i] = A[i];  
    } 
    while (count > 0) {
        let temp2 = {};
        for(let i = 0; i < L; i++){
            if(i === 0) temp2[i] = temp[L-1];
            else temp2[i] = temp[i-1];  
        }
        temp = temp2;  
      count -= 1;
    }
    return Object.values(temp);
}

console.log(rotation([3, 8, 9, 7, 6], 5));