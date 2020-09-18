const exch = (a, i, j) => {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

const sort = (a) => {
    const N = a.length;
    for(let k = N/2; k > 1; k--) {
        sink(a, k, N);
    }
    while(N > 1) {
        exch(a, 1, N--);
        sink(a, 1, N);
    }
    return a;
}

const heapSort = (a) => {
    return sort(a);
}

console.log(mergeSort([1,8,4,0,6]));