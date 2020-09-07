const exch = (a, i, j) => {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

const less = (a, b) => a < b; //compares a and b

const isSorted = (a) => {
    for(let i = 1; i < a.length; i++) {
        if ( less(a[i], a[i-1])) return false;
    }
    return true;
}

const selectionSort = (a) => {
    const N = a.length;
    if(isSorted(a)) return a;

    for(let i = 0; i < N; i++) {
        let min = i;
        for(let j = i+1; j < N; j++) {
            if (less(a[j], a[min])) min = j;
        }
        exch(a, i, min);
    }
    return a;
}

console.log(selectionSort([5,3,9,0,7]));
