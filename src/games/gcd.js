import engine from '..';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (x, y) => {
  if (y === 0) return x;
  if (y > x) return gcd(y, x);
  return gcd(y, x % y);
};
const checkDivisor = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const correctAnswer = gcd(a, b).toString();
  const question = `Question: ${a} ${b}`;
  return { question, correctAnswer };
};

export default () => {
  engine(checkDivisor, description);
};
