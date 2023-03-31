const longestWord = (str) => {
  const strArr = str.replace(/[^a-zA-Z]/g, ' ').split(' ')

  strArr.sort((a, b) => b.length - a.length) //sort by length
  return strArr.shift() //return the first element
}

console.log(longestWord('The longest word in the dictonary is: hmmm,mmmmmmmmm'))