const alphabetPosition = text => {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return text.split('').filter(e => e.match(/[A-Za-z]/))
    .map((e, i) => alphabets.indexOf(e.toLowerCase()) + 1 ).join(' ');
}

// function promise() {
//   return Promise.reject()
// }

// promise()
//   .then(function () {
//     console.log('Then 1')
//   })

//   .catch(function () {
//     console.log('Catch 1')
//   })

//   .then(function () {
//     console.log('Then 2')
//   })

//   .catch(function () {
//     console.log('Catch 2')
//   })

//   .then(function () {
//     console.log('Then 3')
//   })
// const a = [8, 2]

// console.log(a.pop(2))
// console.log(a)



