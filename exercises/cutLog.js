// // Your new function as given to you by me, your boss.
// const sumTwo = (p, n) => {
//     for(j =1; j <= n; j++) {    
//         for(i = 1; i <= j; i++) {
//             if(i + j === n && p[i] + p[j] > p[n]) {
//                 console.log(p[i], p[j]);
//                 return p[i] + p[j];
//             }
//         }
//     }
// }
// const cutLog = (p, n) => {
//     // Some array to store calculated values
//     let temp = {};
    
//     // for (j = 1; j <= n; j++) {
//     //     for (i = 1; i <= j; i++) { // Two nested loops = Θ(n^2)
//     //         // Magic

//     //     }
//     // }
//     for(j =1; j <= n; j++) {    
//         for(i = 1; i <= j; i++) {
//             if(i + j === n && p[i] + p[j] > p[n]) {
//                 console.log(p[i], p[j]);
//                 return p[i] + p[j];
//             }
//         }
//     }

//     for(j = 1; j <= n; j++) {    
//         for(i = 1; i <= j; i++) {
//             // if(i + j === n && p[i] + p[j] > p[n]) {
//             //     console.log(p[i], p[j]);
//             //     return p[i] + p[j];
//             // }
//             // if(temp[p-i-j] !== undefined) 
//             temp[j] = [i, j];
//         }
//     }
//     // Good luck intern!
//     console.log(temp);
//     return p[n];
// }

// const p = [  0,   1,   5,   8,   9,  10,  17,  17,  20,  24, // 0X's
//           30,  32,  35,  39,  43,  43,  45,  49,  50,  54, // 1X's
//           57,  60,  65,  68,  70,  74,  80,  81,  84,  85, // 2X's
//           87,  91,  95,  99, 101, 104, 107, 112, 115, 116, // 3X's
//          119, 123];

// console.log(cutLog(p, 35));

for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i));
}