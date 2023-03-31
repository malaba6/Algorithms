const getRawTime = (time) => {
  return time.replace(/[pa]M/i, '')
}
(function timeConversion(s='12:01:00PM') {
  // Write your code here
  let time = '';
  
  const h24 = {
    '01': '13',
    '02': '14',
    '03': '15',
    '04': '16',
    '05': '17',
    '06': '18',
    '07': '19',
    '08': '20',
    '09': '21',
    '10': '22',
    '11': '23',
    '12': '00'
  }
  const matchingHour = s.match(/^\d{2}/)[0]
  const toConvert = (s.includes('PM') && matchingHour !== '12') || (matchingHour === '12' && s.includes('AM')) ? true : false
  
  if (toConvert) {
    time = getRawTime(s.replace(/^\d{2}/, h24[matchingHour]))
  } else {
    time = getRawTime(s)
  }

  
  console.log(toConvert, time);
  return time


})()