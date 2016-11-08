// Stack data structure class example
class Stack {
  constructor(dataStore = [], top = 0) {
    this.dataStore = dataStore;
    this.top       = top;
  }

  push(element) {
    this.dataStore[this.top++] = element;
  }

  pop() {
    this.dataStore.splice(--this.top,1);
  }

  peek() {
    return this.dataStore[this.top - 1];
  }

  length() {
    return this.top;
  }

  clear() {
    this.top = 0;
  }
}

function checkBalancedExpression(e) {
  const s      = new Stack();
  let balanced = false;

  for(const key in e) {
    if(e[key] === '(') {
      s.push(e[key]);
    } else if(e[key] === ')') {
      if (s.length() === 0) {
        balanced = false;
      }
      s.pop();
    }
    if (s.length() > 0) {
      balanced = false;
    } else {
      balanced = true;
    }
  }
  return balanced;
}

// Implementation
// ###########################################
/*
  1. A stack can be used to ensure that an arithmetic expression has balanced
  parentheses. Write a function that takes an arithmetic expression as an argument
  and returns the postion in the expression where a parenthesis is missing.
  An example of an arithmetic expression with unbalanced parentheses
  is 2.3 + 23 / 12 + (3.14159 * .24.
*/

let exp = '2.3 + 23 / 12 + (3.14159 * .24';
let e   = exp.split('');

e = e.filter(item => item !== ' ');
let balanced = checkBalancedExpression(e)

let exp2 = '2.3 + (23 / 12) + (3.14159 * .24)';
let e2   = exp2.split('');

e2 = e2.filter(item => item !== ' ');
let balanced2 = checkBalancedExpression(e2)

console.log('CHAPTER 4');
console.log('### Excercise 1');
console.log(`Expression example: ${exp}`);
(balanced) ? console.log('The expression is balanced') : console.log('The expression is no balanced');

console.log(`\nExpression example: ${exp2}`);
(balanced2) ? console.log('The expression is balanced') : console.log('The expression is no balanced');

// ###########################################
/*
  2. A postfix expression evaluator works on arithmetic expressions taking the following form:
    op1 op2 operator
    Using two stacks—one for the operands and one for the operators—design and implement
    a JavaScript function that converts infix expressions to postfix expres‐ sions, and
    then use the stacks to evaluate the expression.
*/

function checkOperator(op) {
  switch (op) {
    case ')':
      return 4;
    case '(':
      return 3;
    case '/':
      return 2;
    case '*':
      return 2;
    case '+':
      return 1;
    case '-':
      return 1;
  }
}

function infixToPostfix(exp) {
  let value = '';
  const stack   = new Stack();
  const postfix = new Stack();

  for (const key in exp) {
    if(exp[key] === '(' || exp[key] === ')' || exp[key] === '+' ||
       exp[key] === '-' || exp[key] === '*' || exp[key] === '/' ) {
      if(value !== '') {
        postfix.push(value);
      }
      if(stack.length() === 0 && exp[key] !== '(') {
        stack.push(exp[key]);
      } else {
        if(checkOperator(exp[key]) !== 3) {
        innerLoop:
          while(stack.length() > 0) {
            if(checkOperator(exp[key]) < checkOperator(stack.peek())) {
              postfix.push(stack.peek());
              stack.pop();
            } else if (checkOperator(exp[key]) === checkOperator(stack.peek())) {
              postfix.push(stack.peek());
              stack.pop();
              stack.push(exp[key]);
              break innerLoop;
            } else {
              if(checkOperator(exp[key]) !== 4) {
                stack.push(exp[key]);
              }
              break innerLoop;
            }
          }
        }
      }
      value = '';
    } else {
      value += exp[key];
    }
  }

  while(stack.length() > 0) {
    postfix.push(stack.peek());
    stack.pop();
  }
  return postfix;
}

function evalPostFix(exp) {
  const resultStack = new Stack();
  const postfix     = exp.dataStore;

  for(const key in postfix) {
    if(!isNaN(postfix[key])) {
      resultStack.push(postfix[key]);
    } else {

        const a = resultStack.peek();
        resultStack.pop();
        const b = resultStack.peek();
        resultStack.pop();

        if(postfix[key] === "+") {
            resultStack.push((parseFloat(a, 10) + parseFloat(b, 10)).toFixed(2));
        } else if(postfix[key] === "-") {
            resultStack.push((parseFloat(b, 10) - parseFloat(a, 10)).toFixed(2));
        } else if(postfix[key] === "*") {
            resultStack.push((parseFloat(a, 10) * parseFloat(b, 10)).toFixed(2));
        } else if(postfix[key] === "/") {
            resultStack.push((parseFloat(b, 10) / parseFloat(a, 10)).toFixed(2));
        }
    }
  }
  return resultStack.dataStore[0];
}

console.log('\n\n### Excercise 2');
console.log(`Infix => ${exp2}`);
const postfix = infixToPostfix(e2);
console.log(`Postfix => ${postfix.dataStore.reduce((total, value) => total + ' ' + value )}`);
evalPostFix(postfix);
console.log(`Evaluation => ${evalPostFix(postfix)}`);

// ###########################################
/*
  3. An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez dispenser
  is filled with red, yellow, and white colors and you don’t like the yellow ones. Write a program
  that uses a stack (and maybe more than one) to replace the yellow ones for another color without
  changing the order of the other candies in the dispenser.
*/
function getCandy() {
  switch (parseInt(Math.random() * (4 - 1) + 1, 10)) {
    case 1:
      return 'red';
    case 2:
      return 'yellow';
    case 3:
      return 'white';
  }
}
function replaceStackElements(pezDispender) {
  const replace  = new Stack();
  const temporal = new Stack();

  while (pezDispender.length() > 0) {
    if(pezDispender.peek() !== 'yellow') {
      temporal.push(pezDispender.peek());
    } else {
      let candy = getCandy();
      while (candy === 'yellow') {
        candy = getCandy();
      }
      temporal.push(candy);
    }
    pezDispender.pop();
  }
  while (temporal.length() > 0) {
    replace.push(temporal.peek());
    temporal.pop();
  }
  return replace;
}

console.log('\n\n### Excercise 3');
let dispenderStack = [];
const numCandies = 20;
for(var i = 0; i < numCandies; i++) {
  dispenderStack.push(getCandy());
}

let pezDispender = new Stack(dispenderStack, numCandies);
console.log('Original pezDispender: ');
console.log(pezDispender);
console.log('Replaced pezDispender: ');
console.log(replaceStackElements(pezDispender));
