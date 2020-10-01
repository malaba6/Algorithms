const rgb = (r, g, b) => [r, g, b].map(e => {
    if (e < 0) e = 0;
    else if ( e > 255) e = 255;
    return ('0' + e.toString(16)).slice(-2);
}).join('').toUpperCase();

console.log(rgb(-148, 0, 211));