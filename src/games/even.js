import engine from '..';
import { getRandomNumber, booleanToStr } from '../utils';

const isEven = number => number % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const checkEven = () => {
  const num = getRandomNumber(0, 100);
  const correctAnswer = booleanToStr(isEven(num));
  const question = `${num}`;
  return { question, correctAnswer };
};

export default () => {
  engine(checkEven, description);
};
