class grades {

  constructor(grades = []) {
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades = [...this.grades, grade];
  }

  displayAvg(){
    let sum = 0;
    for (const key in this.grades) {
        sum += this.grades[key];
    }
    return sum / this.grades.length;
  }

}

// Excercises
console.log('CHAPTER 2');
console.log('### Excercise 1');

const gradeObj = [90,89,75];
const grade    = new grades(gradeObj);
grade.addGrade(90);
grade.addGrade(25);
console.log(`Avg grade: ${grade.displayAvg()}`);

// #############################################

console.log('\n');
console.log('### Excercise 2');

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
    for (let i = 0; i < totalDays; i++) {
      total += this.dataStore[week][i];
    }
    return (total / totalDays).toFixed(2);
  }

  displayMonthAvg() {
    let sum = 0;
    for (const key in this.dataStore) {
      for (const key2 in this.dataStore[key]) {
        sum += this.dataStore[key][key2];
      }
    }
    return (sum / (this.dataStore.length * 4)).toFixed(2);
  }

  displayAllWeekAvg() {
    let sum = 0;
    let avg = [];
    for (const key in this.dataStore) {
      for (const key2 in this.dataStore[key]) {
        sum += this.dataStore[key][key2];
      }
      avg[key] = `Week ${parseInt(key, 10) + 1} Temp Avg: ${(sum / this.dataStore[key].length).toFixed(2)}`;
      sum      = 0;
    }
    return avg;
  }

}
console.log('\n');
console.log('### Excercise 3');

const randomMonth = [
  [45,23,32,12,31,21,22],
  [12,12,13,11,9,34,23],
  [33,34,23,25,26,12,11],
  [14,15,18,19,22,24,25]
];
const thisMonth = new weekTemps(randomMonth);

console.log(`Month Temp avg: ${thisMonth.displayMonthAvg()}`);
console.log(`Week 2 Temp avg: ${thisMonth.averageWeek(2)}`);
console.log(`Week's Temp avg:`);
const weeks = thisMonth.displayAllWeekAvg();
for (const key in weeks) {
  console.log(weeks[key]);
}

// #############################################

console.log('\n');
console.log('### Excercise 4');

const letters = ['a','b','a','c','a','d','a','b','r','a'];
console.log(letters.reduce((all, letter) => all + letter));
