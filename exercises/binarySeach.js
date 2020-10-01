// Assuming the given array is sorted, find the index of the element k in the array
const binSearch = (array, k) => {
    let low = 0; // the first element's index
    let hi = array.length - 1; //last element's index
    while(low <= hi) {
        let mid = parseInt(low + (hi - low) / 2); // the middle of low an hi
        if(k < array[mid]) hi = mid - 1; // Move the hi point
        else if (k > array[mid]) low = mid + 1; //Move the low point
        else return mid; // If k = mid
    }

    return -1;

}

const bruteForce = (array, k) => {
    for(i = 0; i < array.length; i++) {
        if(array[i] === k) return i
    }
    return -1;
}

console.log(binSearch([1,2,5,7,8,10,20, 21,34,35,36,37,38,39,43,44,45,46,47,49,1,2,5,7,8,10,20, 21,34,35,36,37,38,39,43,44,45,46,47,49], 98));

// const a = [1,2,3,4,5];
// console.log(a.slice(3,));