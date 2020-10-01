const getIntervals = int => {
    let intervs = [int[0]];
    for(i = 1; i < int.length; i++) {
        intervs.forEach((e,j) => {
            if(int[i][0] >= e[0] && int[i][0] < e[1] && int[i][1] <= e[1]) {
                intervs[j] = e;
            }
            else if(int[i][0] >= e[0] && int[i][0] < e[1] && int[i][1] > e[1]) {
                intervs[j] = [e[0], int[i][1]];
            }
            else if(int[i][0] < e[0] && int[i][1] <= e[1] && int[i][1] >= e[0]) {
                intervs[j] = [int[i][0], e[1]];
            }
            else if(int[i][0] < e[0] && int[i][1] > e[1]) {
                intervs[j] = [int[i][0], int[i][1]];
            }
            else if(int[i][0] > e[1]) {
                !intervs.filter(t => t[0] <= int[i][0] 
                    && t[1] >= int[i][1]).length && intervs.push([int[i][0], int[i][1]]);
            } 
            else if(int[i][1] < e[0]) {
                !intervs.filter(t => t[0] <= int[i][0] 
                    && t[1] >= int[i][1]).length && intervs.push([int[i][0], int[i][1]]);
            } else if(int[i][1] = e[0]) {
                intervs[j] = [int[i][0], e[1]];
            }
        }); 
    }
    return intervs
}

const sumIntervals = int => {
    let intervs = getIntervals(int);
    const sums = getIntervals(intervs).reduce((s, e) => s + (e[1] - e[0]), 0);
    return sums;
  }

const test =  [
    [1,2],
    [6, 10],
    [11, 15]
 ]
 const test1 = [[1,5],[1,5]];
 console.log(sumIntervals(test1));