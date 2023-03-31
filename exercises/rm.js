/**
 * 1) Initialize x,y, and Current direction based on the arguments
 * 
 * 2) Check each instruction if it is an orientation or a movement
 * 
 *    i) if orientation:
 *      a. Based on the rover's direction and it's orientation, determine current direction.
 *         Knowing that I have a finite list of combinations which are:
 *         {NL -> W, NR -> E, EL -> N, ER -> S, SL -> E, SR => W, WL => S, WR -> N}
 *    ii) if Movement:
 *      Based in the current direction
 *      *. if direction is E => Move Right one level(y+1)
 *      *. If direction is S => Move down one Level(x-1)
 *      *. If direction is W => Move Left one step (y-1)
 *      *. If direction is N => Move up one level (x+1)
 * 
 * 2) Repeat step 2 until all letters are over
 *
 */

const getCurrentDirection = (orientDirect) => {
  
  const combinations = {
    'NL': 'W',
    'NR': 'E',
    'EL': 'N',
    'ER': 'S',
    'SL': 'E',
    'SR': 'W',
    'WL': 'S',
    'WR': 'N'
  }
  return combinations[orientDirect]
}

const simplifiedMarsRover = (inputs) => {
  let [position, instructions] = inputs[0];// extract the position and instructions
  position = position.split(' ');
  let [x, y, currentDirection]  = position // extract the current values of x, y and diction from rover's position

  for (let inst of instructions) {
    if (inst !== "M") {// If it's not a movement, then it's an orientation
      currentDirection = getCurrentDirection(currentDirection + inst)
    } else {
      switch(currentDirection) {
        case 'E':
          y = parseInt(y) + 1;
          break;
        case 'S':
          x = parseInt(x) + 1;
          break;
        case 'W':
          y = parseInt(y) + 1;
        default:
          x = parseInt(x) + 1;
      }
    }
  }
  return `${x} ${y} ${currentDirection}`

}

console.log(simplifiedMarsRover([['3 3 N', 'LRRMMLM']]));

