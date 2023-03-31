function diagonalDifference(arr) {
  // Write your code here
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j ++) {
      if (i === j) rightSum += arr[i][j]
      if (j === (arr.length -1) - i) leftSum += arr[i][j]
    }
  }
  return Math.abs(leftSum - rightSum)
}

console.log(diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]));