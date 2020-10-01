// const IncreamentBy1 = ({ num }) => <span>1 + {num} = {1 + num}</span>
// const withIncrement = (WrappedComponent) => props => <WrappedComponent {...props} />
// const EnhancedComponent = withIncrement(IncreamentBy1);
// {/* <EnhancedComponent num={5} /> */}
// <EnhancedComponent /</EnhancedComponent>> will render 1 + 5 = 6
let sum = new String('4 + 4');
console.log('*******', eval(sum.valueOf()));
// function promise () {
//   return Promise.reject();
// const arr = [1, 5, 3, 2, 4];

// const sorted = arr.sort((a, b) => a - b);
// sorted[0] = null;

// console.log(']]]]]', arr[0]);
// }

// let sum1 = 0;
// let numbers = [2, 5, 6];
// let cummulativeSum = async function (a, b) {
//   return a + b;
// };

// numbers.forEach(async function (a) {
//   sum = await cummulativeSum(sum1, a);
// });

// console.log('-----', numbers);

// let reason = 'Hello Sunshine';
// reason[0] = 'B';
// console.log('-------------', reason);

// const Timer = () => {
//   const [timer, setTimer] = useState(60);
//   // const start = () => {
//   //   setInterval(() => {
//   //     setTimer(timer - 1);
//   //     console.log('Timer value: ', timer);
//   //   });
//   // };
//   // useEffect(start, []);
//   return <p>{timer}</p>;
// };
// class Test extends React.Component {
//     constructor () {
//       super();
//       this.state = { value: 1 };
//     }
  
//     handleClick () {
//       this.setState(
//         ({ value }) => ({ value: value + 1 }),
//         () => console.log(this.state.value)
//       );
//       console.log(this.state.value);
//     }
//     render () {
//       return <buttton onClick={this.handleClick.bind(this)} >Click Me</buttton>;
//     }
//   }