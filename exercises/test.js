// function FizzBuzz(num) { 

//   // code goes here  
//   const outputArr = [];
//   for(let i = 1; i < num + 1; i++) {
//     let holder = '';
//     if (i % 3 === 0 && i % 5 === 0) {
//       holder = 'FizzBuzz'
//     } else if (i % 3 === 0) {
//       holder = 'Fizz'
//     } else if (i % 5 === 0) {
//       holder = 'Buzz' 
//     } else {
//       holder = i;
//     }
//     outputArr.push(holder);
//     // console.log('----- ', outputArr)
//   }
//   return outputArr.join(' '); 

// }
   
// // keep this function call here 
// console.log(FizzBuzz(3));
// console.log(isNaN('0'));
// function even(n) {
//   return !(n % 2);
// }
// function EvenPairs(str) { 

//   // code goes here  
//     return str
//         .match(/\d+/g)
//         .filter(s => s.length > 1)
//         .some(s => 
//             [...s].some((c => v => even(v) && !--c)(2))
//         );

// }
   
// keep this function call here 
// console.log(EvenPairs('f09r27i8e67'));

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const languages = ['JavaScript', 'Python'];

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       // implement Context here so can be used in child components
//       <MainSection />
//     );
//   }
// }

// class MainSection extends React.Component {
//   render() {
//     return (
//       <div>
//         <p id="favoriteLanguage">Favorite programing language: {null}</p>
//         <button id="changeFavorite">Toggle language</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// function ScaleBalancing(temp) { 

//   // code goes here  

// }
   
// // keep this function call here 
// console.log(ScaleBalancing(["[3, 4]", "[1, 2, 7, 7]"]));

// function DistinctList(temp) { 

//   // code goes here  
//   const temp = {};
//   let count = 0;
//   for (let i = 0; i < temp.length; i++) {
//     out: for (let j = i + 1; j <temp.length; j++) {
//       if(!temp[temp[i]] && temp[j] === temp[i]) {
//         temp[temp[i]] = temp[i];
//         count ++;
//         break out;
//       } else if(temp[temp[i]] && temp[j] === temp[i]) {
//         count ++;
//       }
//   }
//   }
//   console.log(temp)
//   return count; 

// }
   
// // keep this function call here 
// console.log(DistinctList([1, 2, 2, 2, 3]));

// function SquareFigures(num) { 

//   // code goes here  
//   let i = 0;
//   let fig = 0;
//   let flag = true;
//   // console.log(i.toString());
//   while(flag) {
//     const square = Math.pow(i, 2);
//     if(square.toString().length === num) {
//       fig = i;
//       flag = false;
//     }
//     i++;
//   }
//   return fig; 

// }
   
// // keep this function call here 
// console.log(SquareFigures(1));

// function getPascalsTriangle(a) {
//   const temp = {};
//   let row = 1;
//   let flag = true;
//   let missing = -1;
//   while(flag) {
//       temp[row] = [];
//       for(let col = 0; col < row+1; col++) {
//           if(col === 0 || col === row) {
//               temp[row][col] = 1;
//           } else {
//               temp[row][col] = temp[row-1][col-1] + temp[row-1][col];
//           }         
//       }
//       if(!a.some(val => temp[row].indexOf(val) === -1)) {
        
//         missing = temp[row][a.length];
//         if (missing !== -1) flag = false;
//         if (!missing) return -1
//       }
//       row++;       
//   }   
//   return missing;
// }
// console.log(getPascalsTriangle([1,5,10,10]));

// function weightDistributionHelper(data) {
//   const tempArr = []
//   for (let item of data) {
//     for (i = 0; i < item.weight; i++) {
//       tempArr.push(item.icon)
//     }
    
//   }
//   return tempArr
// }

// function arrangeWeight(data, memo = {}, m=[]) {
//   const temp = []
//   if (data.length === 1) return m
//   for(let i = 0; i < data.length; i++) {
//     // console.log('^^ ', item !== temp[temp.length - 1], item, temp[temp.length - 1]);
//     if (data[i] !== m[m.length - 1]) {
//       memo[data[i]] = data[i]
//       m.push(data[i])
//       arrangeWeight(data.slice(i + 1), memo, m)
//     } else {
//       // temp.push(item)
//     }
//   }
//   return m
// }

// function arrangeWeights(data) {
//   const result = []
//   const outerMemo = {}
//   for (let i = 0; i < data.length; i++) {
//     const innerMemo = {}
//     if (!outerMemo[data[i]]) {
//       result.push(data[i])
//       outerMemo[data[i]] = i+1
//       continue
//     }
//     if (outerMemo[data[i]] && data[i] !== result[result.length - 1]) {
//       if (result.length < data.length) {
//         result.push(data[i])
//       }
      
//       // outerMemo[data[i]] = i
//       // console.log("*", i, data[i], result, result.length, data);
//       // continue
//     }
//     for (let j = i + 1; j < data.length ; j++) {
//       if((data[j] !== data[i] && !innerMemo[data[j]])) {
//         result.push(data[j])
//         outerMemo[data[j]] = data[j]
//         innerMemo[data[j]] = data[j]
//         data[j] = data[i]
//         data[i] = data[j]
//         // break
//       }
//     }
//   }
//   return result
// }

function getString(s) {
  // Write your code here
  const freq = {}
  for (const c of s) {
      freq[c] = (freq[c] || 0) + 1
  }
  let smallest = s
  while(true) {
      let swapped = false
      for (const c1 in freq) {
          for(const c2 in freq) {
              if (c1 !== c2) {
                  let newStr = s.split(c1).join(c2).split(c2).join(c1)
                  if (newStr < smallest) {
                      smallest = newStr
                      swapped = true
                      freq[c1]--;
                      freq[c2]++;
                      if (freq[c1] === 0) {
                          delete freq[c1]
                      }
                      if (freq[c2]) {
                          freq[c2] = 0
                      }
                  }
              }
          }
      }
      if (!swapped) {
          break
      }
      s = smallest
  }
  return smallest

}
const getSmallest = (string, start) => {
  const currString = string.slice(start)
  return currString.split('').reduce((a,b, i) => {
    a = b < a ? b : a
    return a
  }, currString[0])
}

function charSwap(s, memo = {}) {
  let swapped = s
  let startIndex = 0

  while(true) {
    let smallest = getSmallest(swapped, startIndex)
    const currentChar = swapped[startIndex]

    if (smallest !== currentChar) {
      const swapString = swapped.split('').map((ss, idx) => {
        if (ss === currentChar && idx >= startIndex) {
          return smallest
        } else if (ss === smallest && idx >= startIndex) {
          return currentChar
        } else return ss
      }).join('')
      swapped = swapString
    }
    memo[smallest] = currentChar
    startIndex = swapped.lastIndexOf(smallest) + 1
    console.log(startIndex, smallest, swapped, currentChar);
    if (startIndex >= s.length) break
  }
  return swapped
}


// const data = [
//   { icon: '🍎', weight: 0 },
//   { icon: '🍌', weight: 1 },
//   { icon: '🥕', weight: 0 },
// ];

// const weight = weightDistributionHelper(data)

// console.log(getString("bdea"))
// console.log(getString("bbcacad"))
// console.log(arrangeWeights(weight))
console.log(charSwap('bdea'));
// console.log(getSmallest('abcde', 2), 'abcde'.slice(2));

// console.log()
