//You are working on a project that uses external libraries. The following commands are available for you:

//"add" - adds certain library of a certain version to the dependency list (but doesn't download the library). In case library with the same name has already been added or installed before, new library replaces the previous one;
//"install" - downloads the libraries that were added to the dependency list since the previous "install" command.
//Task
//Your task is to implement a function that returns the list of downloaded library names sorted alphabetically by their name or by their semantic version, in case they have the same name.

//Example

//For operations = [["add", "express", "1.1"], ["add", "async", "1.0"], ["add", "express", "1.0"], ["install"]], the output should be solution(operations) = ["async-1.0", "express-1.0"].
//Explanation:

//"express-1.1" is added to the dependencies;

//"async-1.0" is added to the dependencies;

//"express-1.0" replaces "express-1.1" in the dependency list;

//Both libraries "async-1.0" and "express-1.0" are being downloaded during "install" step.

//For operations = [["add", "express", "1.1"], ["add", "async", "1.0"], ["add", "express", "1.0"], ["install"], ["add", "express", "1.2"], ["install"]], the output should be: solution(operations) = ["async-1.0", "express-1.0", "express-1.2"].

/**
 * 
You are working on a project that uses external libraries. The following commands are available for you:

"add" - adds certain library of a certain version to the dependency list (but doesn't download the library). In case library with the same name has already been added or installed before, new library replaces the previous one;
"install" - downloads the libraries that were added to the dependency list since the previous "install" command.
Task
Your task is to implement a function that returns the list of downloaded library names sorted alphabetically by their name or by their semantic version, in case they have the same name.

Example

For operations = [["add", "express", "1.1"], ["add", "async", "1.0"], ["add", "express", "1.0"], ["install"]], the output should be solution(operations) = ["async-1.0", "express-1.0"].
Explanation:

"express-1.1" is added to the dependencies;

"async-1.0" is added to the dependencies;

"express-1.0" replaces "express-1.1" in the dependency list;

Both libraries "async-1.0" and "express-1.0" are being downloaded during "install" step.

For operations = [["add", "express", "1.1"], ["add", "async", "1.0"], ["add", "express", "1.0"], ["install"], ["add", "express", "1.2"], ["install"]], the output should be: solution(operations) = ["async-1.0", "express-1.0", "express-1.2"].

Explanation:

"express-1.1" is added to the dependencies;
"async-1.0" is added to the dependencies;
"express-1.0" replaces "express-1.1" in the dependency list;
Both libraries "async-1.0" and "express-1.0" are being downloaded during "install" step;
"express-1.2" replaces "express-1.0" in the dependency list;
Only "express-1.2" is being downloaded because "async-1.0" has been already downloaded during the previous "install" step;
So, 3 libraries were downloaded in total: ["async-1.0", "express-1.0", "express-1.2"].
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.string operations

An array of operations.

Guaranteed constraints:
1 ≤ operations.length ≤ 100.

[output] array.string

The list of distinct libraries which were downloaded sorted according to the rules described above.


 */


