function TreeConstructor(strArr) { 

  // code goes here  
  let tempObj = {};
  strArr.forEach(e => {
    const objChild = `${e[1]}:c`;
    const objParent = `${e[3]}:p`;
    const relationChild = [];
    strArr.forEach(el => {
      if (el[1] === e[1]) {
        relationChild.push(el[3]);
      }
    })
    console.log('- ', relationChild)
    const relationParent = [];
    strArr.filter(el => {
      if (el[3] === e[3]) {
        relationParent.push(el[1])
      }
    })
    tempObj[objChild] = relationChild;
    tempObj[objParent] = relationParent;
  })
  for(let key of Object.keys(tempObj)) {
    if(key.includes('c') && tempObj[key].length > 1) {
      return false;
    }
    else if(key.includes('p') && tempObj[key].length > 2) {
      return false;
    }
  }
  return true; 

}
   
// keep this function call here 
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));