const alphabetPosition = text => {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return text.split('').filter(e => e.match(/[A-Za-z]/))
    .map((e, i) => alphabets.indexOf(e.toLowerCase()) + 1 ).join(' ');
}

  console.log(alphabetPosition('#,k%fe*d'));