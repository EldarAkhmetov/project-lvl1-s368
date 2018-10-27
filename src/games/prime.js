import engine from '..';
import { getRandomNumber, booleanToStr } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  if (number < 0) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 0 && number !== 1;
};

const isPrimeCheck = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = booleanToStr(isPrime(question));
  return { question, correctAnswer };
};
export default () => {
  engine(isPrimeCheck, description);
};
