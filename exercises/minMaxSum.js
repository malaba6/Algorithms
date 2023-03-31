function miniMaxSum(arr) {
  // Write your code here
  const max = arr.reduce((a, b) => a > b ? a : b)
  const min = arr.reduce((a, b) => a < b ? a : b)
  let sumMax = 0
  let sumMini = 0

  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== min) sumMax += arr[i]
    if(arr[i] !== max) sumMini += arr[i] 
    if(max === min && i !== arr.length - 1) {
      sumMax += arr[i]
      sumMini += arr[i]
    }
  }

  console.log(sumMini + '  ' + sumMax);

}
miniMaxSum([1, 2, 3, 4, 5])