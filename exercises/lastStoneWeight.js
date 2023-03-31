const largest = (a) => {
  let l = 0;
  for(const e of a) {
    e > l
    l = e
  }
  return l
}
const lastStoneWeight = (weights) => {
  const largestEl = largest(weights);
  const secondLargest = largest(weights.splice(largestEl))

  const diff = largestEl - secondLargest
  console.log(weights.indexOf(secondLargest));
  const newArr = weights.splice(secondLargest)
  
  console.log(largestEl, secondLargest, diff, newArr)
}

lastStoneWeight([1,2,3,4,5,6,7,7])