let validatePIN = (pin) =>  !pin.split('').map(el => el !== '\n' && +el).includes(false)
&& ((pin.length === 4 || pin.length === 6) ) ? true : false;

console.log(validatePIN(`-1.234`));