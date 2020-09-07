import less from './less';

const isSorted = (a) => {
    for(let i = 1; i < a.length; i++) {
        if ( less(a[i], a[i-1])) return false;
    }
    return true;
}

export default isSorted;