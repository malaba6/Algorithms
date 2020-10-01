// TODO: create a RomanNumerals helper object
const digits = {0: '',1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'};
const tens = {0: '', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'X', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC'};
const hundreds = {0: '', 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM'};
const thousands = {0: '', 1: 'M', 2000: 'MM', 3: 'MMM'};

const RomanNumerals =  {
    toRoman: num => {
      const strNum = num.toString();
      
      switch(strNum.length) {
        case 1:
          return digits[num];
        case 2:
          return tens[strNum[0]] + digits[strNum[1]];
        case 3:
          return hundreds[strNum[0]] + tens[strNum[1]] + digits[strNum[2]];
        case 4:
          return thousands[strNum[0]] + hundreds[strNum[1]] + tens[strNum[2]] + digits[strNum[3]];
      }
      return 'me';
    }
}

console.log(RomanNumerals.toRoman(3007));