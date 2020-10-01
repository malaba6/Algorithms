const count = string => {  
    // The function code should be here
    return obj = string.split('').reduce((data, e) => {
        data[e] = (data[e] || 0) + 1;
        return data;
    }, {});
  }

  console.log(count('aba'));