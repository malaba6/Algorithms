const canSum = (targetSum, numbers, memo={}) => {
  if (targetSum in  memo) return memo[targetSum]
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true
    }
  }
  memo[targetSum] = false;
  return false;
} 

const howSum = (targetSum, numbers, memo={}) => {
  if (targetSum in  memo) return memo[targetSum]
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum] 
    }
  }
  memo[targetSum] = null;
  return null;
}

const shortSum = (targetSum, numbers, memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombin = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = shortSum(remainder, numbers, memo);
    if (remainderResult) {
      const combinations = [...remainderResult, num];
      memo[targetSum] = combinations;
      if (!shortestCombin || combinations.length < shortestCombin.length) {
        shortestCombin = combinations;
      }
    }
  }
  if(!shortestCombin) memo[targetSum] = null;
  return shortestCombin;
}

const canConstruct = (target, strings, memo={})  => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let str of strings) {
    if (target.indexOf(str) !== -1) {
      const substring1 = target.slice(0, target.indexOf(str));
      const substring2 = target.slice(target.indexOf(str) + str.length);
      if (canConstruct(substring1, strings, memo) === true && canConstruct(substring2, strings, memo) === true) {
        memo[target] = true;
        return true
      }
    }
  }
  memo[target] = false;
  return false;
}

// console.log(canSum(7, [3,4,5,7,9]));
// console.log(canSum(8, [2,3,5]));
// console.log(canSum(300, [7,14]));

// console.log(shortSum(7, [3,4,5,7]));
// console.log(shortSum(8, [2,3,5]));
// console.log(shortSum(100, [1,2,5,25]));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']));
// console.log(canConstruct('me', ['m','z', 'e']));
