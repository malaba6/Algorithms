// const binSearch = (array, k) => {
//     let low = 0; // the first element's index
//     let hi = array.length - 1; //last element's index
//     while(low <= hi) {
//         let mid = parseInt(low + (hi - low) / 2); // the middle of low an hi
//         if(k < array[mid]) hi = mid - 1; // Move the hi point
//         else if (k > array[mid]) low = mid + 1; //Move the low point
//         else return true; // If k = mid
//     }
//     return false;
// }

// const bitonic = (a, k) => {
//     let lo1 = 0;
//     let lo2 = a.length;
//     let hi = parseInt(lo2 / 2 + 1);
//     if (binSearch(a.slice(lo1, hi), k)) return true;
//     return binSearch(a.slice(hi, lo2), k);
// }

// console.log(bitonic([1,2,5,7,6,3,0], 2));

const check  = () => {throw new Error('Oh! its an error'); };
const hello = (name = check()) => console.log(`hello_${name}`);
const value = hello(hello);
hello(value);