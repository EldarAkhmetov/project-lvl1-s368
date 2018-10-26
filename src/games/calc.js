import engine from '..';

const description = 'What is the result of the expression?';

const signs = '+-*';
const chooseSign = () => {
  const chooseExpression = Math.floor(Math.random() * 3);
  return signs[chooseExpression];
};
let answer;
const calculator = (x, y, sign) => {
  switch (sign) {
    case '+': answer = x + y;
      break;
    case '-': answer = x - y;
      break;
    default: answer = x * y;
  }
  return answer;
};
const brainCalc = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const X = chooseSign();
  const correctAnswer = calculator(a, b, X).toString();
  const question = `Question: ${a} ${X} ${b}`;
  return { question, correctAnswer };
};

export default () => {
  engine(brainCalc, description);
};
