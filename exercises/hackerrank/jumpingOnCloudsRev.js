function jumpingOnClouds(c, k) {
  let energy = 100
  const length = c.length
  for (let i = 0;; i = i + k >= length ? i + k - length : i + k) {
    const cloud = ((i + k) >= length) ? ((i + k) - length) : i + k;
    if (c[cloud] === 1) {
      energy -= 3
    } else {
      energy -= 1
    }
    if (cloud === 0) break
  }
  return energy
}

console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3))