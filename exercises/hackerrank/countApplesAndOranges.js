function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let fallenApples = 0, fallenOranges = 0
  apples.forEach(el => {
    if (el + a >= s && el + a <= t) {
      fallenApples += 1
    }
  })
  oranges.forEach(el => {
    if (b + el >= s && b + el <= t) {
      fallenOranges += 1
    }
  })
  
  console.log(fallenApples)
  console.log(fallenOranges)
}

console.log(countApplesAndOranges(7, 10, 4, 12, [2,3, -4], [3, -2, -4]));
