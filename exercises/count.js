const count = string => {  
    // The function code should be here
    return string.split('').reduce((data, e, i) => {
        data[i + 1] = e
        return data;
    }, {});
  }

  console.log(count('aba'));