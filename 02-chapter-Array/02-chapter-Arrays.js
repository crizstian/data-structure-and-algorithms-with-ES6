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

// Implementation of the grade using classes
console.log('### Excercise 1');
console.log('## Using ES6 Class, using the new keyword');
const gradeObj = [90,89,75,90,89,75,90,89,75,90,89,75,90,89,75,90,89,75];
const grade    = new grades(gradeObj);
grade.addGrade(90);
grade.addGrade(25);
console.log(`Avg grade: ${grade.displayAvg()}`);


const gradesProto = {
  init(grades = []) {
    this.grades = grades;
    return this;
  },
  addGrade(grade) {
    this.grades.push(grade);
  },
  displayAvg() {
    let sum = this.grades.reduce((grades, grade) => grades += grade, 0);
    return sum / this.grades.length;
  }
}

// Implementation of the grade prototype
console.log('\n## Using prototype, using Object.create()');
const gradeO = [90,89,75,90,89,75,90,89,75,90,89,75,90,89,75,90,89,75];
const gradeP = Object.create(gradesProto).init(gradeO);
gradeP.addGrade(90);
gradeP.addGrade(25);
console.log(`Avg grade: ${gradeP.displayAvg()}`);

const gradesFactory = () => {
  let grades = [];
  return {
    init(g = []) {
      grades = g;
      return this;
    },
    addGrade(grade) {
      grades.push(grade);
    },
    displayAvg() {
      let sum = grades.reduce((g, grade) => g += grade, 0);
      return sum / grades.length;
    }
  }
}

// Implementation of the grade factory
console.log('\n## Using prototype, using factory');
const grade3 = gradesFactory().init(gradeO);
grade3.addGrade(90);
grade3.addGrade(25);
console.log(`Avg grade: ${grade3.displayAvg()}`);

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


const weekTempsProto = {
  init(dataStore = []) {
    this.dataStore = dataStore
    return this
  },
  add(temp){
    this.dataStore.push(temp)
  },
  averageWeek(week) {
    let totalDays = this.dataStore[week].length
    let total = this.dataStore[week].reduce((week, day) => week += day, 0)
    return (total / totalDays).toFixed(2)
  },
  displayMonthAvg() {
    let sum = this.dataStore.reduce((weeks, week) =>
      weeks + week.reduce((days, day) => days + day, 0)
    , 0)
    return (sum / (this.dataStore.length * 4)).toFixed(2)
  },
  displayAllWeekAvg() {
    let sum = 0
    this.dataStore.forEach((week, count) => {
      week.forEach(day => sum += day )
      console.log(`Week ${count + 1} Temp Avg: ${(sum / week.length).toFixed(2)}`)
      sum = 0
    });
  }
};

// Implementation of weekTemps prototype object
console.log('\n## Using prototype')

const month = Object.create(weekTempsProto).init(randomMonth)

console.log(`Month Temp avg: ${month.displayMonthAvg()}`)
console.log(`Week 2 Temp avg: ${month.averageWeek(2)}`)
console.log(`\nDisplay All Week Avg`)
month.displayAllWeekAvg()

console.log(JSON.stringify(weekTempsProto, null, 2));

// #############################################
console.log('\n### Excercise 4');

const letters = ['a','b','a','c','a','d','a','b','r','a'];
console.log(letters.reduce((all, letter) => all + letter));
