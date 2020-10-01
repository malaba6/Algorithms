const tribonacci = (signature,n) => {
    if (n === 0) return [];
    if(n < 3) return signature.slice(0, n);
    for(let i = 2; i < n - 1; i++) {
        console.log(signature[i]);
        signature.push(signature[i] + signature[i-1] + signature[i-2]);
    }
    return signature;
}

console.log(tribonacci([1,0,0], 5));