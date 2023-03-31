function equalizeArray(arr) {
  // Write your code here
  const temp = arr.reduce((a, b, i) => {
    a[b] = (a[b] || 0) + 1
    return a
  },{})
  const max = Object.values(temp).reduce((a, b) => a > b ? a : b)
  return arr.length - max
}

console.log(equalizeArray([1,2,2,3]));