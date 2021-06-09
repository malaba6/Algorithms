function BracketMatcher(str) { 

  // code goes here  
  const tempObj = {};
  let offset = 1;
  for(let i = 0; i < str.length; i + offset) {
    if(str[i] === '(') {
      tempObj[i] = null;
      let partner = 0;
      for(j = i + 1; j < str.length; j++) {
        if(str[j] === '(') {
          tempObj[j] = null;
          partner += 1;
        }
        else if(str[j] === ')' && partner !== 0) {
          partner -= 1;
        }
        else if(str[j] === ')' && partner === 0) {
          tempObj[i] = j;
        }
      }
    }
  }
  console.log('- ', tempObj)
  for (let key of Object.keys(tempObj)) {
    if (!tempObj[key]) return 0
  }
  return 1; 

}
   
// keep this function call here 
console.log(BracketMatcher("(coder)(byte))"));