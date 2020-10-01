const recoverSecret = triplets => {
    let initial = triplets[0];
    for (let i = 1; i < triplets.length; i++) {
        const numOfOccurrence = triplets[i].reduce((s, c) => {
            s += (initial.includes(c) && 1) || 0;
            // console.log(s);
            return s;
        }, 0);
        if(numOfOccurrence) {
            triplets[i].forEach((e, j, a) => {
                if(j !== 0 && !initial.includes(e) && initial.includes(a[j-1])){
                    initial.splice(initial.indexOf(a[j+1]), 0, e);
                } else if(!initial.includes(e) && j === 0) {
                    initial.splice(0, 0, e);
                }
            } );

            // console.log(initial);
            
        }
    }
    return initial.join('');
}

const triplets1 = [
    ['g','t','s'],
    ['c','g','s'],
    ['c','n','a'],
    ['r','a','t'],
    ['o','n','r'],
    ['o','r','a'],
    ['n','g','r'],
    ['a','t','s']
  ]
console.log(recoverSecret(triplets1));
  