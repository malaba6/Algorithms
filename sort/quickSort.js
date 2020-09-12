const less = (a, b) => a < b; //compares a and b

const exch = (a, i, j) => {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

const partition = (a, lo, hi) => {
    let i = lo, j = hi+1;
    const v = a[lo];
    while(true) {
        while(less(a[++i], v)) if(i === hi) break;
        while(less(v, a[--j])) if(j === lo) break;
        if(i >= j) break;
        exch(a, i, j);
    }
    exch(a, lo, j);
    return j;
}

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i+1);
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
const sort = (a, lo, hi) => {
    if(hi <= lo) return;
    let j = partition(a, lo, hi);
    sort(a, lo, j-1);
    sort(a, j+1, hi);
    return a;
}
const quickSort = (a) => {  
    return sort(shuffle(a), 0, a.length-1);
}

console.log(quickSort([1,8,4,0,6]));