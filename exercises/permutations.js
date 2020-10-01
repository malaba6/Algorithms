const permutations = string => {
  const sArr = string.split('');
  let temp = {};
  let result = [];
  let k = [];

  for(i = 0; i < sArr.length; i++) {
    let tmp = [...sArr];

    if (tmp.length === 1) return tmp;

    if(!temp[i]) {
      tmp.splice(i, 1);
      tmp = tmp.map((w,d,ar) => { // Divide the string into an array based on the strings initials
        let index = [...ar];
        index.splice(d, 1);
        return w + index.join('');
      });

      k = [...tmp]; // Hold all the combinations

      // Iterate over the string to find all permutations
      tmp.forEach(f => {
        let other = f.split('');
        let p = 0;
        while(p < f.length - 1){
          const u = other.splice(1, 1);
          other = other.join('').concat(u);
          k.push(other);
          other = other.split('');
          p += 1;
        }
      });

      temp[sArr[i]] = k; // temp holds all permutations related to a specific initial
    }
  }

  for(el in temp) { // filter elements from temp and return the resulting array
    temp[el] = temp[el].map(e => {
      const x = el.concat(e);
      !result.includes(x) && result.push(x);
      return x;
    });
  }

  return result.sort();
}

console.log(permutations('abcdef'));