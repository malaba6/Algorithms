const findIndex = (start, arr) => {
  console.log('****', start, arr);
  const index =  arr.findIndex((a, i) => i > start && a === '1') 
  return index !== -1 ? index : arr.length
}

function SearchingChallenge(strArr) { 

  // code goes here  
  /**
   * 1. Loop through the array, when not A[0] and A[x][i] === 0,
   * 2. check if element at right is 0 if yes, increment the counter, else continue
   * 3. Also check if A[x-1][i] === 0, if yes increment, else continue
   */
  let holes = 0;
  const horizontal = {}
  const vertical = {}


  for (let i = 0; i < strArr.length; i++) {
    console.log('+++', strArr[i], horizontal, vertical);
    // if (i !== 0) {
      for (let j = 0; j < strArr[i].length; j++) {
        if (strArr[i][j] === '0') {
          if (i !== 0 && strArr[i-1][j] === '0' && !vertical[j] && j !== 0 && strArr[i][j-1] !== '0' ) {
            console.log('^^^', j, vertical);
            vertical[j] = 'j'
            holes += 1
          }
          if (j !== strArr[i].length-1 && strArr[i][j+1] === '0' && !horizontal[i]) {
            console.log('---', j, horizontal);
            horizontal[i] = 'i' 
            holes += 1
          }
        }
      // }
    }
  }
  return holes; 

}
   
// keep this function call here 
console.log(SearchingChallenge(["0011", "0010"]));