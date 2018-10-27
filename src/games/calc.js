import engine from '..';
import { getRandomNumber } from '../utils';

const description = 'What is the result of the expression?';

const signs = '+-*';
const chooseSign = () => signs[getRandomNumber(0, signs.length)];

const calculator = (x, y, sign) => {
  let answer;
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
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const finalSign = chooseSign();
  const correctAnswer = calculator(a, b, finalSign).toString();
  const question = `${a} ${finalSign} ${b}`;
  return { question, correctAnswer };
};

export default () => {
  engine(brainCalc, description);
};
