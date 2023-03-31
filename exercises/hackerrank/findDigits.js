function findDigits(n) {
  const nString = n.toString()
  let count = 0
  for (let digit of nString) {
    if (n % parseInt(digit) === 0) count++
  }
  return count

}

console.log(findDigits(10))