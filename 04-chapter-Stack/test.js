const {stack} = require('./index')

function checkBalancedExpression (e) {
  const s = stack()
  let balanced = true

  for (const key in e) {
    if (e[key] === '(') {
      s.push(e[key])
    } else if (e[key] === ')') {
      if (s.length() === 0) {
        balanced = false
      }
      s.pop()
    }
  }
  if (s.length() > 0) {
      balanced = false
  }
  return balanced
}

function checkOperator (op) {
  switch (op) {
    case ')':
      return 4
    case '(':
      return 3
    case '/':
      return 2
    case '*':
      return 2
    case '+':
      return 1
    case '-':
      return 1
  }
}

function infixToPostfix(exp) {
  let value = ''
  const s = stack()
  const postfix = stack()

  for (const key in exp) {
    if (exp[key] === '(' || exp[key] === ')' || exp[key] === '+' ||
       exp[key] === '-' || exp[key] === '*' || exp[key] === '/' ) {
      if (value !== '') {
        postfix.push(value)
      }
      if (s.length() === 0 && exp[key] !== '(') {
        s.push(exp[key])
      } else {
        if (checkOperator(exp[key]) !== 3) {
          innerLoop:
          while (s.length() > 0) {
            if (checkOperator(exp[key]) < checkOperator(s.peek())) {
              postfix.push(s.peek())
              s.pop()
            } else if (checkOperator(exp[key]) === checkOperator(s.peek())) {
              postfix.push(s.peek())
              s.pop()
              s.push(exp[key])
              break innerLoop
            } else {
              if (checkOperator(exp[key]) !== 4) {
                s.push(exp[key])
              }
              break innerLoop
            }
          }
        }
      }
      value = ''
    } else {
      value += exp[key]
    }
  }

  while (s.length() > 0) {
    postfix.push(s.peek())
    s.pop()
  }
  return postfix
}

function evalPostFix (exp) {
  const resultStack = stack()
  const postfix = exp.getStack()

  for (const key in postfix) {
    if (!isNaN(postfix[key])) {
      resultStack.push(postfix[key])
    } else {
      const a = resultStack.peek()
      resultStack.pop()
      const b = resultStack.peek()
      resultStack.pop()

      if (postfix[key] === '+') {
        resultStack.push((parseFloat(a, 10) + parseFloat(b, 10)).toFixed(2))
      } else if (postfix[key] === '-') {
        resultStack.push((parseFloat(b, 10) - parseFloat(a, 10)).toFixed(2))
      } else if (postfix[key] === '*') {
        resultStack.push((parseFloat(a, 10) * parseFloat(b, 10)).toFixed(2))
      } else if (postfix[key] === '/') {
        resultStack.push((parseFloat(b, 10) / parseFloat(a, 10)).toFixed(2))
      }
    }
  }
  return resultStack.getStack()
}

test('Stack ES6 module', assert => {
  let exp = '2.3 + 23 / 12 + (3.14159 * .24'
  let e = exp.split('')

  e = e.filter(item => item !== ' ')
  let balanced = checkBalancedExpression(e)

  let exp2 = '2.3 + (23 / 12) + (3.14159 * .24)'
  let e2 = exp2.split('')

  e2 = e2.filter(item => item !== ' ')
  let balanced2 = checkBalancedExpression(e2)

  assert.equal(false, balanced, `The expression '${exp}' is no balanced`)

  assert.equal(true, balanced2, `The expression '${exp2}' is balanced`)

  const postfix = infixToPostfix(e2)
  let result = postfix.getStack().reduce((total, value) => total + ' ' + value )

  assert.equal(result, '2.3 23 12 / + 3.14159 .24 * +', 'convert Infix To Postfix')

  result = evalPostFix(postfix)

  assert.equal(result, '4.97', 'evaluation of postfix')
})
