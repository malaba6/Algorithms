const exch = (a, i, j) => {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

export default exch;
