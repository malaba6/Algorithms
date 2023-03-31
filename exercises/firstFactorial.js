const firstfactorial = (num, memo = {}) => {
  if (num in memo) return memo[num]
  if (num <= 1) return 1
  memo[num] = num * firstfactorial(num - 1)
  // memo[num] = memoized
  return memo[num]
}

console.log(firstfactorial(4))