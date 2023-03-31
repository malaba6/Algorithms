const jumpToIndex = (start, arr) => {
  return arr.findIndex((e, i) => i > start && e === 0)
}

const lastZeroIndex = (start, arr) => {
  let index = -1
  let skips = 0
  for (let i = 0; i < arr.length; i++) {
    if (skips > 1) return index
    if( i > start && arr[i] === 1) {
      console.log('****', index, );
      skips += 1
      index = i
      break
    } else if (i > start && i === arr.length-1) index = arr.length
  }
  return index
}

function jumpingOnClouds(c) {
  // Write your code here
  let jumps = 0;
  let toIndex = 0;
  label: for (let i = 0; i < c.length; i = toIndex) {
    label1: for (let j = i + 1; j < c.length; j++) {
      if (c[j] === 1) continue label1
      if (j !== 0 && c[j - 1] === 1) {
        jumps += 1
        toIndex = j
        continue label
      } else if (j !== c.length - 1 && c[j + 1] === 0) {
        jumps += 1
        toIndex = j + 1
        continue label
      } else if (j !== c.length - 1 && c[j + 1] === 1) {
        jumps += 1
        toIndex = j
        continue label
      }
      jumps += 1
      toIndex = j
      continue label
    }
    toIndex += 1
  }
  return jumps
}

console.log(jumpingOnClouds([0, 1, 0, 0,0, 1, 0]))
