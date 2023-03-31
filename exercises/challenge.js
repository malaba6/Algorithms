const getCurrentPosition = (position) => {
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
  return combinations[position]
}

const simpleMarsRover = (position, instructions) => {
  const coordinates = position.split(' ');

  let [x, y, currentPosition] = coordinates;
  for (let inst of instructions) {
    if (inst !== 'M') {
      currentPosition = getCurrentPosition(currentPosition + inst)
    } else {
      switch (currentPosition){
        case 'E':
          x = parseInt(x) + 1
          break;
        case 'N': 
          y = parseInt(y) + 1
          break
        case 'S':
          y = parseInt(y) - 1
          break
        default:
          x = parseInt(x) - 1

      }
    }
  }
  return [x, y, currentPosition]
}

console.log(simpleMarsRover("3 3 N", "LRRMMLM"))