/**
 A regular game of tic-tac-toe is played on a 3-by-3 grid. The ACME board company is putting out a generalized version of tic-tac-toe that is played on an n-by-n board.

In this variant, players take turns placing an X or an O on the board, and the game ends when one of the players wins or there are no spaces left to play. A player wins if they place a move that satisfies one of the following three conditions:

They complete a row of n of their symbols;
They complete a column of n of their symbols;
They complete a diagonal of n of their symbols. There are only two diagonals on the board that are large enough to win.
You have been asked by ACME to write a function that checks the results of the board. The board is represented by a n-by-n matrix of characters. The cell in row i and column j is represented by board[i][j], and can take the values "X" (if the X player has played there), "O" (if the O player has played there), or "." (if the cell is currently empty).

Write a function solution(board) that takes a n-by-n matrix of strings, and returns the string representing the result of the board. The possible return values are:

"X WIN": The X markers satisfy one of the win conditions.
"O WIN": The O markers satisfy one of the win conditions.
"ONGOING": Neither player has won yet, and there are still empty spaces on the board.
"TIE": The game is over, and neither player has won.
It's guaranteed that there is at most one winner.

Example

For board = ["XO", "X."], the output should be
solution(board) = "X WIN".

X	O
X	
For board = ["XOX", "OXO", ".X."], the output should be
solution(board) = "ONGOING".

X	O	X
O	X	O
X	
Even though an "X" win is inevitable in this game, there is no current winner, and the game is still ongoing.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string board

Representation of the gaming board. It's guaranteed that there is at most one winner.

Guaranteed constraints:
2 ≤ board.length = board[i].length ≤ 100,
board[i][j] is in {"X","O","."}.

[output] string

Return the string representing the result of the board. The possible return values are:

"X WIN": The X markers satisfy one of the win conditions.
"O WIN": The O markers satisfy one of the win conditions.
"ONGOING": Neither player has won yet, and there are still empty spaces on the board.
"TIE": The game is over, and neither player has won.
 */



/***
 Given a rectangular matrix of English lowercase letters board and a string word, your task is to find the number of occurrences of word in the rows(→), columns(↓) and diagonals(↘) of board.

Example

For

board = [['s', 'o', 's', 'o'],
         ['s', 'o', 'o', 's'],
         ['s', 's', 's', 's']]
and word = "sos", the output should be solution(board, word) = 3.

There are 2 occurrences of word starting from board[0][0](going → and ↘), and one starting from board[0][2](going ↓).

No other occurrences of word were counted, so the answer is 3.

For

board = [['a', 'a'],
         ['a', 'a']]
and word = "aa", the output should be
solution(board, word) = 5.

There are 2 horizontal, 2, vertical, and 1 diagonal occurrence of word, for a total of 5.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.char board

A rectangular matrix of lowercase English letters.

Guaranteed constraints:
1 ≤ board.length ≤ 100,
1 ≤ board[0].length ≤ 100,
board[i].length = board[0].length.

[input] string word

A string consisting of lowercase English letters.

Guaranteed constraints:
2 ≤ word.length ≤ 100.

[output] integer

The number of occurrences of word in the rows(→), columns(↓) and diagonals(↘) of board.
 */

function solution(operations) {
  var dependencies = {};
  let memo = {};
  var downloaded = [];
  for (let i = 0; i < operations.length; i++) {
      if (operations[i][0] === 'add') {
          const k = operations[i][2];
          // if (!dependencies[k]) {
            dependencies[operations[i][1]] = operations[i][2];
          // }
      } else if (operations[i][0] === 'install') {
          let arrDependencies = Object.keys(dependencies);
          
          // arrDependencies.sort((a, b) => {
          //     if (a < b) {
          //         return -1;
          //     }
          //     if (a > b) {
          //         return 1;
          //     }
          //     return 0;
          // });
          for (let j = 0; j < arrDependencies.length; j++) {
            const k = arrDependencies[j] + '-' + dependencies[arrDependencies[j]]
            console.log(dependencies);
            // if (!memo[k]) {
              downloaded.push(arrDependencies[j] + '-' + dependencies[arrDependencies[j]]);
              memo[k] = true;  
            // }
          }
      }
  }
  return downloaded.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
})
}

console.log(solution([["add","request","1.9"], 
["add","Webix","2.1"], 
["add","Ember","3.0"], 
["add","request","2.9"], 
["add","Webix","12.1"], 
["add","Ember","2.0"], 
["add","Ionic","2.0"], 
["install"], 
["add","Babel","12.1"], 
["add","Mocha","1.0"], 
["install"], 
["add","Mocha","1.0"], 
["install"], 
["add","Babel","12.1"], 
["add","Ember","1.0"], 
["add","Vue.js","2.9"], 
["install"], 
["add","iziModal","12.1"], 
["install"], 
["add","ESLint","11.0"], 
["install"], 
["add","Vue.js","2.9"], 
["add","Next.js","12.1"], 
["install"], 
["install"]]));