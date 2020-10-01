const numOffices = (grid) => {
    let count = 0;
    let temp = [];
    for(let i = 0; i < grid.length; i++) {
        const a = grid[i];
        temp[i] = [];
        for(let j = 0; j < a.length; j++) {
            temp[i].push(a[j]);
        }
        for(let j = 2; j < a.length; j++) {
            temp[i].push() 
            if(a[j] === 0 && a[j-1] === 1 && a[j-2] === 1) count++;
            else if(j === a.length - 1 && a[j] === 1 && a[j - 1] === 1) count++;
        }
    }
}