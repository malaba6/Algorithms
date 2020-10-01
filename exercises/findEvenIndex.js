function findEvenIndex(arr){
  for(let i = 0; i < arr.length; i++) {
    if(i === 0) {
        const index = arr.slice(1).length && arr.slice(1).reduce((t, c) => t + c);
        if (index === 0) return 0;
    }
    const sumLeft = arr.slice(0,i).length && arr.slice(0,i).reduce((t, c) => t + c);
    const sumRight = arr.slice(i+1).length && arr.slice(i+1).reduce((t, c) => t + c);
    if (sumRight === sumLeft) return i;
  }
  return -1;
}
console.log(findEvenIndex([1]));