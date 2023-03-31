function birthdayCakeCandles(candles) {
  // Write your code here
  let temp = {}
  candles.forEach(element => {
    if (!temp[element]) temp[element] = 1
    else temp[element] += 1
  });

  return Object.values(temp).reduce((a,b) => a > b ? a : b)
}

console.log(birthdayCakeCandles([4,4, 4, 2]));
