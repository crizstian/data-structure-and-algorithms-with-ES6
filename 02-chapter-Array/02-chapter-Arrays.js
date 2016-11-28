class grades {

  constructor(grades = []) {
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades = [...this.grades, grade];
  }

  displayAvg(){
    let sum = 0;
    this.grades.forEach(grade => sum += grade );
    return sum / this.grades.length;
  }
}

// Implementation of the grade class
console.log('### Excercise 1');
const gradeObj = [90,89,75];
const grade    = new grades(gradeObj);
grade.addGrade(90);
grade.addGrade(25);
console.log(`Avg grade: ${grade.displayAvg()}`);

// #############################################
console.log('\n### Excercise 2');
const arrayWords = ["hello ","my ","friend "];
console.log(`orginal array: ${arrayWords} `);
console.log(`displaying forward: ${arrayWords.reduce((total, word) => total + word)}`);
console.log(`displaying backward: ${arrayWords.reduceRight((total, word) => total + word)}`);

// #############################################
class weekTemps {

  constructor(dataStore = []) {
    this.dataStore = dataStore;
  }

  add(temp) {
    this.dataStore = [...this.dataStore, temp];
  }

  averageWeek(week) {
    let total     = 0;
    let totalDays = this.dataStore[week].length;

    this.dataStore[week].forEach(item => total += item );

    return (total / totalDays).toFixed(2);
  }

  displayMonthAvg() {
    let sum = 0;

    this.dataStore.forEach(week =>
      week.forEach(day => sum += day )
    );

    return (sum / (this.dataStore.length * 4)).toFixed(2);
  }

  displayAllWeekAvg() {
    let sum = 0;

    this.dataStore.forEach((week, count) => {
      week.forEach(day => sum += day );
      console.log(`Week ${count + 1} Temp Avg: ${(sum / week.length).toFixed(2)}`);
      sum = 0;
    });

  }
}

// Implementation of weekTemps class
console.log('\n### Excercise 3');

const randomMonth = [
  [45,23,32,12,31,21,22],
  [12,12,13,11,9,34,23],
  [33,34,23,25,26,12,11],
  [14,15,18,19,22,24,25]
];
const thisMonth = new weekTemps(randomMonth);

console.log(`Month Temp avg: ${thisMonth.displayMonthAvg()}`);
console.log(`Week 2 Temp avg: ${thisMonth.averageWeek(2)}`);
console.log(`\nDisplay All Week Avg`);
thisMonth.displayAllWeekAvg();

// #############################################
console.log('\n### Excercise 4');

const letters = ['a','b','a','c','a','d','a','b','r','a'];
console.log(letters.reduce((all, letter) => all + letter));
