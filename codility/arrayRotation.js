// function rotation(A, K) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const L = A.length;
//     if (L === K) return A;

//     let count = K;
//     let temp = {};
//     for(let i = 0; i < L; i++){
//         temp[i] = A[i];  
//     } 
//     while (count > 0) {
//         let temp2 = {};
//         for(let i = 0; i < L; i++){
//             if(i === 0) temp2[i] = temp[L-1];
//             else temp2[i] = temp[i-1];  
//         }
//         temp = temp2;  
//       count -= 1;
//     }
//     return Object.values(temp);
// }

function solution(A, K) {
    // 1) loop through the array A
    //      i) if el is last:
    //         Move el to index 0
    //      ii) else
    //          move el to index + 1
    // 2) repeat K times

    const length = A.length
    let rotatedA = []
    let tempA = A
    let counter = 0
    if (K === length) return A

    while(counter < K) {
        for (let i = 0; i < A.length; i++) {
            if (i === length - 1) {
                rotatedA[0] = tempA[i]
            } else {
                rotatedA[i + 1] = tempA[i]
            }
        }
        tempA = rotatedA
        rotatedA = []
        counter += 1
    }
    
    return tempA
}

console.log(solution([3, 8, 9, 7, 6], 5));