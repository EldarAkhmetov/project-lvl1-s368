import engine from '..';
import { getRandomNumber, booleanToStr } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeCheck = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 0 && number !== 1;
};

const isPrime = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = booleanToStr(isPrimeCheck(question));
  return { question, correctAnswer };
};
export default () => {
  engine(isPrime, description);
};
