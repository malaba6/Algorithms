// function solution(A) {
//     //  returns the smallest positive integer (greater than 0) that does not occur in A
//     const obj = {};
//     const max = A.reduce((a,b) => {
//         return a > b ? a : b;
//     });
//     A.forEach(element => {
//         obj[element] = element;
//     });
//     if(Math.sign(max) === -1) return 1
//     for(let i= 1 ; i < max; i++) {
//         if (!obj[i]) return i;
//     }
//     return max + 1;
// }

// import React from 'react';

// const USERS_URL = 'https://example.com/api/users';

// export default function Table () {
    
//      const [users, setUsers] = React.useState([]);
//      const [loading, setLoading] = React.useState(false);
//      const [page, setPage] = React.useState(0);
//      const [count, setCount] = React.useState(0);
//      const lastPage = Math.ceil(count / 10 - 1);
    
//     React.useEffect(() => {
//         setLoading(true);
//         fetch(`${USERS_URL}?page=${page}`).
//           then(res => {
//             return res.json();
//           }).then(data => {
//             setLoading(false);
//             setUsers(data.results);
//             setCount(data.count);
//           });
//       }, [page]);
     
//     return (
//         <div>
//             <table className="table">
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                 </tr>
//             </thead>
//                 <tbody>
//                 {
//                     users.map(user => {
//                          const { id, firstName, lastName } = user;
//                          return (
//                             <tr key={id}>
//                               <td>{id}</td>
//                               <td>{firstName}</td>
//                               <td>{lastName}</td>
//                             </tr>
//                          )
//                     })
//                 }
//                 </tbody>
//             </table>
//         <section className="pagination">
//             <button className="first-page-btn" disabled={loading || page === 0}
//             onClick={() => setPage(0)}
//             >first</button>
//             <button className="previous-page-btn" disabled={loading || page === 0}
//             onClick={() => setPage(page - 1)}
//             >previous</button>
//             <button className="next-page-btn"
//             disabled={loading || page === lastPage}
//             onClick={() => setPage(page + 1)}
//             >next</button>
//             <button className="last-page-btn"
//             onClick={() => setPage(lastPage)}
//             disabled={loading || page === lastPage}
//             >last</button>
//         </section>
//     </div>
//     );
// };



const isUpper = (ch) => {
    return ch == ch.toUpperCase();
}

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const newArr = [];
    const temp = {};
    
    S.split('').forEach(e => {
        temp[e] = e;
    });
    S.split('').forEach(e => {
        if (isUpper(e)) {
            if(temp[e.toLowerCase()]) newArr.push(e);
        }
        else if(!isUpper(e)) {
            if(temp[e.toUpperCase()]) newArr.push(e);
        }
    });
    if (newArr.length === 0) return 'NO';
    return newArr.map(e => e.toLowerCase()).reduce((a,b) => a > b ? a : b).toUpperCase();
}

console.log(solution('Codility'));