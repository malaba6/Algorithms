function BracketMatcher(str) { 

  // code goes here  
  const tempObj = {};
  let offset = 1;
  for(let i = 0; i < str.length; i++) {
    let partner = 0;
    if(str[i] === '(') {
      tempObj[i] = null;
      for(j = i + 1; j < str.length; j++) {
        if(str[j] === '(') {
          tempObj[j] = null;
          partner += 1;
        }
        else if(str[j] === ')' && partner !== 0) {
          partner -= 1;
        }
        else if(str[j] === ')' && partner === 0) {
          console.log(i, j);
          tempObj[i] = j;
          break;
        }
      }
    }if (str[i] === ')' && partner === 0) {
      tempObj[i] = null;
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
