import engine from '..';
import { getRandomNumber } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (x, y) => {
  if (y === 0) return x;
  if (y > x) return gcd(y, x);
  return gcd(y, x % y);
};
const checkDivisor = () => {
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const correctAnswer = gcd(a, b).toString();
  const question = `${a} ${b}`;
  return { question, correctAnswer };
};

export default () => {
  engine(checkDivisor, description);
};
