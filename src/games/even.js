import engine from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const checkEven = (num) => {
  const isEven = number => number % 2 === 0;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  console.log(`Question: ${num}`);
  return correctAnswer;
};

export default () => {
  engine(checkEven, description);
};
