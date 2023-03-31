// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function frogJump(X, Y, D) {
  /**
   * 1. Get the difference of Y and X
   * 2. Multiply D starting by one until the result is greater than the differnce
   * 3. return the number found in step 2 + X
   */
  // const diff = Y - X
  // let result = 1
  // let jumps = 0;
  // for (let i = 1; ; i++) {
  //     if (result >= diff) break
  //     result = i * D
  //     jumps += 1
  // }

  // const quot = Y % D > 0 ? parseInt(Y / D) : parseInt(Y / D) - 1
  // const remainder = parseInt(Y % D + X) > D && Y % D > X ? 1 : 0
  // console.log(quot, remainder);
  // return quot + remainder
}

console.log(frogJump(10, 85, 30))
// console.log(parseInt(3 999111321 % 7));
