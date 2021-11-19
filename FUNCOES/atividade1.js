const students = [
  {
    name:'Flávia',
    grade: 5,
  },
  {
    name:'Pedro',
    grade: 7,
  },
  {
    name:'Alexandre',
    grade: 9,
  },
  {
    name:'Luana',
    grade: 6,  
  },
];

function checkGrade(students, averageGrade) {
  let studentsAboveAverage = [];
  for(let student of students) {
    const { name, grade } = student;
    if (grade >= averageGrade) {
      studentsAboveAverage.push(name);
    }
  }
  return studentsAboveAverage;
}

console.log(checkGrade(students, 7));