const exch = (a, i, j) => {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

const less = (a, b) => a < b; //compares a and b

const insertionSort = (a) => {
    const N = a.length;
    let h = 1;
    while (h < N/3) h = 3*h + 1;
    while(h >= 1) {
        for(let i = h; i < N; i++) {
            for(let j = i; j >= h && less(a[j], a[j-h]); j -= h) {
                exch(a, j, j-h);
            }
            
        }
        h = h/3;
    }
    
    return a;
}

console.log(insertionSort('malaba'.split('')));
