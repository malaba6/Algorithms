function orderWeight(strng) {
    // your code
    const t = strng.split(' ').reduce((e, i) => {
        e[i] = i.split('').map(Number).reduce((m, n) => m + n);
        return e;
    }, {});

    const tRev = Object.keys(t).reduce((m, c) =>  {
        m[t[c]] = c;
        return m
    }, {});
    const s =  Object.keys(tRev);

    const sorted = Object.keys(tRev).map(Number).map(e => tRev[e]).join(' ');
    console.log(t);
}

orderWeight('103 123 321 4444 99 2000')