function gradingStudents(grades) {
  // Write your code here
  return grades.map(g => {
    let nextMultiple5 = 1
    for (let i = g; i < g + 5; i++) {
      if (i % 5 === 0) {
        nextMultiple5 = i
        break
      }
    }
    if (g < 38) return g
    else if (nextMultiple5 - g < 3) return nextMultiple5
    return g
  })

}

console.log(gradingStudents([73, 67, 38, 33]));