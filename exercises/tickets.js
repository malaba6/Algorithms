const tickets = peopleInLine => {
    // ...
    let sum = [];
    let gotChange = true;
    for(let i = 0; i < peopleInLine.length; i++){
        const subArr = peopleInLine.slice(0, i);
        if (peopleInLine[i] === 100) {
           if (!(subArr.includes(25) && subArr.includes(50))) return false;
           sum.splice(sum.indexOf(25), 1);
           sum.splice(sum.indexOf(50), 1, 100);
        //    sum.push(100);
        } else if (peopleInLine[i] === 50) {
            console.log(subArr);
            if (!subArr.includes(25)) return false;
            sum.splice(sum.indexOf(25), 1, 50);
            // sum.push(50);
         } else{
            sum.push(25);
        }
    };
    console.log(sum);
    return true;
}
console.log(tickets([25, 25, 50, 50, 50]));