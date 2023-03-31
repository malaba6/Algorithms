function plusMinus(arr) {
  // Write your code here
  let positive = 0, negative = 0, zero = 0

  arr.forEach(e => {
    if (e > 0) positive += 1
    else if (e < 0) negative += 1
    else zero += 1
  });
  positive = (positive/arr.length).toFixed(6)
  negative = (negative/arr.length).toFixed(6)
  zero = (zero/arr.length).toFixed(6)

  console.log(positive)
  console.log(negative)
  console.log(zero)
  const closure = () => {
    const obj = arr.reduce((a,b) => {
      if (b > 0) a.pos += 1
      else if (b < 0) a.neg += 1
      else a.zero += 1
      return a
    }, {pos: 0, neg: 0, zero: 0})
    return Object.values(obj).map((a) => (a/arr.length).toFixed(6))
  }

  return closure
}

// plusMinus([1, 1,0,-1, -1])
const closureResult = plusMinus([1, 1,0,-1, -1])
console.log(closureResult())
