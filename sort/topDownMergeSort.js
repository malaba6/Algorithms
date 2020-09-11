const less = (a, b) => a < b; //compares a and b

const merge = (a, lo, mid, hi) => {
    let i = lo, j = mid+1;
    let aux = [];
    for(let k = lo; k <= hi; k++) {
        aux[k] = a[k];
    }
    for(let k = lo; k <= hi; k++) {
        if(i > mid) a[k] = aux[j++];
        else if(j > hi) a[k] = aux[i++];
        else if(less(aux[j], aux[i])) a[k] = aux[j++];
        else a[k] = aux[i++];
    }
}
const sort = (a, lo, hi) => {
    if(hi <= lo) return;
    let mid = lo + parseInt((hi - lo)/2);
    sort(a, lo, mid);
    sort(a, mid+1, hi);
    merge(a, lo, mid, hi);
    return a;
}
const mergeSort = (a) => {
    return sort(a, 0, a.length-1);
}

console.log(mergeSort([1,8,4,0,6]));