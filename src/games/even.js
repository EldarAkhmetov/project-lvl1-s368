import engine from '..';

const isEven = number => number % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const checkEven = () => {
  const num = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;
  return { question, correctAnswer };
};

export default () => {
  engine(checkEven, description);
};
