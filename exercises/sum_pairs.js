const sum_pairs = (ints, s) => {
    const temp = {};
    for(let i = 0; i < ints.length; i++) {
        if(temp[s - ints[i]] !== undefined) {
            return [s - ints[i], temp[s - ints[i]]]
        }
        temp[ints[i]] = s - ints[i];
    }
}

console.log(sum_pairs([0,2,0], 0));