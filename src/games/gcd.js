import engine from '..';

const description = 'Find the greatest common divisor of given numbers.';
const checkDivisor = (a, b) => {
  const correctAnswer = (x, y) => {
    if (y === 0) return x;
    if (y > x) return correctAnswer(y, x);
    return correctAnswer(y, x % y);
  };
  const finalCorrectAnswer = correctAnswer(a, b).toString();
  console.log(`Question: ${a} ${b}`);
  return finalCorrectAnswer;
};

export default () => {
  engine(checkDivisor, description);
};
