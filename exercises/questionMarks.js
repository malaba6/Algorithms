function QuestionsMarks(str) { 

  // code goes here  
  const temp = {sum: 0}
  let count = 0
  for (let char of str) {
    if (!isNaN(char)) {
      temp['sum'] += char
      for (let i = str.indexOf(char) + 1; i < str.length; i++) {
        if (!isNaN(str[i])) break
        if (str[i] === '?') count++
      }
      if (count === 3) return true
    }
  }
  return false

}
   
// keep this function call here 
console.log(QuestionsMarks("arrb6???4xxbl5???eee5"));