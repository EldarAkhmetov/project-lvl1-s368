import { hello, test } from '..';
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = hello();
  const isEven = number => number % 2 === 0;
  const checkEven = (num) => {
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Answer: ');
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct');
      return true;
    }
    console.log(`'${answer}' is wrong answer $(. Correct answer was '${correctAnswer}'`);
    return false;
  };
  test(userName, checkEven);
};
